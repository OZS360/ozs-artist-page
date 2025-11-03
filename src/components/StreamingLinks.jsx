// src/components/StreamingLinks.jsx

export default function StreamingLinks({ apple, spotify, amazon, tune }) {
  const links = [
    { name: "Apple Music", url: apple, emoji: "🍎", color: "#fa2457" },
    { name: "Spotify", url: spotify, emoji: "🎧", color: "#1DB954" },
    { name: "Amazon Music", url: amazon, emoji: "🛒", color: "#3B4CCA" },
    { name: "TuneCore", url: tune, emoji: "🚀", color: "#0A84FF" },
  ];



  return (
    <div className="streaming-card-container">
      {links.map((item) => (
        <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
          <div className="streaming-card" style={{ borderColor: item.color }}>
            <span className="icon">{item.emoji}</span>
            <span>{item.name}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
