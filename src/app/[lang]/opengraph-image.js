import { ImageResponse } from "next/og";
import { getDictionary } from "./dictionaries";
import { SITE_NAME } from "@/lib/seo";

export const alt = "QuickPickups — Private transfers in Barcelona";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 40, color: "#f97316", fontWeight: 700 }}>{SITE_NAME}</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          {dict.home.heroTitle}
        </div>
        <div style={{ fontSize: 34, color: "#d4d4d4", marginTop: 32, lineHeight: 1.3 }}>
          {dict.meta.serviceDescription}
        </div>
      </div>
    ),
    size
  );
}
