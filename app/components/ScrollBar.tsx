"use client"

import { motion } from 'framer-motion';
import JSON from '../content.json';
import { useRouter } from 'next/navigation';
import { CardData } from '../types/content';

const scrollCards: CardData[] = JSON.contentBoxes;

const ScrollBar: React.FC = () => {
  const duplicatedCards = [...scrollCards, ...scrollCards, ...scrollCards];
  const router = useRouter();

  return (
    <div className="pt-4 w-full overflow-hidden">
      <div className="relative w-full h-32 overflow-hidden">
        <motion.div
          className="absolute flex space-x-4"
          initial={{
            x: 0,
            opacity: 0
          }}
          animate={{
            x: [0, '-100%'],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 75, // Total cycle duration
            times: [0, 0.01, 1, 1], // Control opacity phases
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {duplicatedCards.map((card, index) => (
            <div
              key={index}
              onClick={() => router.push(`/content/${index % scrollCards.length}`)}
              className="w-48 hover:border border-blue-600 cursor-pointer shadow-xl h-24 bg-white shadow-md rounded-lg p-4 flex-shrink-0"
            >
              <h3 className="font-bold text-gray-600 text-lg">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollBar;

