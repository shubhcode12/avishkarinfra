import React, { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

type AnimatedTextProps = {
  children: ReactNode;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const AnimatedLetter = ({ children, animation }: { children: ReactNode; animation: AnimatedTextProps['animation'] }) => (
  <motion.span
    variants={animation}
    style={{ display: 'inline-block', whiteSpace: 'pre' }}
  >
    {children}
  </motion.span>
);

const AnimateChildren = ({ children, animation }: { children: ReactNode; animation: AnimatedTextProps['animation'] }) => {
  if (typeof children === 'string') {
    return children.split('').map((char, index) => (
      <AnimatedLetter key={index} animation={animation}>
        {char}
      </AnimatedLetter>
    ));
  }

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {}, 
      <AnimateChildren animation={animation}>
        {children.props.children}
      </AnimateChildren>
    );
  }

  if (Array.isArray(children)) {
    return children.map((child, index) => (
      <AnimateChildren key={index} animation={animation}>
        {child}
      </AnimateChildren>
    ));
  }

  return children;
};

export const AnimatedText = ({
  children,
  el: Wrapper = "div",
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls, repeatDelay]);

  return (
    <Wrapper className={className}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
      >
        <AnimateChildren animation={animation}>
          {children}
        </AnimateChildren>
      </motion.div>
    </Wrapper>
  );
};