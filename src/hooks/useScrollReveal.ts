import {useEffect, useRef} from 'react';

/**
 * Scroll reveal hook using IntersectionObserver.
 *
 * Attaches a `data-visible="true"` attribute to each observed element
 * when it enters the viewport. CSS in globals.css handles the transition
 * via the `[data-reveal][data-visible='true']` selector.
 *
 * @param threshold - Fraction of element visible before triggering (default 0.15).
 * @returns A ref to attach to the container whose children should be revealed.
 *
 * @example
 * ```tsx
 * const sectionRef = useScrollReveal();
 * return <section ref={sectionRef} data-reveal>...</section>;
 * ```
 */
function useScrollReveal<T extends HTMLElement = HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    /** Reveal the element and all child [data-reveal] elements within it. */
    const targets = [element, ...Array.from(element.querySelectorAll<HTMLElement>('[data-reveal]'))];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute('data-visible', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold},
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export default useScrollReveal;
