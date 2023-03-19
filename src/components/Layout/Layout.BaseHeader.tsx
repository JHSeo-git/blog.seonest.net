import Link from 'next/link';

import { Icons } from '../Icons';
import MenuButton from './MenuButton';

function LayoutBaseHeader() {
  return (
    <header className="flex h-[60px] items-center justify-center">
      <div className="flex flex-1 items-center">
        <Link href="/">
          <Icons.Logo />
        </Link>
        <nav className="flex items-center"></nav>
      </div>
      <div className="flex items-center">
        <MenuButton />
      </div>
    </header>
  );
}

export default LayoutBaseHeader;
