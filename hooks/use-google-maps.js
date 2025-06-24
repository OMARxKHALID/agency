import { useEffect, useState } from "react";

let isScriptLoaded = false;
let isScriptLoading = false;
let loadCallbacks = [];

export function useGoogleMaps(apiKey) {
  const [loaded, setLoaded] = useState(() => {
    return typeof window !== "undefined" && window.google && window.google.maps;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.google && window.google.maps) {
      setLoaded(true);
      isScriptLoaded = true;
      return;
    }

    if (isScriptLoaded) {
      setLoaded(true);
      return;
    }

    const scriptId = "google-maps-script";
    const existingScript = document.getElementById(scriptId);

    if (existingScript && isScriptLoading) {
      const callback = () => setLoaded(true);
      loadCallbacks.push(callback);

      return () => {
        loadCallbacks = loadCallbacks.filter((cb) => cb !== callback);
      };
    }

    if (existingScript && !isScriptLoading) {
      isScriptLoading = true;
      const callback = () => setLoaded(true);
      loadCallbacks.push(callback);

      const checkLoaded = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(checkLoaded);
          isScriptLoaded = true;
          isScriptLoading = false;

          loadCallbacks.forEach((cb) => cb());
          loadCallbacks = [];
        }
      }, 100);

      return () => {
        clearInterval(checkLoaded);
        loadCallbacks = loadCallbacks.filter((cb) => cb !== callback);
      };
    }

    if (!existingScript) {
      isScriptLoading = true;
      const callback = () => setLoaded(true);
      loadCallbacks.push(callback);

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        isScriptLoaded = true;
        isScriptLoading = false;
        loadCallbacks.forEach((cb) => cb());
        loadCallbacks = [];
      };

      script.onerror = () => {
        isScriptLoading = false;
        console.error("Failed to load Google Maps script");
        loadCallbacks = [];
      };

      document.head.appendChild(script);
      return () => {
        loadCallbacks = loadCallbacks.filter((cb) => cb !== callback);
      };
    }
  }, [apiKey]);

  return loaded;
}
