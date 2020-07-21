import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Link from 'next/link'


const sidebar = {
  open: (height = 6000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(20px at -40px -40px)",//changes to cricle
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
   
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
        <div className="top divide-y">
        <div className="top divide-y pb-3">
     <Link href="/">
         <a className="derrik font-bold text-2xl text-dark tracking-tight md:tracking-tighter leading-tight hover:underline text-xl p-3">derrikdesign</a>
     </Link>
      </div>
      <motion.div className="background" variants={sidebar} />

  
      <div>
      <MenuToggle toggle={() => toggleOpen()} />
      </div>
      </div>
      <Navigation />
    </motion.nav>
    
  );
};
