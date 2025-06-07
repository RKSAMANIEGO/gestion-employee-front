import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const pageVariants = {
 initial: {
    opacity: 0,
    rotateY: 0,
    transformOrigin: "left center",
    perspective: 1000,
  },
  animate: {
    opacity: 1,
    rotateY: 0,
    transformOrigin: "left center",
    perspective: 1000,
  },
  exit: {
    opacity: 1,
    rotateY: -90,
    transformOrigin: "left center",
    perspective: 1000,
  },
};
const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.8,
};

const Animation = ({children}) => {
      const location = useLocation();
  return (
     <div className="perspective-[1000px] w-full h-full"> {/* perspectiva 3D desde Tailwind */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="w-full h-full bg-[transparente]" // fondo para mejor efecto
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Animation