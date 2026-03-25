import { ImageResponse } from "next/og";

export const alt = "Tony Nguyen (Nhan Nguyen) — Senior Fullstack Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #020614 0%, #0a1628 40%, #0f172a 70%, #020614 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(67,224,247,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "-60px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(118,73,254,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top bar accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #43e0f7, #7649fe, #f8bc04)",
            display: "flex",
          }}
        />

        {/* Terminal prompt */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "16px",
            fontSize: "18px",
            color: "#43e0f7",
            opacity: 0.7,
          }}
        >
          <span style={{ fontFamily: "monospace" }}>{">"}</span>
          <span style={{ fontFamily: "monospace" }}>whoami</span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#e9fbff",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          Tony Nguyen
        </div>

        {/* Also known as */}
        <div
          style={{
            fontSize: "22px",
            color: "#7649fe",
            marginTop: "8px",
            fontFamily: "monospace",
            display: "flex",
          }}
        >
          aka Nhan Nguyen · @nkmnhan
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "28px",
            color: "#43e0f7",
            marginTop: "20px",
            display: "flex",
          }}
        >
          Senior Fullstack Developer
        </div>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "24px",
          }}
        >
          {[".NET Core", "React", "Angular", "TypeScript", "Cloud"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "6px 16px",
                  borderRadius: "20px",
                  border: "1px solid rgba(67,224,247,0.3)",
                  color: "#e9fbff",
                  fontSize: "16px",
                  background: "rgba(67,224,247,0.08)",
                  display: "flex",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            fontSize: "18px",
            color: "rgba(233,251,255,0.4)",
            display: "flex",
            fontFamily: "monospace",
          }}
        >
          nkmnhan.com
        </div>
      </div>
    ),
    { ...size }
  );
}
