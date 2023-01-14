import { cn } from '@/utils/styleUtils';

import Container from '../Container';
import Footer from './Layout.BaseFooter';
import Header from './Layout.BaseHeader';
import LayoutBodyBackgroudColor from './Layout.BodyBackgroudColor';

export type HeaderMode = 'base' | 'grayscale';
interface LayoutBaseProps {
  children: React.ReactNode;
  headerMode?: HeaderMode;
}

function LayoutBase({ children, headerMode = 'base' }: LayoutBaseProps) {
  return (
    <>
      <LayoutBodyBackgroudColor headerMode={headerMode} lightColor="#f3f4f6" darkColor="#292524" />
      <Container
        className={cn(
          'sticky top-0 z-10 bg-white dark:bg-stone-900 transition duration-500',
          headerMode === 'grayscale' && 'bg-gray-100 dark:bg-stone-800 '
        )}
      >
        <Header />
      </Container>
      <Container className="pt-14">
        <main>{children}</main>
        <div className="h-14" />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default LayoutBase;
