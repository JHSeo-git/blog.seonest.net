type LoadingProps = React.SVGProps<SVGSVGElement>;

function Loading({ width = 24, height = 24, ...rest }: LoadingProps) {
  return (
    <span className="animate-spin-loading">
      <svg {...rest} width={width} height={height} viewBox="22 22 44 44">
        <circle
          cx="44"
          cy="44"
          r="20"
          fill="none"
          strokeWidth="3.5"
          strokeDasharray="80, 200"
          strokeDashoffset="0"
          stroke="currentColor"
          className="animate-circle-loading"
        />
      </svg>
    </span>
  );
}

export default Loading;
