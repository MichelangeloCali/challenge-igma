export const Logo = ({ ...props }) => {
  return (
    <svg
      width="80"
      height="28"
      viewBox="0 0 80 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo"
      aria-describedby="Logo servindo como design para cabeçalho"
      {...props}
    >
      <g clipPath="url(#clip0_644_85)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M80 0H0V28H74.75V8.75H80V0Z"
          fill="#211E1E"
        />
      </g>
      <defs>
        <clipPath id="clip0_644_85">
          <rect width="80" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
