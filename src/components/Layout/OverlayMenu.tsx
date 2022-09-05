import { AnimatePresence, motion } from 'framer-motion';
import NextLink from 'next/link';
import styled from 'styled-components';

import { colors, spaces, typography } from '@/constants/theme';

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
          <OverlayContainer
            initial="closed"
            animate="open"
            exit="closed"
            variants={containerVariants}
            transition={{
              delay: 0.2,
            }}
          >
            <OverlayInner>
              <OverlayButton onClick={() => setOpen(false)} />
              <OverlayNav variants={navVariants}>
                <NavTitle>seonest</NavTitle>
                <NextLink href="/" passHref>
                  <StyledLink variants={navItemVariants}>&#47;home</StyledLink>
                </NextLink>
                <NextLink href="/about" passHref>
                  <StyledLink variants={navItemVariants}>&#47;about</StyledLink>
                </NextLink>
              </OverlayNav>
            </OverlayInner>
          </OverlayContainer>
        )}
      </AnimatePresence>
    </Portal>
  );
}

const OverlayContainer = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  top: 60px;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
`;

const OverlayInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const OverlayButton = styled.button`
  padding: 0;
  position: absolute;
  inset: 0;
  z-index: 1;
  touch-action: none;

  &:active {
    background-color: inherits;
  }
`;

const OverlayNav = styled(motion.nav)`
  position: absolute;
  top: 20%;
  left: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: ${spaces.$4};
`;

const NavTitle = styled.h1`
  padding-left: ${spaces.$8};
  font-size: ${typography.fontSizes['4xl']};
  line-height: ${typography.lineHeight['heading-tight']};
  margin-bottom: ${spaces.$4};
`;

const StyledLink = styled(motion.a)`
  padding-left: ${spaces.$12};
  padding-right: ${spaces.$12};
  font-size: ${typography.fontSizes['2xl']};
  font-weight: ${typography.fontWeights.bold};

  color: ${colors.primary900};
`;

export default OverlayMenu;
