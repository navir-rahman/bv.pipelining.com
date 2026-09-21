export async function setupRipple(mapRef, searchButtonRef) {
  // Stop if the elements do not exist
  if (!mapRef.current || !searchButtonRef.current) return;

  // Load jQuery
  const jquery = await import("jquery");

  // Make jQuery available globally
  window.$ = jquery.default;
  window.jQuery = jquery.default;

  // Load the ripple plugin
  await import("jquery.ripples");

  // Create the ripple target
  const rippleTarget = jquery.default(mapRef.current);

  // Initialize the ripple simulation
  rippleTarget.ripples({ resolution: 256, perturbance: 0.04 });

  // Keep the ripple canvas above the map
  rippleTarget.find("canvas").css({ position: "absolute", inset: "0", zIndex: 5, pointerEvents: "none" });

  // Create a ripple at the search button
  const triggerRipple = () => {
    if (!mapRef.current || !searchButtonRef.current) return;

    // Get the ripple area's position
    const targetRect = mapRef.current.getBoundingClientRect();

    // Get the button's position
    const buttonRect = searchButtonRef.current.getBoundingClientRect();

    // Calculate button center relative to ripple area
    const x = buttonRect.left + buttonRect.width / 2 - targetRect.left;
    const y = buttonRect.top + buttonRect.height / 2 - targetRect.top;

    // Create the ripple
    rippleTarget.ripples("drop", x, y, 30, 0.04);
  };

  // Wait before starting the ripple
  let interval;
  const timeout = setTimeout(() => {
    triggerRipple();

    // Continue creating ripples
    interval = setInterval(() => {
      triggerRipple();
    }, 1000);
  }, 2250);

  // Cleanup everything when component disappears
  return () => {
    clearTimeout(timeout);
    if (interval) clearInterval(interval);
    rippleTarget.ripples("destroy");
  };
}