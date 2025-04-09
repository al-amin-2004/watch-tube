"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { Left, Right } from "../icons/icons";

export const Carousel = ({ children, gap, indicator, autoscroll }) => {
  const parentRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(0);
  const [childWidth, setChildWidth] = useState(0);
  const [totalScroll, setTotalScroll] = useState(0);

  const gapAtpx = gap * 16;

  useEffect(() => {
    if (parentRef.current && parentRef.current.children.length > 0) {
      const childCount = parentRef.current.children.length;
      const width = Math.round(
        parentRef.current.children[0].getBoundingClientRect().width
      );
      setChildWidth(width);
      setTotalWidth(childCount * width + (childCount - 1) * gapAtpx);
    }
  }, []);


  const scroll = useCallback((direction) => {
    setTotalScroll((prevs) => {
      if (direction === "next") {
        if (prevs >= totalWidth - childWidth * 6) {
          return 0;
        }
        return prevs + childWidth + gapAtpx;
      } else {
        if (prevs <= 0) {
          return totalWidth - (childWidth + gapAtpx) * 5;
        }
        return prevs - (childWidth + gapAtpx);
      }
    });
  }, [totalWidth, childWidth, gapAtpx]);
  

  // Auto Scroll
  useEffect(() => {
    if(!autoscroll) return;

    const interval = setInterval(() => {
      scroll("next");
    }, autoscroll * 1000);

    return () =>  clearInterval(interval)
  },[scroll])

   


  return (
    <div className="overflow-hidden">
      <div
        ref={parentRef}
        className="flex py-5 transition-all duration-500 ease-in-out"
        style={{
          width: `${totalWidth}px`,
          gap: `${gapAtpx}px`,
          marginLeft: `-${totalScroll}px`,
        }}
      >
        {children}
      </div>

      {indicator && (
        <div className="flex gap-x-3 justify-end px-5">
          <Left onClick={() => scroll("prev")} className="stroke-white size-9 bg-surface p-1.5 rounded cursor-pointer hover:stroke-primary duration-200" />
          <Right onClick={() => scroll("next")} className="stroke-white size-9 bg-surface p-1.5 rounded cursor-pointer hover:stroke-primary duration-200" />
        </div>
      )}
    </div>
  );
};

