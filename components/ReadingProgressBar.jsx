'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const article = document.querySelector('article.article-content');
      if (!article) {
        setProgress(0);
        return;
      }

      const rect = article.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const articleTop = rect.top + scrollTop;
      const articleHeight = rect.height;
      const windowHeight = window.innerHeight;

      const scrollDistance = scrollTop - articleTop;
      const totalDistance = articleHeight - windowHeight;

      if (scrollDistance <= 0) {
        setProgress(0);
      } else if (scrollDistance >= totalDistance) {
        setProgress(100);
      } else {
        const percentage = Math.min(100, Math.max(0, (scrollDistance / totalDistance) * 100));
        setProgress(Math.round(percentage));
      }
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div
      className="reading-progress-bar"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ width: `${progress}%` }}
    />
  );
}

