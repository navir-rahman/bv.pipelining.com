'use client';

import { useEffect, useId, useRef } from 'react';
import { OilDropEngine, type OilDropRefs } from './oilDropEngine';
import styles from './OilDropSearch.module.css';

interface OilDropButtonProps {
  placeholder?: string;
  onSubmit?: (query: string) => void;
  className?: string;
  mapActive?: boolean;
}

export default function OilDropButton({
  placeholder = 'Search anything…',
  onSubmit,
  className,
  mapActive,
}: OilDropButtonProps) {
  const reactId = useId();
  const filterId = `oilGoo-${reactId.replace(/:/g, '')}`;

  const wrapRef       = useRef<HTMLDivElement>(null);
  const btnRef        = useRef<HTMLButtonElement>(null);
  const btnSquashRef  = useRef<HTMLSpanElement>(null);
  const searchRef     = useRef<HTMLFormElement>(null);
  const inputRef      = useRef<HTMLInputElement>(null);
  const shadowRef     = useRef<HTMLDivElement>(null);
  const btnIconRef    = useRef<HTMLSpanElement>(null);
  const blobMainRef   = useRef<HTMLSpanElement>(null);
  const blobTrailRef  = useRef<HTMLSpanElement>(null);
  const blobMicroRef  = useRef<HTMLSpanElement>(null);
  const blobRippleRef = useRef<HTMLSpanElement>(null);
  const engineRef     = useRef<OilDropEngine | null>(null);
  const prevActiveRef = useRef<boolean | undefined>(mapActive);

  // ---- engine setup ----
  useEffect(() => {
    if (
      !wrapRef.current || !btnRef.current || !btnSquashRef.current ||
      !searchRef.current || !inputRef.current || !shadowRef.current ||
      !btnIconRef.current || !blobMainRef.current || !blobTrailRef.current ||
      !blobMicroRef.current || !blobRippleRef.current
    ) return;

    const refs: OilDropRefs = {
      stage:      wrapRef.current,
      btn:        btnRef.current,
      btnSquash:  btnSquashRef.current,
      search:     searchRef.current,
      input:      inputRef.current,
      shadow:     shadowRef.current,
      btnIcon:    btnIconRef.current,
      blobMain:   blobMainRef.current,
      blobTrail:  blobTrailRef.current,
      blobMicro:  blobMicroRef.current,
      blobRipple: blobRippleRef.current,
    };

    const engine = new OilDropEngine(refs);
    engineRef.current = engine;
    engine.start();

    return () => {
      engine.stop();
      engineRef.current = null;
    };
  }, []);

  // ---- react to mapActive transitions ----
  useEffect(() => {
    const was = prevActiveRef.current;
    prevActiveRef.current = mapActive;

    // only act when the parent actually controls mapActive
    if (mapActive === undefined) return;
    // skip the initial mount (was === mapActive on first render)
    if (was === mapActive) return;

    const e = engineRef.current;
    if (!e) return;

    if (mapActive) e.drop();
    else e.reset();
  }, [mapActive]);

  const handleButtonClick = () => {
    const e = engineRef.current;
    if (!e) return;
    e.prime();

    if (e.getState() === 'done') {
      e.getInput().focus();
      onSubmit?.(inputRef.current?.value ?? '');
      return;
    }

    // uncontrolled: fire the animation directly
    // controlled (mapActive provided): let the parent drive via prop
    if (mapActive === undefined) e.drop();
    onSubmit?.(inputRef.current?.value ?? '');
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    onSubmit?.(inputRef.current?.value ?? '');
  };

  return (
    <>
      <svg className={styles.filters} aria-hidden="true">
        <defs>
          <filter id={filterId} x="-60%" y="-60%" width="220%" height="220%"
                  colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            />
          </filter>
        </defs>
      </svg>

      <div ref={wrapRef} className={`${styles.wrap} ${className ?? ''}`}>
        <div ref={shadowRef} className={styles.shadow} />

        <form
          ref={searchRef}
          className={styles.search}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input
            ref={inputRef}
            className={styles.input}
            type="search"
            placeholder={placeholder}
            aria-label="Search"
          />
        </form>

        <button
          id='oil_drop_button'
          ref={btnRef}
          type="button"
          aria-label="Search"
          className={styles.btn}
          onClick={handleButtonClick}
        >
          <span ref={btnSquashRef} className={styles.btnSquash}>
            <span className={styles.gooWrap} style={{ filter: `url(#${filterId})` }}>
              <span ref={blobMainRef}   className={`${styles.blob} ${styles.blobMain}`} />
              <span ref={blobTrailRef}  className={`${styles.blob} ${styles.blobTrail}`} />
              <span ref={blobMicroRef}  className={`${styles.blob} ${styles.blobMicro}`} />
              <span ref={blobRippleRef} className={styles.blobRipple} />
            </span>
            <span ref={btnIconRef} className={styles.btnIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor"
                   strokeWidth="2.4" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.6" y1="16.6" x2="21" y2="21" />
              </svg>
            </span>
          </span>
        </button>
      </div>
    </>
  );
}