const StyledLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-1 text-indigo-700 font-bold"
    >
      {children}
    </a>
  );
};

function LayoutBaseFooter() {
  return (
    <footer className="p-10">
      <div className="flex items-center justify-center text-xs font-medium text-gray-700">
        &copy;
        {new Date().getFullYear()}
        <StyledLink href="https://github.com/JHSeo-git">JHSeo</StyledLink>, Built with
        <StyledLink href="https://nextjs.org/">next.js</StyledLink>
      </div>
    </footer>
  );
}

export default LayoutBaseFooter;
