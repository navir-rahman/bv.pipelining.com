'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Users', href: '/users' },
  { name: 'New user registration', href: '/registerContractor' },
  { name: 'All Contractors', href: '/all_contractor' },
  { name: 'Blog', href: '/blog' },
  { name: 'Single Post', href: '/singleBlog' },
  
];

function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const buttons = Array.from(
      nav.querySelectorAll<HTMLElement>('.nav-btn')
    );

    if (!buttons.length) return;

    /* =====================================================
       WATER
    ===================================================== */

    const water = document.createElement('div');

    water.className = 'water';

    water.innerHTML = `
      <span class="water-light light-1"></span>
      <span class="water-light light-2"></span>
    `;

    nav.prepend(water);

    const light1 = water.querySelector<HTMLElement>('.light-1');
    const light2 = water.querySelector<HTMLElement>('.light-2');

    if (!light1 || !light2) return;


    /* =====================================================
       PHYSICS
    ===================================================== */

    let mouseX = 0;
    let mouseY = 0;

    let waterX = 0;
    let waterY = 0;

    let velocityX = 0;
    let velocityY = 0;

    let previousX = 0;
    let previousY = 0;

    let hovering = false;

    let animationFrame = 0;


    /* =====================================================
       ACTIVE BUTTON
    ===================================================== */

    let activeButton =
      buttons.find(
        button => button.dataset.active === 'true'
      ) ?? buttons[0];


    /* =====================================================
       ACTIVE BUTTON POSITION
    ===================================================== */

    const getButtonPosition = (button: HTMLElement) => {
      const navRect = nav.getBoundingClientRect();
      const rect = button.getBoundingClientRect();

      return {
        x:
          rect.left -
          navRect.left +
          rect.width / 2,

        y:
          rect.top -
          navRect.top +
          rect.height / 2,
      };
    };


    /* =====================================================
       INITIAL POSITION
    ===================================================== */

    const initial = getButtonPosition(activeButton);

    waterX = initial.x;
    waterY = initial.y;

    mouseX = waterX;
    mouseY = waterY;

    previousX = mouseX;
    previousY = mouseY;

    water.style.transform =
      `translate3d(
        ${waterX}px,
        ${waterY}px,
        0
      )
      translate(-50%, -50%)`;


    /* =====================================================
       ANIMATION
    ===================================================== */

    const animate = () => {

      let targetX: number;
      let targetY: number;


      /* Follow mouse */

      if (hovering) {

        targetX = mouseX;
        targetY = mouseY;

      }

      /* Return to active button */

      else {

        const position =
          getButtonPosition(activeButton);

        targetX = position.x;
        targetY = position.y;

      }


      /* ===================================================
         SPRING PHYSICS
      =================================================== */

      const dx = targetX - waterX;
      const dy = targetY - waterY;

      velocityX += dx * 0.09;
      velocityY += dy * 0.09;

      velocityX *= 0.72;
      velocityY *= 0.72;

      waterX += velocityX;
      waterY += velocityY;


      /* ===================================================
         MOUSE VELOCITY
      =================================================== */

      const movementX = mouseX - previousX;
      const movementY = mouseY - previousY;

      previousX = mouseX;
      previousY = mouseY;

      const speed = Math.min(
        Math.sqrt(
          movementX * movementX +
          movementY * movementY
        ),
        30
      );


      /* Direction */

      const angle =
        Math.atan2(
          movementY,
          movementX
        );


      /* Stretch */

      const stretch =
        1 + speed * 0.018;

      const squash =
        1 - speed * 0.009;


      /* ===================================================
         WATER MOVEMENT
      =================================================== */

      water.style.transform =
        `translate3d(
          ${waterX}px,
          ${waterY}px,
          0
        )
        translate(-50%, -50%)
        rotate(${angle}rad)
        scale(${stretch}, ${squash})`;


      /* ===================================================
         LIQUID SHAPE
      =================================================== */

      const wobble =
        Math.min(speed * 1.5, 25);

      water.style.borderRadius =
        `${50 - wobble}% ${50 + wobble}%
         ${50 + wobble}% ${50 - wobble}% /
         ${50 + wobble}% ${50 - wobble}%
         ${50 - wobble}% ${50 + wobble}%`;


      /* ===================================================
         HIGHLIGHTS
      =================================================== */

      const navRect =
        nav.getBoundingClientRect();

      const localMouseX =
        mouseX / navRect.width;

      const localMouseY =
        mouseY / navRect.height;

      light1.style.transform =
        `translate(
          ${localMouseX * 12}px,
          ${localMouseY * 8}px
        )`;

      light2.style.transform =
        `translate(
          ${localMouseX * 18}px,
          ${localMouseY * 12}px
        )`;


      /* ===================================================
         STOP WHEN SETTLED
      =================================================== */

      const settled =
        Math.abs(dx) < 0.15 &&
        Math.abs(dy) < 0.15 &&
        Math.abs(velocityX) < 0.15 &&
        Math.abs(velocityY) < 0.15;

      if (!hovering && settled) {

        waterX = targetX;
        waterY = targetY;

        water.style.transform =
          `translate3d(
            ${waterX}px,
            ${waterY}px,
            0
          )
          translate(-50%, -50%)`;

        animationFrame = 0;

        return;
      }


      animationFrame =
        requestAnimationFrame(animate);
    };


    /* =====================================================
       START ANIMATION
    ===================================================== */

    const startAnimation = () => {

      if (animationFrame) return;

      animationFrame =
        requestAnimationFrame(animate);
    };


    /* =====================================================
       MOUSE ENTER
    ===================================================== */

    const handleMouseEnter = () => {

      hovering = true;

      startAnimation();
    };


    /* =====================================================
       MOUSE MOVE
    ===================================================== */

    const handleMouseMove = (event: MouseEvent) => {

      const rect =
        nav.getBoundingClientRect();

      mouseX =
        event.clientX -
        rect.left;

      mouseY =
        event.clientY -
        rect.top;

      hovering = true;

      startAnimation();
    };


    /* =====================================================
       MOUSE LEAVE
    ===================================================== */

    const handleMouseLeave = () => {

      hovering = false;

      startAnimation();
    };


    /* =====================================================
       BUTTON CLICK
    ===================================================== */

    const buttonHandlers = new Map<
      HTMLElement,
      () => void
    >();

    buttons.forEach(button => {

      const handleClick = () => {

        activeButton = button;

        buttons.forEach(btn => {
          btn.classList.remove('active');
          btn.dataset.active = 'false';
        });

        button.classList.add('active');
        button.dataset.active = 'true';

        /*
          If the mouse isn't inside,
          immediately start returning
          to the new active button.
        */

        if (!hovering) {
          startAnimation();
        }
      };

      buttonHandlers.set(button, handleClick);

      button.addEventListener(
        'click',
        handleClick
      );
    });


    /* =====================================================
       EVENTS
    ===================================================== */

    nav.addEventListener(
      'mouseenter',
      handleMouseEnter
    );

    nav.addEventListener(
      'mousemove',
      handleMouseMove
    );

    nav.addEventListener(
      'mouseleave',
      handleMouseLeave
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    const handleResize = () => {

      if (!hovering) {
        startAnimation();
      }
    };

    window.addEventListener(
      'resize',
      handleResize
    );


    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      nav.removeEventListener(
        'mouseenter',
        handleMouseEnter
      );

      nav.removeEventListener(
        'mousemove',
        handleMouseMove
      );

      nav.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );

      window.removeEventListener(
        'resize',
        handleResize
      );

      buttonHandlers.forEach(
        (handler, button) => {
          button.removeEventListener(
            'click',
            handler
          );
        }
      );

      water.remove();
    };

  }, [pathname]);


  return (
 <header className="w-fit  fixed bottom-10 left-1/2 z-50 rounded-[50px] -translate-x-1/2 border border-[#4DD0E1]/60 shadow-[0_0_25px_rgba(77,208,225,0.5)]">
      <nav
        ref={navRef}
        className="nav"
      >

        {navLinks.map((link) => {

          const isActive =
            pathname === link.href;

          return (
            <NavLink
              key={link.name}
              href={link.href}
              name={link.name}
              isActive={isActive}
            />
          );

        })}

      </nav>

    </header>
  );
}

export default Navbar;