import "./Muhammadali.css";
import logoImg from "../../assets/MetaV.png";
import inImg from "../../assets/in.png";
import instaImg from "../../assets/Instagram.png";
import twiterImg from "../../assets/twiter.png";
import faceImg from "../../assets/Facebook.png";

const Muhammadali = () => {
  return (
    <div className="up-footer">
      <footer className="first-footer">
        <div className="paragraph">
          <img className="logo" src={logoImg} alt="" />
          <p className="footer-text">
            Adipiscing at in tellus integer. Pellentesque massa <br /> placerat
            duis ultricies lacus. Nisi porta lorem mollis <br /> aliquam ut
            porttitor
          </p>
        </div>
      </footer>
      <div className="second-footer">
        <h2>About Us</h2>
        <a href="#">About MetaV</a>
        <a href="#">Contact us</a>
        <a href="#">FAQ</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <div className="third-footer">
        <h2>Services</h2>
        <a href="#">NFT Marketplace</a>
        <a href="#">Virtual Concert</a>
        <a href="#">Gaming</a>
        <a href="#">Artwork</a>
        <a href="#">Travel</a>
      </div>
      <div className="fourth-footer">
        <h2>Contact</h2>
        <a href="">
          <img src={inImg} alt="https://www.facebook.com/login.php/" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={instaImg} alt="" />
        </a>
        <a href="https://twitter.com/?lang=en">
          <img src={twiterImg} alt="" />
        </a>
        <a href="https://www.facebook.com/login.php/">
          <img src={faceImg} alt="" />
        </a>
        <p>
          2022 © MetaV.com All right <br /> reserved.
        </p>
      </div>
    </div>
  );
};

export default Muhammadali;
