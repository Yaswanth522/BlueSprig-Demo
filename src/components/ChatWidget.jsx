import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BOT_ID, HOST, YM_LOADER_SRC } from "../utils/ymWidget";

export default function ChatWidget() {
  const { pathname } = useLocation();
  const [scriptReady, setScriptReady] = useState(!!window.ChatWidget);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (window.ChatWidget) return;

    const script = document.createElement("script");
    script.src = YM_LOADER_SRC;
    script.async = true;
    script.onload = () => setScriptReady(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!scriptReady || typeof window.ChatWidget === "undefined") return;

    // Re-init on every route change so payload.pageUrl is always the current
    // page. init() is a silent no-op if called again without destroy() first.
    if (hasInitialized.current && typeof window.ChatWidget.destroy === "function") {
      window.ChatWidget.destroy();
    }

    window.ChatWidget.init({
      yellowMessenger: {
        botId: BOT_ID,
        host: HOST,
        payload: {
          pageUrl: window.location.href,
        },
      },
    });
    hasInitialized.current = true;
  }, [scriptReady, pathname]);

  return null;
}
