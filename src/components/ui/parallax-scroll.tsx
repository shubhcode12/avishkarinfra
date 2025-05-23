import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from '../../pages/page.module.css';
export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ['start start', 'end start'],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={`h-[40rem] items-start overflow-y-auto ${styles.noScrollbar} w-full ${className}`} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start w-full mx-auto gap-10 ">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={`grid-1-${idx}`}>
              {el ? (  // Check if `el` (image URL) is available
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10"
                  height={400}
                  width={400}
                  alt="thumbnail"
                />
              ) : (
                <p>Image not available</p>
              )}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={`grid-2-${idx}`}>
              {el ? (
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10"
                  height={400}
                  width={400}
                  alt="thumbnail"
                />
              ) : (
                <p>Image not available</p>
              )}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={`grid-3-${idx}`}>
              {el ? (
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10"
                  height={400}
                  width={400}
                  alt="thumbnail"
                />
              ) : (
                <p>Image not available</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};