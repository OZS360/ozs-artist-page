// ✅ Home.jsx
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ElapsedTimer from "../components/ElapsedTimer";
import StreamingLinks from "../components/StreamingLinks";
import "./Home.css";   // ← ★ これ必須

export default function Home() {

  const artist = {
    name: "OZS",
    tagline: "Dark Hip-Hop",
    email: "ozs758@zohomail.jp"
  }

  return (
    <div className="site home-page">  {/* ← class を追加 */}
    <div className="site">

      <header className="hero" id="home">
        <div className="hero-inner">

          <ElapsedTimer />

          <img
            src={logo}
            alt="OZS Logo"
            style={{
              width: "160px",
              display: "block",
               margin: "10px auto 4px auto", 
              borderRadius: "12px",
            }}
          />

          <h1 className="logo">{artist.name}</h1>
          <p className="tagline">{artist.tagline}</p>

          <nav className="cta-row">
            <Link to="/music" className="btn">Music</Link>
            <Link to="/about" className="btn btn-ghost">About</Link>
            <a href="#contact" className="btn btn-ghost">Contact</a>
          </nav>
        </div>
      </header>

      <section id="music" className="section">
        <h2>Latest Releases</h2>
        <div className="cards">
          <article className="card">
            <h3>地下の雷鳴 - Dope Edition</h3>

            <div className="embed">
              <iframe
                src="https://youtube.com/shorts/bXAwZK83BqE?feature=share"
                title="YouTube player"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <StreamingLinks
              apple="https://music.apple.com/jp/album/underground-thunder-dope-edition-single/1846770251"
              spotify="https://open.spotify.com/intl-ja/album/4r9IMMuYKogeGRkwF2HSMc"
              amazon="https://www.amazon.co.jp/music/player/albums/B0FWQZC7GB"
              tune="https://linkco.re/Spa9n5XP"
            />
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
    </div>
  );
}
