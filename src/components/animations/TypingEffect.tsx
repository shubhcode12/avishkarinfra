import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, Variant } from 'framer-motion';

type TypingEffectProps = {
  children: string | string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  loop?: boolean;
  className?: string;
  cursorChar?: string;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const TypingEffect: React.FC<TypingEffectProps> = ({
  children,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenTexts = 1500,
  loop = true,
  className = '',
  cursorChar = '|',
  animation = defaultAnimation,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const textArray = Array.isArray(children) ? children : [children];
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentText = textArray[currentIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          timeoutId = setTimeout(type, delayBetweenTexts);
          return;
        }
        timeoutId = setTimeout(type, deletingSpeed);
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          if (loop || currentIndex < textArray.length - 1) {
            setIsDeleting(true);
            timeoutId = setTimeout(type, delayBetweenTexts);
          }
          return;
        }
        timeoutId = setTimeout(type, typingSpeed);
      }
    };

    timeoutId = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [displayText, currentIndex, isDeleting, textArray, typingSpeed, deletingSpeed, delayBetweenTexts, loop]);

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <div ref={containerRef} className={className}>
      <motion.span
        initial="hidden"
        animate={controls}
        variants={animation}
      >
        {displayText}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        {cursorChar}
      </motion.span>
    </div>
  );
};

export default TypingEffect;