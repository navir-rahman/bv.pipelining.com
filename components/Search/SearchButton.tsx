
"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

const SearchButton = forwardRef<
  HTMLButtonElement,
  { onClick: () => void }
>(function SearchButton({ onClick }, ref) {
  /* ============================================================
     STATE
     ============================================================ */

  // Controls whether the button has completed its drop animation.
  const [dropped, setDropped] = useState(false);

  // Controls whether the test search bar is visible.
  const [showSearchBar, setShowSearchBar] =
    useState(false);

  /* ============================================================
     REFERENCES
     ============================================================ */

  // Wrapper around the animated button.
  const buttonWrapRef =
    useRef<HTMLDivElement>(null);

  // Main liquid blob.
  const blobMainRef =
    useRef<HTMLSpanElement>(null);

  // First liquid trail.
  const blobTrailRef =
    useRef<HTMLSpanElement>(null);

  // Small liquid trail.
  const blobMicroRef =
    useRef<HTMLSpanElement>(null);

  // Liquid impact ripple.
  const blobRippleRef =
    useRef<HTMLSpanElement>(null);

  // Shadow below the falling blob.
  const shadowRef =
    useRef<HTMLSpanElement>(null);

  // Container used for squash/stretch.
  const squashRef =
    useRef<HTMLSpanElement>(null);

  // Search icon.
  const iconRef =
    useRef<HTMLSpanElement>(null);

  // Animation frame.
  const animationFrameRef =
    useRef<number | null>(null);

  // Track whether component is mounted.
  const mountedRef =
    useRef(true);

  /* ============================================================
     SVG GOO FILTER
     ============================================================ */

  /*
    This creates the liquid/metaball effect.

    The individual blobs are blurred first and then
    their alpha values are pushed back toward solid.
  */

  /* ============================================================
     ANIMATION
     ============================================================ */

  useEffect(() => {
    // Component is alive.
    mountedRef.current = true;

    // Get DOM elements.
    const wrapper = buttonWrapRef.current;
    const blobMain = blobMainRef.current;
    const blobTrail = blobTrailRef.current;
    const blobMicro = blobMicroRef.current;
    const ripple = blobRippleRef.current;
    const shadow = shadowRef.current;
    const squash = squashRef.current;
    const icon = iconRef.current;

    // Stop when the elements aren't ready.
    if (
      !wrapper ||
      !blobMain ||
      !blobTrail ||
      !blobMicro ||
      !ripple ||
      !shadow ||
      !squash ||
      !icon
    ) {
      return;
    }

    /* ----------------------------------------------------------
       PHYSICS SETTINGS
       ---------------------------------------------------------- */

    // How far the button falls downward.
    const DROP_DISTANCE = 250;

    // How long the drop lasts.
    const DROP_DURATION = 850;

    // How far it rolls after impact.
    const ROLL_DISTANCE = 45;

    // How long the roll lasts.
    const ROLL_DURATION = 650;

    // Gravity-like acceleration.
    const GRAVITY = 1100;

    // Squash spring.
    const SQUASH_STRENGTH = 150;

    // Squash damping.
    const SQUASH_DAMPING =
      2 * Math.sqrt(SQUASH_STRENGTH);

    // Main trail lag.
    const TRAIL_LAG = 0.1;

    // Trail spring.
    const TRAIL_SPRING = 90;

    // Trail damping.
    const TRAIL_DAMPING =
      1.15 * Math.sqrt(TRAIL_SPRING);

    // Micro trail lag.
    const MICRO_LAG = 0.19;

    // Micro trail spring.
    const MICRO_SPRING = 70;

    // Micro trail damping.
    const MICRO_DAMPING =
      1.2 * Math.sqrt(MICRO_SPRING);

    /* ----------------------------------------------------------
       ANIMATION STATE
       ---------------------------------------------------------- */

    // Button states.
    let state:
      | "idle"
      | "falling"
      | "rolling"
      | "done" = "idle";

    // Current vertical position.
    let y = 0;

    // Vertical velocity.
    let velocityY = 0;

    // Current squash amount.
    let squashAmount = 0;

    // Squash velocity.
    let squashVelocity = 0;

    // Roll progress.
    let rollProgress = 0;

    // Previous horizontal position.
    let previousRollX = 0;

    // Current horizontal velocity.
    let rollVelocity = 0;

    // Main trail.
    let trailX = 0;
    let trailY = 0;

    // Main trail velocity.
    let trailVX = 0;
    let trailVY = 0;

    // Micro trail.
    let microX = 0;
    let microY = 0;

    // Micro trail velocity.
    let microVX = 0;
    let microVY = 0;

    // Previous animation time.
    let lastTime = performance.now();

    /* ----------------------------------------------------------
       HELPERS
       ---------------------------------------------------------- */

    // Clamp a number.
    const clamp = (
      value: number,
      min: number,
      max: number,
    ) =>
      Math.min(
        Math.max(value, min),
        max,
      );

    // Cubic ease-out.
    const easeOut = (value: number) =>
      1 -
      Math.pow(
        1 - value,
        3,
      );

    /* ----------------------------------------------------------
       IMPACT
       ---------------------------------------------------------- */

    const impact = () => {
      // Convert falling velocity into squash force.
      squashVelocity =
        velocityY * 0.008;

      // Push the trail.
      trailVY +=
        velocityY * 0.055;

      // Push the tiny trail.
      microVY +=
        velocityY * 0.04;

      // Stop vertical motion.
      velocityY = 0;

      // Move into rolling state.
      state = "rolling";

      // Reset roll progress.
      rollProgress = 0;

      /* --------------------------------------------------------
         RIPPLE
         -------------------------------------------------------- */

      // Reset ripple immediately.
      ripple.style.transition =
        "none";

      ripple.style.transform =
        "translate(-50%, -50%) scale(.35)";

      ripple.style.opacity =
        "0.85";

      ripple.style.borderWidth =
        "2.4px";

      // Start outward animation.
      requestAnimationFrame(() => {
        if (!mountedRef.current) {
          return;
        }

        ripple.style.transition =
          "transform .8s cubic-bezier(.22,1,.36,1), " +
          "opacity .8s ease, " +
          "border-width .8s ease";

        ripple.style.transform =
          "translate(-50%, -50%) scale(3.2)";

        ripple.style.opacity =
          "0";

        ripple.style.borderWidth =
          "0.6px";
      });
    };

    /* ----------------------------------------------------------
       ANIMATION LOOP
       ---------------------------------------------------------- */

    const tick = (now: number) => {
      // Stop after component disappears.
      if (!mountedRef.current) {
        return;
      }

      // Calculate elapsed time.
      let dt =
        (now - lastTime) /
        1000;

      // Save current time.
      lastTime = now;

      // Prevent huge jumps.
      dt = Math.min(
        dt,
        1 / 30,
      );

      /* ========================================================
         FALLING
         ======================================================== */

      if (
        state === "falling"
      ) {
        // Apply gravity.
        velocityY +=
          GRAVITY * dt;

        // Move down.
        y +=
          velocityY * dt;

        // Hit the bottom of the drop.
        if (
          y >=
          DROP_DISTANCE
        ) {
          // Stop exactly at the impact point.
          y = DROP_DISTANCE;

          // Trigger impact.
          impact();
        }
      }

      /* ========================================================
         ROLLING
         ======================================================== */

      let rollX = 0;

      if (
        state === "rolling" ||
        state === "done"
      ) {
        // Continue the roll.
        if (
          state === "rolling"
        ) {
          rollProgress +=
            dt /
            (
              ROLL_DURATION /
              1000
            );

          // Finish the roll.
          if (
            rollProgress >= 1
          ) {
            rollProgress = 1;

            state = "done";

            // Tell React the animation finished.
            setDropped(true);

            // Reveal the test search bar.
            setShowSearchBar(true);

            // Notify parent.
            onClick();
          }
        }

        // Horizontal roll.
        rollX =
          ROLL_DISTANCE *
          easeOut(
            rollProgress,
          );
      }

      /* --------------------------------------------------------
         HORIZONTAL VELOCITY
         -------------------------------------------------------- */

      rollVelocity =
        dt > 0
          ? (
              rollX -
              previousRollX
            ) / dt
          : 0;

      previousRollX =
        rollX;

      /* ========================================================
         SQUASH / STRETCH
         ======================================================== */

      // Spring force.
      squashVelocity +=
        (
          -SQUASH_STRENGTH *
            squashAmount -
          SQUASH_DAMPING *
            squashVelocity
        ) *
        dt;

      // Update squash.
      squashAmount +=
        squashVelocity *
        dt;

      // Stretch while falling.
      const stretch =
        state === "falling"
          ? clamp(
              velocityY *
                0.00012,
              0,
              0.28,
            )
          : 0;

      // Horizontal scale.
      const scaleX =
        1 +
        squashAmount -
        stretch;

      // Vertical scale.
      const scaleY =
        1 -
        squashAmount +
        stretch;

      /* --------------------------------------------------------
         MOVE COMPLETE BUTTON
         -------------------------------------------------------- */

      wrapper.style.transform =
        `translate(${rollX.toFixed(2)}px, ${y.toFixed(2)}px)`;

      /* --------------------------------------------------------
         SQUASH COMPLETE LIQUID
         -------------------------------------------------------- */

      squash.style.transform =
        `scale(${scaleX.toFixed(4)}, ${scaleY.toFixed(4)})`;

      /* ========================================================
         MAIN TRAIL SPRING
         ======================================================== */

      // Target trail movement.
      const targetTrailX =
        -rollVelocity *
        TRAIL_LAG;

      const targetTrailY =
        -velocityY *
        TRAIL_LAG;

      // Spring horizontally.
      trailVX +=
        (
          (
            targetTrailX -
            trailX
          ) *
            TRAIL_SPRING -
          trailVX *
            TRAIL_DAMPING
        ) *
        dt;

      // Spring vertically.
      trailVY +=
        (
          (
            targetTrailY -
            trailY
          ) *
            TRAIL_SPRING -
          trailVY *
            TRAIL_DAMPING
        ) *
        dt;

      // Update trail position.
      trailX +=
        trailVX * dt;

      trailY +=
        trailVY * dt;

      // Keep trail reasonable.
      trailX = clamp(
        trailX,
        -70,
        70,
      );

      trailY = clamp(
        trailY,
        -70,
        70,
      );

      // Calculate trail distance.
      const trailDistance =
        Math.min(
          Math.hypot(
            trailX,
            trailY,
          ) / 45,
          1,
        );

      // Scale trail down slightly.
      const trailScale =
        1 -
        trailDistance *
          0.35;

      // Apply trail movement.
      blobTrail.style.transform =
        `translate(${trailX.toFixed(2)}px, ${trailY.toFixed(2)}px) ` +
        `scale(${trailScale.toFixed(3)})`;

      /* ========================================================
         MICRO TRAIL
         ======================================================== */

      // Target micro trail.
      const targetMicroX =
        -rollVelocity *
        MICRO_LAG;

      const targetMicroY =
        -velocityY *
        MICRO_LAG;

      // Spring horizontally.
      microVX +=
        (
          (
            targetMicroX -
            microX
          ) *
            MICRO_SPRING -
          microVX *
            MICRO_DAMPING
        ) *
        dt;

      // Spring vertically.
      microVY +=
        (
          (
            targetMicroY -
            microY
          ) *
            MICRO_SPRING -
          microVY *
            MICRO_DAMPING
        ) *
        dt;

      // Update micro trail.
      microX +=
        microVX * dt;

      microY +=
        microVY * dt;

      // Clamp micro movement.
      microX = clamp(
        microX,
        -80,
        80,
      );

      microY = clamp(
        microY,
        -80,
        80,
      );

      // Distance.
      const microDistance =
        Math.min(
          Math.hypot(
            microX,
            microY,
          ) / 55,
          1,
        );

      // Scale.
      const microScale =
        1 -
        microDistance *
          0.55;

      // Apply transform.
      blobMicro.style.transform =
        `translate(${microX.toFixed(2)}px, ${microY.toFixed(2)}px) ` +
        `scale(${microScale.toFixed(3)})`;

      // Fade slightly.
      blobMicro.style.opacity =
        (
          0.85 -
          microDistance *
            0.55
        ).toFixed(3);

      /* ========================================================
         LIQUID HIGHLIGHT
         ======================================================== */

      // Current movement speed.
      const speed =
        Math.hypot(
          rollVelocity,
          velocityY,
        );

      // Hue shift.
      const hue =
        speed *
        0.05;

      // Saturation.
      const saturation =
        1 +
        speed *
          0.0012;

      // Main blob filter.
      blobMain.style.filter =
        `hue-rotate(${hue.toFixed(1)}deg) ` +
        `saturate(${saturation.toFixed(3)})`;

      // Trail hue.
      blobTrail.style.filter =
        `hue-rotate(${(
          hue +
          trailDistance *
            40
        ).toFixed(1)}deg) ` +
        `saturate(${(
          1 +
          trailDistance *
            0.55
        ).toFixed(3)})`;

      // Micro hue.
      blobMicro.style.filter =
        `hue-rotate(${(
          hue +
          microDistance *
            70
        ).toFixed(1)}deg) ` +
        `saturate(${(
          1 +
          microDistance *
            0.85
        ).toFixed(3)})`;

      // Move highlight.
      const highlightX =
        clamp(
          34 -
            rollVelocity *
              0.014,
          15,
          65,
        );

      const highlightY =
        clamp(
          28 -
            velocityY *
              0.014,
          12,
          55,
        );

      // Set highlight X.
      blobMain.style.setProperty(
        "--hx",
        `${highlightX.toFixed(1)}%`,
      );

      // Set highlight Y.
      blobMain.style.setProperty(
        "--hy",
        `${highlightY.toFixed(1)}%`,
      );

      /* ========================================================
         ICON
         ======================================================== */

      if (
        state === "rolling" ||
        state === "done"
      ) {
        // Rotate icon as button rolls.
        const rotation =
          360 *
          easeOut(
            rollProgress,
          );

        icon.style.transform =
          `rotate(${rotation.toFixed(2)}deg)`;
      }

      /* ========================================================
         SHADOW
         ======================================================== */

      if (
        state === "falling"
      ) {
        // Distance from impact.
        const distance =
          Math.max(
            0,
            DROP_DISTANCE -
              y,
          );

        // Nearer means stronger shadow.
        const near =
          1 -
          Math.min(
            distance /
              DROP_DISTANCE,
            1,
          );

        // Show shadow.
        shadow.style.opacity =
          (
            near *
            near *
            0.9
          ).toFixed(3);

        // Change shadow size.
        shadow.style.transform =
          `translateX(-50%) scale(${(
            0.45 +
            near *
              0.8
          ).toFixed(3)})`;
      } else if (
        state === "rolling"
      ) {
        // Fade during roll.
        shadow.style.opacity =
          (
            0.5 *
            (
              1 -
              rollProgress
            )
          ).toFixed(3);
      } else {
        // Hide after animation.
        shadow.style.opacity =
          "0";
      }

      /* ========================================================
         CONTINUE
         ======================================================== */

      animationFrameRef.current =
        requestAnimationFrame(
          tick,
        );
    };

    /* ==========================================================
       START
       ========================================================== */

    // Start from the current layout position.
    y = 0;

    // Falling state.
    state = "falling";

    // Reset velocity.
    velocityY = 0;

    // Reset squash.
    squashAmount = 0;
    squashVelocity = 0;

    // Reset roll.
    rollProgress = 0;
    previousRollX = 0;
    rollVelocity = 0;

    // Reset trails.
    trailX = 0;
    trailY = 0;
    trailVX = 0;
    trailVY = 0;

    microX = 0;
    microY = 0;
    microVX = 0;
    microVY = 0;

    // Reset visuals.
    wrapper.style.transform =
      "translate(0, 0)";

    squash.style.transform =
      "scale(1,1)";

    blobTrail.style.transform =
      "translate(0,0) scale(1)";

    blobMicro.style.transform =
      "translate(0,0) scale(1)";

    blobMicro.style.opacity =
      "0.85";

    blobMain.style.filter =
      "";

    blobTrail.style.filter =
      "";

    blobMicro.style.filter =
      "";

    icon.style.transform =
      "rotate(0deg)";

    shadow.style.opacity =
      "0";

    ripple.style.opacity =
      "0";

    // Start the animation.
    lastTime =
      performance.now();

    animationFrameRef.current =
      requestAnimationFrame(
        tick,
      );

    /* ==========================================================
       CLEANUP
       ========================================================== */

    return () => {
      mountedRef.current =
        false;

      // Stop animation.
      if (
        animationFrameRef.current !==
        null
      ) {
        cancelAnimationFrame(
          animationFrameRef.current,
        );
      }
    };
  }, [onClick]);

  /* ============================================================
     CLICK
     ============================================================ */

  const handleClick = () => {
    // Don't repeatedly trigger while animation is running.
    if (!dropped) {
      return;
    }

    // Parent click.
    onClick();
  };

  return (
    <>
      {/* ======================================================
          GOO FILTER
          ====================================================== */}

      <svg
        width="0"
        height="0"
        aria-hidden="true"
        className="absolute"
      >
        <defs>
          <filter
            id="search-button-goo"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="7"
              result="blur"
            />

            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 18 -7
              "
            />
          </filter>
        </defs>
      </svg>

      {/* ======================================================
          BUTTON WRAPPER
          ====================================================== */}

      <div
        ref={buttonWrapRef}
        className="relative h-14 w-14 shrink-0"
      >
        {/* ====================================================
            SHADOW
            ==================================================== */}

        <span
          ref={shadowRef}
          className="pointer-events-none absolute left-1/2 top-[50px] h-3 w-[70px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(80,180,240,.55) 0%, rgba(80,180,240,0) 70%)",
            filter:
              "blur(2px)",
            opacity: 0,
          }}
        />

        {/* ====================================================
            ACTUAL BUTTON
            ==================================================== */}

        <button
          ref={ref}
          type="button"
          onClick={handleClick}
          className="absolute left-0 top-0 h-14 w-14 overflow-visible border-0 bg-transparent p-0 outline-none"
          aria-label="Search"
        >
          {/* ==================================================
              SQUASH CONTAINER
              ================================================== */}

          <span
            ref={squashRef}
            className="pointer-events-none absolute inset-0"
            style={{
              transformOrigin:
                "50% 100%",
            }}
          >
            {/* ================================================
                GOO WRAPPER
                ================================================ */}

            <span
              className="pointer-events-none absolute -left-[55px] -top-[55px] h-[170px] w-[170px]"
              style={{
                filter:
                  "url(#search-button-goo)",
              }}
            >
              {/* ==============================================
                  MAIN BLOB
                  ============================================== */}

              <span
                ref={blobMainRef}
                className="absolute left-[55px] top-[55px] h-[60px] w-[60px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at var(--hx, 34%) var(--hy, 28%), #ffffff 0%, #e6f6ff 12%, #a8e2ff 26%, #4fb2e8 58%, #0a4a7a 100%)",
                  "--hx": "34%",
                  "--hy": "28%",
                } as React.CSSProperties}
              />

              {/* ==============================================
                  TRAIL
                  ============================================== */}

              <span
                ref={blobTrailRef}
                className="absolute left-[65px] top-[65px] h-[40px] w-[40px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 34% 28%, #ffffff 0%, #e6f6ff 12%, #7cd2fa 40%, #0a4a7a 100%)",
                }}
              />

              {/* ==============================================
                  MICRO TRAIL
                  ============================================== */}

              <span
                ref={blobMicroRef}
                className="absolute left-[70px] top-[70px] h-[22px] w-[22px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 34% 28%, #ffffff 0%, #e6f6ff 12%, #7cd2fa 40%, #0a4a7a 100%)",
                }}
              />

              {/* ==============================================
                  IMPACT RIPPLE
                  ============================================== */}

              <span
                ref={blobRippleRef}
                className="absolute left-1/2 top-1/2 h-[60px] w-[60px] rounded-full border-2 border-cyan-100/65 opacity-0"
                style={{
                  transform:
                    "translate(-50%, -50%) scale(.35)",
                }}
              />
            </span>

            {/* ==================================================
                SEARCH ICON
                ================================================== */}

            <span
              ref={iconRef}
              className="pointer-events-none absolute inset-0 z-10 grid place-items-center text-[#0b2a42]"
              style={{
                transformOrigin:
                  "50% 50%",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                />

                <line
                  x1="16.6"
                  y1="16.6"
                  x2="21"
                  y2="21"
                />
              </svg>
            </span>
          </span>
        </button>

        {/* ======================================================
            TEST SEARCH BAR

            This is only here so we can test the complete
            drop -> impact -> roll -> reveal sequence.
            ====================================================== */}

        <div
          className={`absolute right-0 top-0 h-14 w-[320px] origin-right rounded-[30px] border border-white/15 bg-[#071b2a]/90 backdrop-blur-xl transition-all duration-700 ${
            showSearchBar
              ? "translate-x-[-68px] scale-x-100 opacity-100"
              : "pointer-events-none translate-x-0 scale-x-0 opacity-0"
          }`}
        >
          <input
            type="text"
            placeholder="Search anything..."
            className="h-full w-full bg-transparent px-6 pr-16 text-sm text-white outline-none placeholder:text-slate-500"
          />
        </div>
      </div>
    </>
  );
});

export default SearchButton;
