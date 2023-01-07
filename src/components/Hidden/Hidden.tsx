export interface HiddenProps {
  children: React.ReactNode;
}

function Hidden({ children }: HiddenProps) {
  return <div className="sr-only">{children}</div>;
}

export default Hidden;
