import { useEffect } from "react";

export interface MetaOptions {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
}

export function useDocumentMeta(titleOrOptions: string | MetaOptions, legacyDescription?: string) {
  const options: MetaOptions =
    typeof titleOrOptions === "string"
      ? { title: titleOrOptions, description: legacyDescription }
      : titleOrOptions;

  const {
    title,
    description,
    url = typeof window !== "undefined" ? window.location.href : "https://saimedhporandla.netlify.app/",
    image = "https://saimedhporandla.netlify.app/og-cover.png",
    type = "website",
  } = options;

  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    // Helper to safely update existing meta tag or insert one if missing (avoids duplicates)
    function setMeta(selector: string, attrName: "name" | "property", attrVal: string, contentVal: string) {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", contentVal);
    }

    // Standard description
    if (description) {
      setMeta('meta[name="description"]', "name", "description", description);
      setMeta('meta[property="og:description"]', "property", "og:description", description);
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    }

    // Open Graph metadata
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    if (image) {
      setMeta('meta[property="og:image"]', "property", "og:image", image);
    }

    // Twitter Card metadata
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:url"]', "name", "twitter:url", url);
    if (image) {
      setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
    }

    // Canonical link
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, url, image, type]);
}
