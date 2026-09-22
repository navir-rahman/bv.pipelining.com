import type { RefObject } from "react";

export type RippleController = {
  pause: () => void;
  cleanup: () => void;
};

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

export async function setupRipple(
  mapRef: RefObject<HTMLDivElement | null>,
  searchButtonRef: RefObject<HTMLElement | null>
): Promise<RippleController | undefined> {
  // 1. Guard against Server-Side Rendering (SSR)
  if (typeof window === "undefined") return;

  // 2. Stop if elements do not exist
  if (!mapRef.current || !searchButtonRef.current) return;

  try {
    // 3. Load jQuery dynamically and make it globally available
    const jqueryModule = await import("jquery");
    const $ = jqueryModule.default || jqueryModule;

    window.$ = $;
    window.jQuery = $;

    // 4. Load jquery.ripples safely
    // @ts-expect-error - jquery.ripples lacks official type definitions
    await import("jquery.ripples");

    const rippleTarget = $(mapRef.current);
 // @ts-expect-error - jquery.ripples lacks official type definitions
    if (typeof rippleTarget.ripples !== "function") {
      console.warn("jquery.ripples plugin failed to attach to jQuery instance.");
      return;
    }

    // Initialize ripple simulation
     // @ts-expect-error - jquery.ripples lacks official type definitions
    rippleTarget.ripples({
      resolution: 256,
      perturbance: 0.04,
    });

    // Keep ripple canvas above the map
    rippleTarget.find("canvas").css({
      position: "absolute",
      inset: "0",
      zIndex: 5,
      pointerEvents: "none",
    });

    const triggerRipple = () => {
      if (!mapRef.current || !searchButtonRef.current) return;

      const targetRect = mapRef.current.getBoundingClientRect();
      // const buttonRect = searchButtonRef.current.getBoundingClientRect();
      
      const button = searchButtonRef.current.querySelector("button"); 
      if (!button) return; 
      const buttonRect = button.getBoundingClientRect();

      const x = buttonRect.left + buttonRect.width / 2 - targetRect.left;
      const y = buttonRect.top + buttonRect.height / 2 - targetRect.top;
 // @ts-expect-error - jquery.ripples lacks official type definitions
      rippleTarget.ripples("drop", x, y, 30, 0.04);
    };

    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      triggerRipple();

      interval = setInterval(() => {
        triggerRipple();
      }, 1000);
    }, 2250);

    const pause = () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };

    const cleanup = () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);

      try {
         // @ts-expect-error - jquery.ripples lacks official type definitions
        rippleTarget.ripples("destroy");
      } catch {
        // Safe fallback if target is already unmounted
      }
    };

    return { pause, cleanup };
  } catch (error) {
    console.error("Error setting up ripple effect:", error);
    return;
  }
}