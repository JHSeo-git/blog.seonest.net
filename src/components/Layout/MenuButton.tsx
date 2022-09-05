import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

import { lineBottomVariants, lineTopVariants, svgVariants } from './menuButtonVariants.constants';
import OverlayMenu from './OverlayMenu';
import useHTMLOverflowEffect from './useHTMLOverflowEffect';

function MenuButton() {
  const [open, setOpen] = useState(false);

  useHTMLOverflowEffect(open);

  return (
    <>
      <StyledButton onClick={() => setOpen((prev) => !prev)}>
        <Svg
          width={32}
          height={32}
          animate={open ? 'open' : 'close'}
          variants={svgVariants}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            animate={open ? 'open' : 'close'}
            variants={lineTopVariants}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.line
            animate={open ? 'open' : 'close'}
            variants={lineBottomVariants}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </Svg>
      </StyledButton>
      <OverlayMenu open={open} setOpen={setOpen} />
    </>
  );
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Svg = styled(motion.svg)`
  overflow: visible;
`;

export default MenuButton;
