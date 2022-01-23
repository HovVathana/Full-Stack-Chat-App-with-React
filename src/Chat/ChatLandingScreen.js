import React from "react";
import LaptopIcon from "@material-ui/icons/Laptop";
import Divider from "@material-ui/core/Divider";
import logoWebpage from "../images/logo_white.png";
import "./ChatLandingScreen.css";
import Zoom from "@material-ui/core/Zoom";

function ChatLandingScreen({ showLandingScreenPhoto }) {
  return (
    <div className="chat__landingScreen">
      <div>
        <Zoom
          in={showLandingScreenPhoto}
          style={{ transitionDelay: showLandingScreenPhoto ? "300ms" : "0ms" }}
        >
          <img
            style={{ width: "378px", height: "295px" }}
            src={logoWebpage}
            alt="logowebpage"
          />
        </Zoom>
      </div>

      <div className="chat__landingScreen_title">
        <p>The messages is not encrypted.</p>
      </div>

      <div>
        <p>
          This is a project just to have fun with React.js, Redux, Firebase...
          Oh and by the way, the logo I found in on Google so credit go to
          Google
        </p>
      </div>

      <Divider />

      <div className="chat__landingScreen_footer">
        <LaptopIcon />
        <p>For better experience view it on PC or Laptop</p>
      </div>
    </div>
  );
}

export default ChatLandingScreen;
