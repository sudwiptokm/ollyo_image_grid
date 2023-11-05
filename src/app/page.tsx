"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Heading from "../components/Heading";
import Tick from "../components/Tick";

export default function Home() {
  const [items, setItem] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [dragItem, setDragItem] = useState<number>();
  const [dragOverItem, setDragOverItem] = useState<number>();
  const [currentHover, setCurrentHover] = useState<number>();
  const [selected, setSelected] = useState<number[]>([]);

  const changeArray = () => {
    let copy_arr = [...items];
    let temp = copy_arr[dragItem!];
    copy_arr[dragItem!] = copy_arr[dragOverItem!];
    copy_arr[dragOverItem!] = temp;
    setItem(copy_arr);
    setDragOverItem(undefined);
    setDragItem(undefined);
  };

  const deleteSelected = () => {
    console.log(selected, items);
    let copy_arr = [...items];
    copy_arr = copy_arr.filter((item, idx) => !selected.includes(item));
    setSelected([]);
    setItem(copy_arr);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 ">
      {/* Heading Texts */}
      <Heading length={selected.length} deleteSelected={deleteSelected} />

      {/* =================== */}
      {/* Grid */}
      {/* =================== */}
      <div
        className={`max-w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:mx-4 mx-2 lg:mx-6 overflow-hidden`}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => {
              setCurrentHover(idx);
            }}
            onMouseLeave={() => {
              setCurrentHover(undefined);
            }}
            className={`relative flex justify-center w-full border-2 rounded-sm ${
              idx === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
            }`}
            onClick={() => {
              if (!selected.includes(item)) {
                setSelected((prev) => [...prev, item]);
              } else {
                setSelected((prev) => prev.filter((item) => item !== item));
              }
            }}
            draggable
            onDragStart={() => {
              setDragItem(idx);
            }}
            onDragEnter={() => {
              setDragOverItem(idx);
            }}
            onDragEnd={(e) => {
              e.preventDefault();
              changeArray();
            }}
          >
            <motion.div
              className={`w-full h-full rounded-sm flex items-center justify-center 
              ${
                (currentHover === idx || selected.includes(item)) &&
                "opacity-50"
              }
              `}
              layout
            >
              <img
                src={`/images/image-${item + 1}.webp`}
                alt={`image-${item + 1}`}
                className="rounded-sm w-full"
              />
            </motion.div>
            {(currentHover === idx || selected.includes(item)) && (
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-400/50 rounded-sm"></div>
            )}
            {(currentHover === idx || selected.includes(item)) && (
              <div className="absolute top-1 bottom-0 left-0 right-1 flex justify-end items-start">
                <div className="w-8 h-8">
                  <Tick isSelected={selected.includes(item) ? true : false} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* ------------------ */}
      {/* Grid Ends */}
      {/* ------------------ */}
    </div>
  );
}
