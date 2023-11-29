import React from "react";

function Logo({ src, width = "100px" }) {
  return (
    <div className="mt-2">
      <img src={src} alt="Logo" style={{ width: width }} />
    </div>
  );
}

export default Logo;
