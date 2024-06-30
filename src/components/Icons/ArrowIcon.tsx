interface IArrowIconProps {
  className?: string;
  isActive: boolean;
}

export const ArrowIcon = ({ isActive, className }: IArrowIconProps) => (
  <div className={className}>
    {!isActive ? (
      <svg
        width="32"
        height="32"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_5004_17145)">
          <rect
            x="4"
            y="4"
            width="48"
            height="48"
            rx="24"
            fill="white"
            shapeRendering="crispEdges"
          />
          <path
            d="M23.88 39.56C23.6267 39.56 23.3734 39.4667 23.1734 39.2667C22.7867 38.88 22.7867 38.24 23.1734 37.8534L31.8667 29.16C32.5067 28.52 32.5067 27.48 31.8667 26.84L23.1734 18.1467C22.7867 17.76 22.7867 17.12 23.1734 16.7334C23.56 16.3467 24.2 16.3467 24.5867 16.7334L33.28 25.4267C33.96 26.1067 34.3467 27.0267 34.3467 28C34.3467 28.9734 33.9734 29.8934 33.28 30.5734L24.5867 39.2667C24.3867 39.4534 24.1334 39.56 23.88 39.56Z"
            fill="#1B1F23"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_5004_17145"
            x="0"
            y="0"
            width="56"
            height="56"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5004_17145"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5004_17145"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ) : (
      <svg
        width="32"
        height="32"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_5004_17163)">
          <rect
            x="4"
            y="4"
            width="48"
            height="48"
            rx="24"
            fill="#E9EAED"
            shapeRendering="crispEdges"
          />
          <path
            d="M23.88 39.56C23.6267 39.56 23.3734 39.4667 23.1734 39.2667C22.7867 38.88 22.7867 38.24 23.1734 37.8534L31.8667 29.16C32.5067 28.52 32.5067 27.48 31.8667 26.84L23.1734 18.1467C22.7867 17.76 22.7867 17.12 23.1734 16.7334C23.56 16.3467 24.2 16.3467 24.5867 16.7334L33.28 25.4267C33.96 26.1067 34.3467 27.0267 34.3467 28C34.3467 28.9734 33.9734 29.8934 33.28 30.5734L24.5867 39.2667C24.3867 39.4534 24.1334 39.56 23.88 39.56Z"
            fill="#ABABAB"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_5004_17163"
            x="0"
            y="0"
            width="56"
            height="56"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5004_17163"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5004_17163"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    )}
  </div>
);
