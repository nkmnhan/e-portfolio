import { ImageResponse } from "next/og";
import { projectsData } from "@/lib/data/projects";

export const alt = "Project by Tony Nguyen (Nhan Nguyen)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.id }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    return new ImageResponse(
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#020614" }} />,
      { ...size },
    );
  }

  const techDisplay = project.techStack.slice(0, 5);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
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
            fontFamily: "monospace",
          }}
        >
          {">"} cat projects/{slug}/README.md
        </div>

        {/* Project title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#e9fbff",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            display: "flex",
            marginBottom: "12px",
          }}
        >
          {project.title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(233,251,255,0.7)",
            lineHeight: 1.4,
            display: "flex",
            marginBottom: "32px",
            maxWidth: "900px",
          }}
        >
          {project.subtitle}
        </div>

        {/* Tech stack */}
        <div style={{ display: "flex", gap: "12px" }}>
          {techDisplay.map((tech) => (
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
          ))}
        </div>

        {/* Author + URL */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "18px",
            color: "rgba(233,251,255,0.4)",
            fontFamily: "monospace",
          }}
        >
          <span>Tony Nguyen (Nhan Nguyen)</span>
          <span>nkmnhan.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
