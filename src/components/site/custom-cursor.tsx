"use client";

import { useEffect, useRef } from "react";

const CLICKABLE_SELECTOR = [
  "a",
  "button",
  "[role='button']",
  "summary",
  "[data-cursor='hover']",
  ".portfolio-card",
  ".solution-card",
  ".creative-card",
  ".service-puzzle-step",
].join(",");

const NATIVE_CURSOR_SELECTOR = [
  "input",
  "textarea",
  "select",
  "option",
  "[contenteditable='true']",
  "[contenteditable='']",
].join(",");

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const current = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);
  const isHovering = useRef(false);
  const isHidden = useRef(true);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) {
      return;
    }

    const cursor = cursorRef.current;

    if (!cursor) {
      return;
    }

    document.body.classList.add("has-jiggsaw-cursor");
    cursor.classList.add("is-active");

    const setCursorState = (nextHovering: boolean, nextHidden: boolean) => {
      if (isHovering.current !== nextHovering) {
        isHovering.current = nextHovering;
        cursor.classList.toggle("is-hovering", nextHovering);
      }

      if (isHidden.current !== nextHidden) {
        isHidden.current = nextHidden;
        cursor.classList.toggle("is-hidden", nextHidden);
      }
    };

    const moveCursor = () => {
      current.current.x += (target.current.x - current.current.x) * 0.28;
      current.current.y += (target.current.y - current.current.y) * 0.28;
      cursor.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      frame.current = window.requestAnimationFrame(moveCursor);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") {
        setCursorState(false, true);
        return;
      }

      target.current = { x: event.clientX, y: event.clientY };

      if (current.current.x === 0 && current.current.y === 0) {
        current.current = target.current;
      }

      const targetElement = event.target instanceof Element ? event.target : null;
      const shouldUseNativeCursor = Boolean(targetElement?.closest(NATIVE_CURSOR_SELECTOR));
      const shouldHover = !shouldUseNativeCursor && Boolean(targetElement?.closest(CLICKABLE_SELECTOR));

      setCursorState(shouldHover, shouldUseNativeCursor);
    };

    const handlePointerLeave = () => setCursorState(false, true);
    const handlePointerEnter = () => setCursorState(false, false);
    const handlePointerDown = () => cursor.classList.add("is-down");
    const handlePointerUp = () => cursor.classList.remove("is-down");

    frame.current = window.requestAnimationFrame(moveCursor);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerenter", handlePointerEnter);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      document.body.classList.remove("has-jiggsaw-cursor");
      cursor.classList.remove("is-active", "is-hovering", "is-hidden", "is-down");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerenter", handlePointerEnter);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);

      if (frame.current !== null) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="jiggsaw-cursor"
      aria-hidden="true"
    >
      <svg className="jiggsaw-cursor-mark" viewBox="0 0 40 40" focusable="false">
        <defs>
          <linearGradient id="jiggsawCursorStroke" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f1f2f4" />
            <stop offset="28%" stopColor="#8b8e96" />
            <stop offset="56%" stopColor="#d0d1d6" />
            <stop offset="100%" stopColor="#5d6068" />
          </linearGradient>
        </defs>
        <path
          className="jiggsaw-cursor-piece"
          d="M7.5 8.5H18.4C17.7 5.8 19.7 3.8 22.2 3.8C24.8 3.8 26.7 5.9 26 8.5H32.2V16.3C35 15.6 37 17.6 37 20.2C37 22.8 34.9 24.8 32.2 24V32.2H24.1C24.8 35 22.8 37 20.2 37C17.6 37 15.6 34.9 16.3 32.2H7.5V8.5Z"
        />
      </svg>
    </div>
  );
}
