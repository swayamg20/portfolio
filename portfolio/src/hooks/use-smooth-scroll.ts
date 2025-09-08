"use client";

import { useCallback } from 'react';

interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
}

// Easing functions for custom scroll animations
const easingFunctions = {
  easeInOutCubic: (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeOutQuart: (t: number) => 1 - (1 - t) ** 4,
  easeInOutQuart: (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (1 - t) ** 4,
};

export const useSmoothScroll = () => {
  // Scroll to element by ID
  const scrollToElement = useCallback((
    elementId: string, 
    options: SmoothScrollOptions = {}
  ) => {
    const { offset = 80, duration = 800, easing = easingFunctions.easeInOutCubic } = options;
    
    const element = document.getElementById(elementId);
    if (!element) return;

    const targetPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easedProgress = easing(progress);
      window.scrollTo(0, startPosition + distance * easedProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }, []);

  // Scroll to top of page
  const scrollToTop = useCallback((options: SmoothScrollOptions = {}) => {
    const { duration = 600, easing = easingFunctions.easeOutQuart } = options;
    
    const startPosition = window.pageYOffset;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easedProgress = easing(progress);
      window.scrollTo(0, startPosition * (1 - easedProgress));
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }, []);

  // Scroll by a specific amount
  const scrollBy = useCallback((
    distance: number, 
    options: SmoothScrollOptions = {}
  ) => {
    const { duration = 400, easing = easingFunctions.easeInOutCubic } = options;
    
    const startPosition = window.pageYOffset;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easedProgress = easing(progress);
      window.scrollTo(0, startPosition + distance * easedProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }, []);

  // Check if element is in viewport
  const isElementInView = useCallback((elementId: string, threshold = 0.1) => {
    const element = document.getElementById(elementId);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    return (
      rect.top <= windowHeight * (1 - threshold) &&
      rect.bottom >= windowHeight * threshold
    );
  }, []);

  return {
    scrollToElement,
    scrollToTop,
    scrollBy,
    isElementInView,
    easingFunctions
  };
};

export default useSmoothScroll;
