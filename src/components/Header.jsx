/** @format */

import { useNavigate } from "react-router-dom";

// Imported Assests =======>
import video from "../assets/video-optimized.mp4";
import videoPoster from "../assets/hero-poster.jpg";
import aeroplane from "../assets/aeroplane.png";

const Header = () => {
  const navigate = useNavigate();

  const scrollToSearch = () => {
    document.getElementById("Search")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div id='Header' className='header flex container'>
      <div className='mainText'>
        <small className='heroEyebrow'>YOUR NEXT ADVENTURE STARTS HERE</small>
        <h1>Make every journey a little more memorable.</h1>
        <p>Find a flight that fits your plans and get your next trip moving.</p>
        <div className='heroActions'>
          <button
            type='button'
            className='btn heroPrimary'
            onClick={() => navigate("/allflights")}
          >
            Explore flights <span aria-hidden='true'>→</span>
          </button>
          <button type='button' className='heroSecondary' onClick={scrollToSearch}>
            Search your route <span aria-hidden='true'>↓</span>
          </button>
        </div>
      </div>

      <div className='headerImages flex'>
        <div className='videoDiv'>
          <video
            src={video}
            poster={videoPoster}
            className='video'
            autoPlay
            loop
            muted
            playsInline
            preload='metadata'
            aria-hidden='true'
          />
        </div>

        <img src={aeroplane} className='plane' alt='' aria-hidden='true' />
      </div>
    </div>
  );
};

export default Header;
