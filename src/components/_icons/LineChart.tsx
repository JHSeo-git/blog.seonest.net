type LineChartProps = React.SVGProps<SVGSVGElement>;

function LineChart({ width = 24, height = 24, ...rest }: LineChartProps) {
  return (
    <svg
      {...rest}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18"></path>
      <path d="m19 9-5 5-4-4-3 3"></path>
    </svg>
  );
}

export default LineChart;
