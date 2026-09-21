export interface OilDropRefs {
  stage: HTMLElement;
  btn: HTMLElement;
  btnSquash: HTMLElement;
  search: HTMLElement;
  input: HTMLInputElement;
  shadow: HTMLElement;
  btnIcon: HTMLElement;
  blobMain: HTMLElement;
  blobTrail: HTMLElement;
  blobMicro: HTMLElement;
  blobRipple: HTMLElement;
}

type State = 'idle' | 'falling' | 'rolling' | 'done';

const START_Y = 0, DROP_DIST = 200, GRAVITY = 800, ROLL_X = 262, ROLL_DUR = 1.3;
const K_SQ = 150, C_SQ = 2 * Math.sqrt(K_SQ), KICK_SQ = 0.01, STRETCH = 0.00012;
const LAG = 0.1, K_T = 90, C_T = 1.15 * Math.sqrt(K_T);
const LAG2 = 0.19, K_M = 70, C_M = 1.2 * Math.sqrt(K_M);
const HUE = 0.05, SAT = 0.0012, HLIDE = 0.07, DECAY = 0.015;

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export class OilDropEngine {
  private refs: OilDropRefs;
  private actx: AudioContext | null = null;

  private state: State = 'idle';
  private y = START_Y;
  private vy = 0;
  private squash = 0;
  private squashV = 0;
  private rollT = 0;
  private prevX = 0;
  private rollVel = 0;
  private bloom = 0;
  private last = 0;
  private rafId: number | null = null;

  private tX = 0; private tY = 0; private tVX = 0; private tVY = 0;
  private mX = 0; private mY = 0; private mVX = 0; private mVY = 0;

  /** true while the CSS-driven exit/re-enter reset animation is playing */
  private resetting = false;

  constructor(refs: OilDropRefs) {
    this.refs = refs;
  }

  /* ---------- public ---------- */
  start() {
    this.last = performance.now();
    this.rafId = requestAnimationFrame(this.tick);
  }

  stop() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.rafId = null;
  }

  prime() {
    if (!this.actx) {
      const AC = window.AudioContext || (window as any).webkitAudioContext;
      if (AC) this.actx = new AC();
    }
    if (this.actx?.state === 'suspended') this.actx.resume();
  }

  getState() { return this.state; }
  getInput() { return this.refs.input; }

  drop() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.resetting = false;

    this.refs.stage.removeAttribute('data-morphed');
    this.setReveal(0);
    this.refs.search.style.display = 'none';
    this.refs.search.style.pointerEvents = 'none';
    void this.refs.btn.offsetWidth; // force style flush

    this.state = 'falling';
    this.y = START_Y;
    this.vy = 0;
    this.squash = 0;
    this.squashV = 0;
    this.rollT = 0;
    this.prevX = 0;
    this.rollVel = 0;
    this.bloom = 0;
    this.tX = this.tY = this.tVX = this.tVY = 0;
    this.mX = this.mY = this.mVX = this.mVY = 0;
    this.resetVisuals();

    this.last = performance.now();
    this.rafId = requestAnimationFrame(this.tick);
  }

  /* ---------- internals ---------- */
  private setReveal(p: number) {
    this.refs.stage.style.setProperty('--reveal', p.toFixed(4));
  }

  private resetVisuals() {
    const r = this.refs;
    r.btn.style.transition = '';               // clear any leftover CSS transition
    r.btn.style.transform = `translate(0,${START_Y}px)`;
    r.btnSquash.style.transform = 'scale(1,1)';
    r.blobTrail.style.transform = 'translate(0,0) scale(1)';
    r.blobMicro.style.transform = 'translate(0,0) scale(1)';
    r.blobMicro.style.opacity = '0.85';
    r.blobMain.style.filter = r.blobTrail.style.filter = r.blobMicro.style.filter = '';
    r.btnIcon.style.transform = 'rotate(0)';
    r.shadow.style.opacity = '0';
    r.shadow.style.left = '50%';
    r.blobRipple.style.transition = 'none';
    r.blobRipple.style.transform = 'translate(0,0) scale(.35)';
    r.blobRipple.style.opacity = '0';
  }

  private noise(c: AudioContext, dur: number, decay = 0): AudioBufferSourceNode {
    const buf = c.createBuffer(1, Math.max(1, c.sampleRate * dur), c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) {
      d[i] = (Math.random() * 2 - 1) * (decay ? Math.pow(1 - i / d.length, decay) : 1);
    }
    const s = c.createBufferSource();
    s.buffer = buf;
    return s;
  }

  private impactSound(s = 1) {
    const c = this.actx; if (!c) return;
    const t = c.currentTime, dur = 0.3;

    const src = this.noise(c, dur, 2.6);
    const bp = c.createBiquadFilter(); bp.type = 'bandpass';
    bp.frequency.value = 900; bp.Q.value = 1.4;
    const g = c.createGain();
    g.gain.setValueAtTime(1e-4, t);
    g.gain.exponentialRampToValueAtTime(0.2 * s, t + 0.008);
    g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
    src.connect(bp).connect(g).connect(c.destination);
    src.start(t); src.stop(t + dur + 0.02);

    const o = c.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(190, t);
    o.frequency.exponentialRampToValueAtTime(58, t + 0.2);
    const og = c.createGain();
    og.gain.setValueAtTime(1e-4, t);
    og.gain.exponentialRampToValueAtTime(0.14 * s, t + 0.012);
    og.gain.exponentialRampToValueAtTime(1e-4, t + 0.24);
    o.connect(og).connect(c.destination);
    o.start(t); o.stop(t + 0.26);
  }

  private rollSound(dur = 1.3) {
    const c = this.actx; if (!c) return;
    const t = c.currentTime, src = this.noise(c, dur);
    const lp = c.createBiquadFilter(); lp.type = 'lowpass';
    lp.frequency.setValueAtTime(240, t);
    lp.frequency.linearRampToValueAtTime(1100, t + dur * 0.55);
    lp.frequency.linearRampToValueAtTime(220, t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(1e-4, t);
    g.gain.linearRampToValueAtTime(0.04, t + 0.12);
    g.gain.linearRampToValueAtTime(1e-4, t + dur);
    src.connect(lp).connect(g).connect(c.destination);
    src.start(t); src.stop(t + dur + 0.02);
  }

  private fireRipple() {
    const el = this.refs.blobRipple;
    Object.assign(el.style, {
      transition: 'none',
      transform: 'translate(0,0) scale(.35)',
      opacity: '.85',
      borderWidth: '2.4px',
    });
    requestAnimationFrame(() => {
      Object.assign(el.style, {
        transition: 'transform .95s cubic-bezier(.22,1,.36,1),opacity .95s ease,border-width .95s ease',
        transform: 'translate(0,0) scale(3.4)',
        opacity: '0',
        borderWidth: '0.6px',
      });
    });
  }

  private onImpact() {
    const spd = Math.abs(this.vy);
    this.squashV = this.vy * KICK_SQ;
    this.tVY += this.vy * 0.06;
    this.mVY += this.vy * 0.045;
    this.vy = 0;
    this.state = 'rolling';
    this.rollT = 0;
    this.bloom = 1;

    this.fireRipple();
    this.impactSound(Math.min(spd / 400, 1.4));
    this.rollSound(ROLL_DUR * 1.05);

    this.refs.stage.setAttribute('data-morphed', '');
    this.refs.search.style.display = 'flex';
    this.refs.search.style.pointerEvents = 'auto';
  }

  private tick = (now: number) => {
    const dt = Math.min((now - this.last) / 1000, 1 / 30);
    this.last = now;
    const { btn, btnSquash, shadow, blobMain, blobTrail, blobMicro, btnIcon } = this.refs;

    /* fall */
    if (this.state === 'falling') {
      this.vy += GRAVITY * dt;
      this.y += this.vy * dt;
      if (this.y >= START_Y + DROP_DIST) {
        this.y = START_Y + DROP_DIST;
        this.onImpact();
      }
    }

    /* roll */
    let rollX = 0;
    if (this.state === 'rolling' || this.state === 'done') {
      if (this.state === 'rolling') {
        this.rollT += dt / ROLL_DUR;
        if (this.rollT >= 1) { this.rollT = 1; this.state = 'done'; }
      }
      rollX = ROLL_X * easeOut(this.rollT);
    }
    this.rollVel = dt > 0 ? (rollX - this.prevX) / dt : 0;
    this.prevX = rollX;

    this.setReveal(rollX / ROLL_X);

    /* squash */
    this.squashV += (-K_SQ * this.squash - C_SQ * this.squashV) * dt;
    this.squash += this.squashV * dt;
    const stretch = this.state === 'falling' ? clamp(this.vy * STRETCH, 0, 0.25) : 0;

    /* transform write is suppressed while the reset() CSS animation runs */
    if (!this.resetting) {
      btn.style.transform = `translate(${rollX.toFixed(2)}px,${this.y.toFixed(2)}px)`;
    }

    btnSquash.style.transform =
      `scale(${(1 + this.squash - stretch).toFixed(4)},${(1 - this.squash + stretch).toFixed(4)})`;

    /* trail */
    const txT = -this.rollVel * LAG, tyT = -this.vy * LAG;
    this.tVX += ((txT - this.tX) * K_T - this.tVX * C_T) * dt;
    this.tVY += ((tyT - this.tY) * K_T - this.tVY * C_T) * dt;
    this.tX = clamp(this.tX + this.tVX * dt, -70, 70);
    this.tY = clamp(this.tY + this.tVY * dt, -70, 70);
    const dT = Math.min(Math.hypot(this.tX, this.tY) / 45, 1);
    blobTrail.style.transform =
      `translate(${this.tX.toFixed(2)}px,${this.tY.toFixed(2)}px) scale(${(1 - dT * 0.35).toFixed(3)})`;

    /* micro */
    const mxT = -this.rollVel * LAG2, myT = -this.vy * LAG2;
    this.mVX += ((mxT - this.mX) * K_M - this.mVX * C_M) * dt;
    this.mVY += ((myT - this.mY) * K_M - this.mVY * C_M) * dt;
    this.mX = clamp(this.mX + this.mVX * dt, -80, 80);
    this.mY = clamp(this.mY + this.mVY * dt, -80, 80);
    const dM = Math.min(Math.hypot(this.mX, this.mY) / 55, 1);
    blobMicro.style.transform =
      `translate(${this.mX.toFixed(2)}px,${this.mY.toFixed(2)}px) scale(${(1 - dM * 0.55).toFixed(3)})`;
    blobMicro.style.opacity = (0.85 - dM * 0.55).toFixed(3);

    /* iridescence + bloom */
    const speed = Math.hypot(this.rollVel, this.vy);
    this.bloom *= Math.pow(DECAY, dt);
    const hue = speed * HUE;
    blobMain.style.filter =
      `hue-rotate(${hue.toFixed(1)}deg) saturate(${(1 + speed * SAT + this.bloom * 0.4).toFixed(3)}) brightness(${(1 + this.bloom * 0.7).toFixed(3)})`;
    blobTrail.style.filter =
      `hue-rotate(${(hue + dT * 40).toFixed(1)}deg) saturate(${(1 + speed * SAT + dT * 0.55).toFixed(3)}) brightness(${(1 - dT * 0.22 + this.bloom * 0.3).toFixed(3)})`;
    blobMicro.style.filter =
      `hue-rotate(${(hue + dM * 70).toFixed(1)}deg) saturate(${(1 + speed * SAT + dM * 0.85).toFixed(3)}) brightness(${(1 - dM * 0.35 + this.bloom * 0.2).toFixed(3)})`;

    /* highlight */
    blobMain.style.setProperty('--hx', `${clamp(34 - this.rollVel * HLIDE * 0.4, 15, 65).toFixed(1)}%`);
    blobMain.style.setProperty('--hy', `${clamp(28 - this.vy * HLIDE * 0.4, 12, 55).toFixed(1)}%`);

    /* icon spin */
    if (this.state === 'rolling' || this.state === 'done') {
      btnIcon.style.transform = `rotate(${(360 * easeOut(this.rollT)).toFixed(2)}deg)`;
    }

    /* shadow */
    if (this.state === 'falling') {
      const near = 1 - Math.min(Math.max(0, -this.y) / 340, 1);
      shadow.style.opacity = (near * near * 0.9).toFixed(3);
      shadow.style.transform =
        `scale(${(0.5 + near * 0.9).toFixed(3)},${(0.55 + near * 0.55).toFixed(3)})`;
    } else if (this.state === 'rolling') {
      shadow.style.opacity = (0.5 * (1 - this.rollT)).toFixed(3);
    }
    shadow.style.left = `calc(50% + ${(-(this.tX * 0.15 + this.mX * 0.05)).toFixed(2)}px)`;

    /* settle */
    if (
      this.state === 'done' && this.bloom < 0.01 &&
      Math.abs(this.squash) < 0.0015 && Math.abs(this.squashV) < 0.02 &&
      Math.abs(this.tX) < 0.15 && Math.abs(this.tY) < 0.15 &&
      Math.abs(this.tVX) < 1 && Math.abs(this.tVY) < 1 &&
      Math.abs(this.mX) < 0.2 && Math.abs(this.mY) < 0.2 &&
      Math.abs(this.mVX) < 1.2 && Math.abs(this.mVY) < 1.2
    ) {
      btn.style.transform = `translate(${ROLL_X}px, ${START_Y + DROP_DIST}px)`;
      btnSquash.style.transform = 'scale(1,1)';
      blobTrail.style.transform = 'translate(0,0) scale(1)';
      blobMicro.style.transform = 'translate(0,0) scale(1)';
      blobMicro.style.opacity = '0.85';
      blobMain.style.filter = blobTrail.style.filter = blobMicro.style.filter = '';
      btnIcon.style.transform = 'rotate(360deg)';
      this.setReveal(1);
      this.rafId = null;
      return;
    }

    this.rafId = requestAnimationFrame(this.tick);
  };

  /* ---------- four-phase reset ---------- */
  reset() {
  if (this.rafId !== null) cancelAnimationFrame(this.rafId);
  this.rafId = null;

  const { btn, btnSquash, search, stage, shadow, blobMain, blobTrail, blobMicro, btnIcon, blobRipple } = this.refs;

  /* ---- kill engine state ---- */
  this.state = 'idle';
  this.y = START_Y;
  this.vy = 0;
  this.squash = 0;
  this.squashV = 0;
  this.rollT = 0;
  this.prevX = 0;
  this.rollVel = 0;
  this.bloom = 0;
  this.tX = this.tY = this.tVX = this.tVY = 0;
  this.mX = this.mY = this.mVX = this.mVY = 0;
  this.resetting = true;

  /* ---- hide non-button UI ---- */
  stage.removeAttribute('data-morphed');
  this.setReveal(0);
  search.style.display = 'none';
  search.style.pointerEvents = 'none';
  shadow.style.opacity = '0';
  blobMain.style.filter = blobTrail.style.filter = blobMicro.style.filter = '';
  blobRipple.style.transition = 'none';
  blobRipple.style.transform = 'translate(0,0) scale(.35)';
  blobRipple.style.opacity = '0';
  btnSquash.style.transform = 'scale(1,1)';
  btnIcon.style.transform = 'rotate(0deg)';

  /* ---- geometry ---- */
  const startX = ROLL_X;
  const startY = START_Y + DROP_DIST;
  const OFF    = 1400;

  /* ---- phase durations ---- */
  const D_EXIT  = 0.55;
  const D_RISE  = 0.35;
  const D_ENTRY = 0.85;

  const EASE_EXIT  = 'cubic-bezier(.55,0,.85,.35)';
  const EASE_ENTRY = 'cubic-bezier(.22,1,.36,1)';

  /* ---- trail lag ---- */
  const LAG_TRAIL = 0.12;
  const LAG_MICRO = 0.22;

  /* ---- local drag offsets ---- */
  const TRAIL_DRAG_X = -50;
  const MICRO_DRAG_X = -90;

  /* ================================================================
     PHASE 1 — button rolls off RIGHT; trails drag behind
     ================================================================ */
  btn.style.transition       = `transform ${D_EXIT}s ${EASE_EXIT}`;
  btn.style.transform        = `translate(${startX + OFF}px, ${startY}px)`;

  blobTrail.style.transition = `transform ${D_EXIT}s ${EASE_EXIT} ${LAG_TRAIL}s`;
  blobTrail.style.transform  = `translate(${TRAIL_DRAG_X}px, 0) scale(.9)`;

  blobMicro.style.transition = `transform ${D_EXIT}s ${EASE_EXIT} ${LAG_MICRO}s`;
  blobMicro.style.transform  = `translate(${MICRO_DRAG_X}px, 0) scale(.7)`;

  setTimeout(() => {
    /* ==============================================================
       PHASE 2 — teleport off LEFT, reset trails
       ============================================================== */
    btn.style.transition       = 'none';
    btn.style.transform        = `translate(-${OFF}px, ${startY}px)`;

    blobTrail.style.transition = 'none';
    blobTrail.style.transform  = 'translate(0,0) scale(1)';

    blobMicro.style.transition = 'none';
    blobMicro.style.transform  = 'translate(0,0) scale(1)';

    void btn.offsetWidth;

    /* ==============================================================
       PHASE 3 — rise UP off-screen (fast, invisible)
       ============================================================== */
    btn.style.transition       = `transform ${D_RISE}s ${EASE_EXIT}`;
    btn.style.transform        = `translate(-${OFF}px, ${START_Y}px)`;

    blobTrail.style.transition = `transform ${D_RISE}s ${EASE_EXIT} ${LAG_TRAIL}s`;
    blobTrail.style.transform  = `translate(0, 30px) scale(.95)`;

    blobMicro.style.transition = `transform ${D_RISE}s ${EASE_EXIT} ${LAG_MICRO}s`;
    blobMicro.style.transform  = `translate(0, 60px) scale(.75)`;

    setTimeout(() => {
      /* ============================================================
         PHASE 4 — roll into origin; trails drag behind
         ============================================================ */
      btn.style.transition       = `transform ${D_ENTRY}s ${EASE_ENTRY}`;
      btn.style.transform        = `translate(0px, ${START_Y}px)`;

      blobTrail.style.transition = `transform ${D_ENTRY}s ${EASE_ENTRY} ${LAG_TRAIL}s`;
      blobTrail.style.transform  = `translate(-60px, 0) scale(.85)`;

      blobMicro.style.transition = `transform ${D_ENTRY}s ${EASE_ENTRY} ${LAG_MICRO}s`;
      blobMicro.style.transform  = `translate(-110px, 0) scale(.6)`;

      /* ---- done ---- */
      setTimeout(() => {
        btn.style.transition       = '';
        btn.style.transform        = `translate(0px, ${START_Y}px)`;

        blobTrail.style.transition = '';
        blobTrail.style.transform  = 'translate(0,0) scale(1)';

        blobMicro.style.transition = '';
        blobMicro.style.transform  = 'translate(0,0) scale(1)';
        blobMicro.style.opacity    = '0.85';

        this.resetting = false;
      }, (D_ENTRY + 0.15) * 1000);
    }, (D_RISE + 0.05) * 1000);
  }, (D_EXIT + 0.05) * 1000);

  this.last = performance.now();
  this.rafId = requestAnimationFrame(this.tick);
}
}