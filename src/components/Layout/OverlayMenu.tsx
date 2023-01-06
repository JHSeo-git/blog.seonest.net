import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { cn } from '@/utils/styleUtils';

import Container from '../Container';
import Portal from '../Portal';
import { containerVariants, navItemVariants, navVariants } from './overlayMenuVariants.constants';

export interface OverlayMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function OverlayMenu({ open, setOpen }: OverlayMenuProps) {
  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={containerVariants}
            className={cn(
              'fixed inset-0 w-full h-full top-[60px]',
              'bg-[rgba(255,255,255,0.85)] backdrop-filter backdrop-blur-sm'
            )}
          >
            <button
              className="p-0 absolute inset-0 z-[1] touch-none bg-transparent"
              onClick={() => setOpen(false)}
            />
            <Container className="relative w-full h-full">
              <motion.nav
                className="absolute top-[20%] left-0 z-[2] flex flex-col gap-6"
                variants={navVariants}
              >
                <h1 className="font-bold pl-8 mb-4 text-5xl leading-tight">seonest</h1>
                <Link href="/" passHref legacyBehavior>
                  <motion.a
                    className="px-14 text-4xl font-bold text-indigo-700"
                    variants={navItemVariants}
                  >
                    &#47;home
                  </motion.a>
                </Link>
                <Link href="/about" passHref legacyBehavior>
                  <motion.a
                    className="px-14 text-4xl font-bold text-indigo-700"
                    variants={navItemVariants}
                  >
                    &#47;about
                  </motion.a>
                </Link>
              </motion.nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}

export default OverlayMenu;
