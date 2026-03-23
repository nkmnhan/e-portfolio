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
    </div>
  );
}
