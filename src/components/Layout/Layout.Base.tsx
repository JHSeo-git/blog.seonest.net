import { cn } from '@/utils/styleUtils';

import Container from '../Container';
import Footer from './Layout.BaseFooter';
import Header from './Layout.BaseHeader';

type HeaderMode = 'base' | 'grayscale';
export interface LayoutBaseProps {
  children: React.ReactNode;
  headerMode?: HeaderMode;
}

function LayoutBase({ children, headerMode = 'base' }: LayoutBaseProps) {
  return (
    <>
      <Container
        className={cn(
          //
          'sticky top-0 z-10 bg-white',
          headerMode === 'grayscale' && 'bg-gray-100'
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
