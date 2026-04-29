import React, { useEffect, useState } from "react";

function Toast({ message, show }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
    } else if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 200); // match animation duration

      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-20 right-5 bg-black/80 backdrop-blur text-white px-4 py-2 rounded-lg shadow-lg z-50  ${show ? "animate-slide-in" : "animate-slide-out"}`}
    >
      {message}
    </div>
  );
}

export default Toast;
