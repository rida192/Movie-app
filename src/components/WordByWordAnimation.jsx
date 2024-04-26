// WordByWordAnimation.js
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WordByWordAnimation = ({ text }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    // Split the text into individual words
    const wordArray = text.split(" ");
    setWords(wordArray);
  }, [text]);

  return (
    <p>
      <AnimatePresence initial={false}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            {word + " "}
          </motion.span>
        ))}
      </AnimatePresence>
    </p>
  );
};

export default WordByWordAnimation;
