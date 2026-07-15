import { easeIn, motion } from "framer-motion";

export default function MotionSection({ children, className = "", id }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 90, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 1.3, ease: easeIn }}
    >
      {children}
    </motion.section>
  );
}
