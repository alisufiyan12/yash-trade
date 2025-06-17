"use client"

import CountUp from 'react-countup';
import { useEffect, useState, useRef } from 'react';

interface CountUpStatsProps {
  end: number;
  suffix?: string;
  prefix?: string;
}

export function CountUpStats({ end, suffix, prefix }: CountUpStatsProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <span ref={ref}>
      {isInView ? (
        <CountUp start={0} end={end} duration={2.75} prefix={prefix} suffix={suffix} />
      ) : (
        <span>{prefix}{0}{suffix}</span>
      )}
    </span>
  );
}
