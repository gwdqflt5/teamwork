import "./Muhammadali.css";
import logoImg from "../../assets/MetaV.png";

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
        <div className="etc">
          <div className="second-footer">
            <h2>About Us</h2>
            <a href="#">About MetaV</a>
            <a href="#">Contact us</a>
            <a href="#">FAQ</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Muhammadali;
