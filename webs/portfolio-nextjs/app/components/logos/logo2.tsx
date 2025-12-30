export default function Logo2() {
  return (
    <svg className="w-100 h-100" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <g transform="translate(8.5, 13)">
        <path
          className="paused"
          d="M13.3 15.2 L2.34 1 V12.6"
          fill="none"
          stroke="url(#next_logo_paint0_linear_1357_10853)"
          stroke-width="1.86"
          mask="url(#next_logo_mask0)"
          stroke-dasharray="29.6"
          stroke-dashoffset="29.6"
        ></path>
        <path
          className="paused"
          d="M11.825 1.5 V13.1"
          stroke-width="1.86"
          stroke="url(#next_logo_paint1_linear_1357_10853)"
          stroke-dasharray="11.6"
          stroke-dashoffset="11.6"
        ></path>
      </g>
      <defs>
        <style>{`.paused { stroke-dashoffset: 0; }`}</style>
        <linearGradient
          id="next_logo_paint0_linear_1357_10853"
          x1="9.95555"
          y1="11.1226"
          x2="15.4778"
          y2="17.9671"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white"></stop>
          <stop offset="0.604072" stop-color="white" stop-opacity="0"></stop>
          <stop offset="1" stop-color="white" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="next_logo_paint1_linear_1357_10853"
          x1="11.8222"
          y1="1.40039"
          x2="11.791"
          y2="9.62542"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white"></stop>
          <stop offset="1" stop-color="white" stop-opacity="0"></stop>
        </linearGradient>
        <mask id="next_logo_mask0">
          <rect width="100%" height="100%" fill="white"></rect>
          <rect width="5" height="1.5" fill="black"></rect>
        </mask>
      </defs>
    </svg>
  );
}
