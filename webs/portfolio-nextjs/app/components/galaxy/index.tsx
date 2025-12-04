import "./galaxy.css";

export default function Galaxy({className}: {className?: string}) {
  return (
    <>
      <div className={`galaxy ${className}`} />
      <div className="star-field">
          <div className="layer" />
          <div className="layer" />
          <div className="layer" />
          <div className="layer" />
          <div className="layer" />
          <div className="layer" />
          <div className="layer" />
          <div className="layer" />
      </div>
    </>
  );
}
