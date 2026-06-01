import { useEffect } from "react";
import { seoFaqs } from "../data/seoData";
import { referralCode } from "../data/siteData";

const siteUrl = "https://raxi.game/";
const title = "Raxi Login & App Download 2026 | Referral Code";
const description =
  "Use Raxi login, Raxi register, Raxi app download and referral code 458323890871 to explore Wingo, K3, 5D and Aviator.";

export default function SeoHead() {
  useEffect(() => {
    document.title = title;

    const upsertLink = (selector, attributes) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("link");
        document.head.appendChild(tag);
      }
      Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value));
    };

    const upsertMeta = (selector, attributes) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        document.head.appendChild(tag);
      }
      Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value));
    };

    upsertLink('link[rel="canonical"]', { rel: "canonical", href: siteUrl });
    upsertLink('link[rel="alternate"][hreflang="en"]', { rel: "alternate", hreflang: "en", href: siteUrl });
    upsertLink('link[rel="alternate"][hreflang="x-default"]', { rel: "alternate", hreflang: "x-default", href: siteUrl });
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="author"]', { name: "author", content: "Raxi" });
    upsertMeta('meta[name="application-name"]', { name: "application-name", content: "Raxi" });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: "Raxi Login, App Download & Referral Code 2026" });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: "Raxi login, register, app download, referral code, withdrawal, Wingo, K3, 5D and Aviator guide for prediction gaming users."
    });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: `${siteUrl}raxi-logo.png` });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: siteUrl });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: "Raxi Login, App Download & Referral Code 2026" });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: "Raxi login, register, app download, referral code, withdrawal, Wingo, K3, 5D and Aviator guide."
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: `${siteUrl}raxi-logo.png` });

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${siteUrl}#organization`,
          name: "Raxi",
          url: siteUrl,
          logo: `${siteUrl}raxi-logo.png`
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}#website`,
          url: siteUrl,
          name: "Raxi",
          description,
          publisher: { "@id": `${siteUrl}#organization` },
          inLanguage: "en"
        },
        {
          "@type": "WebPage",
          "@id": `${siteUrl}#webpage`,
          url: siteUrl,
          name: title,
          description,
          isPartOf: { "@id": `${siteUrl}#website` },
          about: { "@id": `${siteUrl}#organization` },
          primaryImageOfPage: `${siteUrl}raxi-logo.png`,
          datePublished: "2026-06-01",
          dateModified: "2026-06-01",
          inLanguage: "en"
        },
        {
          "@type": "FAQPage",
          "@id": `${siteUrl}#faq`,
          mainEntity: seoFaqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${siteUrl}#breadcrumbs`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteUrl
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Raxi App Download",
              item: `${siteUrl}#raxi-app-download`
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Raxi FAQ",
              item: `${siteUrl}#faq`
            }
          ]
        },
        {
          "@type": "Article",
          "@id": `${siteUrl}#article`,
          headline: "Raxi Login, App Download, Referral Code and Prediction Gaming Guide",
          description,
          image: `${siteUrl}raxi-logo.png`,
          author: {
            "@type": "Organization",
            name: "Raxi"
          },
          publisher: { "@id": `${siteUrl}#organization` },
          mainEntityOfPage: { "@id": `${siteUrl}#webpage` },
          datePublished: "2026-06-01",
          dateModified: "2026-06-01",
          articleSection: [
            "Raxi Login",
            "Raxi Register",
            "Raxi App Download",
            "Raxi Referral Code",
            "Wingo",
            "K3",
            "5D",
            "Aviator",
            "Color Prediction Gaming",
            "Responsible Gaming"
          ],
          keywords: [
            "raxi",
            "raxi login",
            "raxi app download",
            "raxi register",
            "raxi referral code",
            `referral code ${referralCode}`,
            "wingo game",
            "k3 game",
            "5d game",
            "aviator game",
            "color prediction game",
            "prediction gaming"
          ],
          inLanguage: "en"
        }
      ]
    };

    let script = document.head.querySelector("#raxi-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "raxi-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, []);

  return null;
}
