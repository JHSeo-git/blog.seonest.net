import { motion } from 'framer-motion';
import { useState } from 'react';

import { lineBottomVariants, lineTopVariants, svgVariants } from './menuButtonVariants.constants';
import OverlayMenu from './OverlayMenu';
import useHTMLOverflowEffect from './useHTMLOverflowEffect';

function MenuButton() {
  const [open, setOpen] = useState(false);

  useHTMLOverflowEffect(open);

  return (
    <>
      <button className="flex items-center justify-center" onClick={() => setOpen((prev) => !prev)}>
        <motion.svg
          width={32}
          height={32}
          animate={open ? 'open' : 'close'}
          variants={svgVariants}
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
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
        </motion.svg>
      </button>
      <OverlayMenu open={open} setOpen={setOpen} />
    </>
  );
}
export default MenuButton;
