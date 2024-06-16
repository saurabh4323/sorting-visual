import React, { useState } from "react";
import "./visu.css";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
};

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSorting, setIsSorting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const generateArray = () => {
    const arr = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setArray(arr);
    setCurrentIndex(0);
    setIsFinished(false);
  };

  const bubbleSortStep = () => {
    if (isFinished) return;

    const arr = [...array];
    let len = arr.length;
    let isSwapped = false;

    for (let i = 0; i < len - 1 - currentIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements using a temporary variable
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }

    // Update state to re-render
    setArray([...arr]);
    if (!isSwapped || currentIndex >= len - 2) {
      setIsFinished(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="visualizer-container">
      <h2>Sorting Visualizer</h2>
      <button onClick={generateArray} disabled={isSorting}>
        Generate Random Array
      </button>
      <button onClick={bubbleSortStep} disabled={isSorting || isFinished}>
        Step-by-Step Bubble Sort
      </button>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: getRandomColor(),
              height: `${value * 3}px`,
            }}
          >
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
