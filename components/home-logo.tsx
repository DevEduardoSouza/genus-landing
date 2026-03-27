"use client";

export default function HomeLogo() {
  return (
    <div className="home__logo-container">
      <svg
        className="home__logo"
        viewBox="0 0 1000 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="500"
          y="85"
          textAnchor="middle"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontSize="100"
          fontWeight="700"
          fill="#000000"
          letterSpacing="0.05em"
        >
          GENUS TECH
        </text>
        <text
          x="1000"
          y="40"
          textAnchor="end"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontSize="20"
          fontWeight="400"
          fill="#000000"
        >
          &reg;
        </text>
      </svg>
    </div>
  );
}
