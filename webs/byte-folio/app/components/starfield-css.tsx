"use client";

export function StarfieldCSS() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(67, 224, 247, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(118, 73, 254, 0.06) 0%, transparent 50%)",
        }}
      />
      <div className="stars-sm absolute inset-0" />
      <div className="stars-md absolute inset-0" />
      <style>{`
        .stars-sm {
          background-image: radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.6) 50%, transparent 50%),
            radial-gradient(1px 1px at 30% 65%, rgba(255,255,255,0.5) 50%, transparent 50%),
            radial-gradient(1px 1px at 50% 10%, rgba(255,255,255,0.4) 50%, transparent 50%),
            radial-gradient(1px 1px at 70% 80%, rgba(255,255,255,0.6) 50%, transparent 50%),
            radial-gradient(1px 1px at 90% 40%, rgba(255,255,255,0.5) 50%, transparent 50%),
            radial-gradient(1px 1px at 15% 90%, rgba(255,255,255,0.3) 50%, transparent 50%),
            radial-gradient(1px 1px at 60% 50%, rgba(255,255,255,0.4) 50%, transparent 50%),
            radial-gradient(1px 1px at 85% 15%, rgba(255,255,255,0.5) 50%, transparent 50%);
        }
        .stars-md {
          background-image: radial-gradient(2px 2px at 20% 30%, rgba(67,224,247,0.4) 50%, transparent 50%),
            radial-gradient(2px 2px at 40% 70%, rgba(118,73,254,0.3) 50%, transparent 50%),
            radial-gradient(2px 2px at 75% 20%, rgba(255,255,255,0.6) 50%, transparent 50%),
            radial-gradient(2px 2px at 55% 85%, rgba(67,224,247,0.3) 50%, transparent 50%),
            radial-gradient(2px 2px at 5% 55%, rgba(248,188,4,0.3) 50%, transparent 50%);
        }
      `}</style>
    </div>
  );
}
