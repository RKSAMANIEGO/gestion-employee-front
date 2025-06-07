import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CountAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0); // valor animado de 0 a 100
  const rounded = useTransform(count, Math.round); // redondeado para mostrar

  const [display, setDisplay] = useState(0); // Para mostrar el número en JSX

  // Actualiza el estado para mostrar en pantalla
  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplay(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  // Cuando entra en vista, dispara la animación
  useEffect(() => {
    if (isInView) {
      animate(count, 100, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [isInView, count]);

  return (
    <div ref={ref}>
      <motion.span style={{ fontSize: "2rem" }}>
        {display}
      </motion.span>
    </div>
  );
};

export default CountAnimation;
