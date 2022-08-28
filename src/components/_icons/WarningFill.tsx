export type WarningFillProps = React.SVGProps<SVGSVGElement>;

function WarningFill({ width = 24, height = 24, ...rest }: WarningFillProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="currentColor" />
    </svg>
  );
}

export default WarningFill;
