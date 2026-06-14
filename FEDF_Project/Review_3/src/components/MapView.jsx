import { useEffect, useState } from "react";

export default function MapView({ from, to }) {
  const [progress, setProgress] = useState(0);

  // ✈️ Fake movement animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>📍 Live Flight Tracking</h2>

      {/* 🌍 GOOGLE MAP EMBED */}
      <iframe
        title="map"
        width="100%"
        height="400"
        style={{ borderRadius: "15px", border: "none" }}
        loading="lazy"
        src={`https://www.google.com/maps?q=${from}+to+${to}&hl=en&output=embed`}
      ></iframe>

      {/* ✈️ PLANE TRACK BAR */}
      <div
        style={{
          marginTop: "20px",
          width: "90%",
          height: "10px",
          background: "#ddd",
          borderRadius: "10px",
          marginInline: "auto",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "linear-gradient(90deg,#4f46e5,#22c55e)",
            borderRadius: "10px",
            transition: "width 0.2s",
          }}
        ></div>

        {/* ✈️ Plane icon */}
        <span
          style={{
            position: "absolute",
            left: `${progress}%`,
            top: "-12px",
            transform: "translateX(-50%)",
            fontSize: "20px",
          }}
        >
          ✈️
        </span>
      </div>

      <p style={{ marginTop: "10px" }}>
        {from} ➝ {to}
      </p>
    </div>
  );
}