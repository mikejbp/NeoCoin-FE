import logo from "../Assets/neocoin_logo.png";
import github from "../Assets/logoGithub.png";
import twitter from "../Assets/Twitter.png";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="socialWrapper">
          <img src={twitter} alt="neo coin logo" width="40" />
          <h2>Twitter</h2>
        </div>
        <div className="footerImageWrapper">
          <img src={logo} alt="neo coin logo" />
        </div>
        <a
          href="https://github.com/No-Country/C4-23-t/tree/development"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="socialWrapper">
            <h2>Github</h2>
            <img src={github} alt="github Neocoin" width="40" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
