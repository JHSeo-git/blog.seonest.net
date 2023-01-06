import Link from 'next/link';

import { TextLogoIcon } from '../_icons';
import MenuButton from './MenuButton';

function LayoutBaseHeader() {
  return (
    <header className="h-[60px] flex items-center justify-center">
      <div className="flex items-center flex-1">
        <Link href="/">
          <TextLogoIcon />
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
