import { useEffect, useState } from "react";

export default function ElapsedTimer() {
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const start = new Date("2025-09-20T00:00:00+09:00"); // ← 作曲開始日（固定）
    const update = () => {
      const now = new Date();
      const diff = now.getTime() - start.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setElapsed({ days, hours, minutes, seconds });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="elapsed-timer">
      <div className="timer-label">作曲開始日</div>
      Day {elapsed.days}（2025/09/20 → Now）
    </div>
  );
}
