import { useState } from "react";
import logo from "./assets/logo.png";

export default function App() {
  const artist = {
    name: "OZS",
    tagline: "Dark Hip-Hop",
    links: {
      x: "https://x.com/your_handle",
      youtube: "https://www.youtube.com/@your_channel",
      soundcloud: "https://soundcloud.com/your_profile",
      spotify: "https://open.spotify.com/artist/your_id"
    },
    email: "ozs758@zohomail.jpS"
  };

return (
  <div className="site">
    <header className="hero" id="home">
      <div className="hero-inner">

        {/* ロゴ画像 */}
        <img
          src={logo}
          alt="OZS Logo"
          style={{
            width: "160px",
            display: "block",
            margin: "40px auto 10px",
            borderRadius: "12px",
          }}
        />

        <h1 className="logo">{artist.name}</h1>
        <p className="tagline">{artist.tagline}</p>

        <nav className="cta-row">
          <a href="#music" className="btn">Music</a>
          <a href="#about" className="btn btn-ghost">About</a>
          <a href="#contact" className="btn btn-ghost">Contact</a>
        </nav>
      </div>
    </header>
      <section id="music" className="section">
        <h2>Latest Releases</h2>
        <p className="muted">Embed your tracks (YouTube / SoundCloud / Spotify / Suno export links)</p>
        <div className="cards">
          <article className="card">
            <h3>地下の雷鳴 - Dope Edition</h3>
            <div className="embed">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube player"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </article>
         <article className="card">
            <h3>魂の雷鳴</h3>
            {/* 例：SoundCloud埋め込み（URL差し替え） */}
            <div className="embed">
              <iframe
                width="100%" height="200" scrolling="no" frameBorder="no" allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID&color=%23000000&auto_play=false"
                title="SoundCloud player"
              ></iframe>
            </div>
          </article>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <p>
          OZSは、ダークで内省的なヒップホップを軸に、GarageBandとSunoを活用した曲作成。DAWもはじめたただの会社員です。
        </p>
        <p>
          OZS creates dark and introspective hip-hop, crafting tracks using GarageBand and Suno.  
          A simple office worker who recently began exploring the world of DAWs.
        </p>
        <p>
          DXを軸に大事な従業員さんと一緒にお仕事をする毎日、多くの仲間がわたしの前から去っていった。そして、虚無に包まれた今、
          「なんてつまらない仕事なんだろう」あてるところもなく、言葉を交わすことさえできない。虚しいだけの毎日。
          気がつけばGarageband(ipad)を手にし、諦めたはずのDAW(Cubase10.5)をまた引っ張り出し作曲をはじめるのだった。
          「ただ一緒にあなた達と1日でも長く、同じ会社で働きたかった。」くたばる前にわたしの生きた証を残したい。
        </p>

        <p>
          Every day, I worked alongside precious colleagues under the banner of digital transformation.  
          Yet one by one, many of them disappeared from my side.  
          Now, surrounded by emptiness, I find myself thinking, “What a meaningless job this is.”  
          There’s no one left to talk to, no place to turn—just hollow days passing by.  
          Before I knew it, I was holding my iPad, opening GarageBand again,  
          and pulling out the old DAW I once gave up on—Cubase 10.5—to start making music once more.  
          “I just wanted to work with all of you, even one more day, in the same company.”  
          Before I collapse, I want to leave proof that I lived.
        </p>

        <ul className="social">
          <li><a href={artist.links.x} target="_blank">X</a></li>
          <li><a href={artist.links.youtube} target="_blank">YouTube</a></li>
          <li><a href={artist.links.soundcloud} target="_blank">SoundCloud</a></li>
          <li><a href={artist.links.spotify} target="_blank">Spotify</a></li>
        </ul>
      </section>

<section id="music" className="section">
  <h2>Latest Releases</h2>
  <p className="muted">Embed your tracks (YouTube / SoundCloud / Spotify / Suno export links)</p>

  <div className="cards">
    {/* 既存のYouTube埋め込み */}

<article className="card">
  <h3>My Old Mix on SoundCloud</h3>

  <div className="embed">
    <iframe
      width="100%"
      height="300"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https://soundcloud.com/ozs-1/9hxrxviv3ju5&color=%23ff5500&auto_play=false&show_user=true"
    ></iframe>
  </div>

  <div className="embed">
    <iframe
      width="100%"
      height="300"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https://soundcloud.com/ozs-1/before-dawn&color=%23ff5500&auto_play=false&show_user=true"
    ></iframe>
  </div>

  <div className="embed">
    <iframe
      width="100%"
      height="300"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https://soundcloud.com/ozs-1/orbit-borer-underground-hip&color=%23ff5500&auto_play=false&show_user=true"
    ></iframe>
  </div>

  <div className="embed">
    <iframe
      width="100%"
      height="300"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https://soundcloud.com/ozs-1/sunlit-room-underground-hip&color=%23ff5500&auto_play=false&show_user=true"
    ></iframe>
  </div>
</article>
</div>
</section>





      <section id="contact" className="section">
        <h2>Contact</h2>
        <a className="btn" href={`mailto:${artist.email}`}>Email: {artist.email}</a>
      </section>

      <footer className="footer">
        <small>© {new Date().getFullYear()} {artist.name}. All rights reserved.</small>
      </footer>
    </div>
  );
}
