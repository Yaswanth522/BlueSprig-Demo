import { useEffect } from "react";

/**
 * Sets the document title and the body classes the theme scopes page styles
 * by (e.g. `p-home`). Only this page's classes are touched, so state classes
 * like the header's `noscroll` survive.
 */
export default function usePageMeta(title, bodyClasses) {
  useEffect(() => {
    document.title = title;
    const classes = bodyClasses.split(" ");
    document.body.classList.add(...classes);
    return () => document.body.classList.remove(...classes);
  }, [title, bodyClasses]);
}
