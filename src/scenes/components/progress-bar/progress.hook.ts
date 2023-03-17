import { useEffect, useState } from 'react';

export const useProgress = (clearValue: any, initialProgress: number = 0,
  intervalMs: number = 250, step: number = 0.1) => {
  const [progress, setProgress] = useState(initialProgress);
  useEffect(() => {
    const interval = setInterval(() => setProgress(progress + step > 1 ? 1 : progress + step), intervalMs);
    return () => clearInterval(interval);
  }, [progress, setProgress]);
  useEffect(() => {
    setProgress(initialProgress);
  }, [clearValue]);
  return progress;
};
