import "./Music.css";
import { Link } from "react-router-dom";

export default function Music() {
  // ★ 曲一覧（あとから増やせる）
  const tracks = [
    {
      title: "地下の雷鳴",
      image: "/covers/tikanoraimei.png",
      url: "https://linkco.re/DDxuBQzd",
    },
    {
      title: "地下の雷鳴 – Dope Edition –",
      image: "/covers/tikanoraimeiDope.png",
      url: "https://linkco.re/Spa9n5XP",
    },
    {
      title: "Rvolt",
      image: "/covers/revolt.png",
      url: "https://linkco.re/Xc1sBeN7",
    },
    {
      title: "敵か 味方か (Rock Version)",
      image: "/covers/tekikamikataka.png",
      url: "https://linkco.re/a0RZrpu9",
    },
    {
      title: "俺はまだ",
      image: "/covers/madaoreha.png",
      url: "https://linkco.re/zRRfMF29",
    },
    {
      title: "まだみぬ先へ",
      image: "/covers/madaminusakihe.png",
      url: "https://linkco.re/QEntqbrh"
    },
        {
      title: "Alive in the Dark -見えなくてもいい-",
      image: "/covers/AliveInTheDark.png",
      url: "https://linkco.re/3cTDC2ay",
    },
    {
      title: "灰の王冠",
      image: "/covers/hainooukan.png",
      url: "https://linkco.re/v3qUGG9S",
    },

    
    // ★ ここに追加していくだけで増える
  ];

  return (
    <div className="music-page">
      <h2>Music</h2>

<div className="music-grid">
  {tracks.map((t, i) => (
    <a key={i} href={t.url} target="_blank" className="music-card">
      <div className="frame">
        <img src={t.image} alt={t.title} />
      </div>
      <p className="title">{t.title}</p>
    </a>
  ))}
</div>


       {/* ✅ SoundCloudセクション追加（ここ） */}
      <section className="sc-section">
        <h3>Old Mixes (SoundCloud)</h3>

        <div className="sc-embeds">

          <iframe
            width="73%"
            height="200"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/ozs-1/9hxrxviv3ju5&color=%23000000&auto_play=false&show_user=true"
          ></iframe>

          <iframe
            width="73%"
            height="200"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/ozs-1/before-dawn&color=%23000000&auto_play=false&show_user=true"
          ></iframe>

          <iframe
            width="73%"
            height="200"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/ozs-1/orbit-borer-underground-hip&color=%23000000&auto_play=false&show_user=true"
          ></iframe>

        </div>
      </section>


      <div style={{ marginTop: "40px" }}>
        <Link to="/" className="btn">← Back</Link>
      </div>
    </div>
  );
}
