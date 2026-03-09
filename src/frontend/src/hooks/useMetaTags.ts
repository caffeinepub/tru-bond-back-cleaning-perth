import { useEffect } from "react";

interface MetaTagsOptions {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export function useMetaTags({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  canonicalUrl,
}: MetaTagsOptions) {
  useEffect(() => {
    // Set title
    document.title = title;

    // Helper to set/create meta tag
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(
        `meta[${attr}="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to set/create link tag
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(
        `link[rel="${rel}"]`,
      ) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("og:title", ogTitle ?? title, "property");
    setMeta("og:description", ogDescription ?? description, "property");
    setMeta("og:type", ogType, "property");
    if (ogImage) setMeta("og:image", ogImage, "property");
    setMeta("twitter:title", ogTitle ?? title, "name");
    setMeta("twitter:description", ogDescription ?? description, "name");
    if (ogImage) setMeta("twitter:image", ogImage, "name");
    if (canonicalUrl) setLink("canonical", canonicalUrl);

    return () => {
      document.title =
        "Tru Bond Back Cleaning Perth | 100% Bond Back Guarantee";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    canonicalUrl,
  ]);
}
