import { motion } from 'framer-motion';

function Card({ children, className = '', hover = false }) {
  const content = (
    <div className={`panel h-full ${className}`}>
      {children}
    </div>
  );

  if (!hover) {
    return content;
  }

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {content}
    </motion.div>
  );
}

export default Card;
