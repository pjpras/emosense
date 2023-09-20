import AudioUpload from "../components/AudioUpload";
import Navbar from "../components/Navbar";
import "./Home.css";
import background from "../image/8401.jpg";

export default function Home() {
  return (
    <div className="upper-container">
      <img className="image" src={background} alt=" " />
      <div className="upper-container-layer">
        <Navbar />
        <div className="text-container">
          <p className="text-bold">
            Sentiment analysis software that's as easy to understand as it is to
            use
          </p>
          <p className="text-light">
            Emosense's AI-driven technology gives you the tools you need to
            capture and take action on customer sentiments from audio and media
            channels in real time – so you can proactively align your business
            with customer needs.
          </p>
        </div>
        <AudioUpload />
      </div>
    </div>
  );
}
