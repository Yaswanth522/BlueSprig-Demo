import { useRef, useState } from "react";

/**
 * Drives the theme's scroll-snap sliders (a horizontally scrolling <ul>).
 * Arrows scroll the strip; swiping it directly keeps the counter in sync.
 * With `loop`, stepping past either end wraps around.
 */
export default function useSnapSlider(count, { loop = false } = {}) {
  const listRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const goTo = (index) => {
    const next = loop ? (index + count) % count : Math.min(Math.max(index, 0), count - 1);
    const list = listRef.current;
    list.scrollTo({ left: list.children[next].offsetLeft - list.offsetLeft, behavior: "smooth" });
    setCurrent(next);
  };

  const handleScroll = () => {
    const list = listRef.current;
    const step = list.children[1].offsetLeft - list.children[0].offsetLeft;
    // Near the end the strip can't scroll a full step further, so treat
    // "scrolled to the end" as the last slide.
    const atEnd = list.scrollLeft + list.clientWidth >= list.scrollWidth - 1;
    setCurrent(atEnd ? count - 1 : Math.round(list.scrollLeft / step));
  };

  return {
    listRef,
    current,
    handleScroll,
    prev: () => goTo(current - 1),
    next: () => goTo(current + 1),
    atStart: !loop && current === 0,
    atEnd: !loop && current === count - 1,
  };
}
