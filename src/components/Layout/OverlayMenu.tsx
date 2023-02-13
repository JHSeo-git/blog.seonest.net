import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { cn } from '@/utils/styleUtils';

import Container from '../Container';
import Portal from '../Portal';
import ToggleTheme from '../ToggleTheme';
import { navItemVariants, navVariants, opacityVariants } from './overlayMenuVariants.constants';

interface OverlayMenuProps {
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
            variants={opacityVariants}
            className={cn(
              'fixed inset-0 z-[10] w-full h-full top-[60px]',
              'bg-white/80 dark:bg-stone-900/80 backdrop-filter backdrop-blur-md'
            )}
          >
            <button
              className="absolute inset-0 z-[1] touch-none bg-transparent p-0"
              onClick={() => setOpen(false)}
            />
            <Container className="relative h-full w-full">
              <motion.nav
                className="absolute top-[15%] left-0 z-[2] flex flex-col gap-8"
                variants={navVariants}
              >
                <h1 className="mb-4 pl-8 text-5xl font-bold leading-tight">seonest</h1>
                <Link href="/" passHref legacyBehavior>
                  <motion.a
                    className="px-14 text-4xl font-bold text-indigo-700 dark:text-indigo-400"
                    variants={navItemVariants}
                  >
                    &#47;home
                  </motion.a>
                </Link>
                <Link href="/about" passHref legacyBehavior>
                  <motion.a
                    className="px-14 text-4xl font-bold text-indigo-700 dark:text-indigo-400"
                    variants={navItemVariants}
                  >
                    &#47;about
                  </motion.a>
                </Link>
              </motion.nav>
              <motion.div className="absolute bottom-[15%] left-0 z-[2]">
                <div className="flex items-center pl-8">
                  <ToggleTheme />
                </div>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}

export default OverlayMenu;
