import "./About.css";
import { Link } from "react-router-dom";   // ← 追加
import logo from "../assets/logo.png";

export default function About() {
  return (
    <section className="about-wrapper">
      <div className="about-card">
        <img src={logo} alt="OZS Logo" className="about-logo" />

        <h2>ABOUT OZS</h2>

        <p className="jp">
          OZSは、ダークで内省的なヒップホップを軸に、GarageBandとSunoを活用した曲作成。
          DAWもはじめたただの会社員です。
        </p>

        <p className="en">
          OZS creates dark and introspective hip-hop, crafting tracks using GarageBand and Suno.
          A simple office worker who recently began exploring the world of DAWs.
        </p>

        <hr />

        <p className="jp">
          DXを軸に大事な従業員さんと一緒にお仕事をする毎日、多くの仲間がわたしの前から去っていった。
          そして、虚無に包まれた今、「なんてつまらない仕事なんだろう」あてるところもなく、
          言葉を交わすことさえできない。虚しいだけの毎日。
          気がつけばGarageband(iPad)を手にし、諦めたはずのDAW(Cubase10.5)をまた引っ張り出し作曲をはじめるのだった。
        </p>

        <p className="jp quote">
          「ただ一緒にあなた達と1日でも長く、同じ会社で働きたかった。」<br />
          くたばる前に、わたしの生きた証を残したい。
        </p>

        <p className="en">
          Every day, I worked alongside precious colleagues under the banner of digital transformation.
          Yet one by one, many of them disappeared from my side.
          Before I knew it, I was holding my iPad again, making music.
        </p>

        <p className="en quote">
          “I just wanted to work with all of you, even one more day, in the same company.”
        </p>

        {/* ✅ 戻るボタン追加 */}
        <div className="back-btn-container">
          <Link to="/" className="back-btn">← Back</Link>
        </div>

      </div>
    </section>
  );
}
