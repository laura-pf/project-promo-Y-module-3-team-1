import "../scss/components/Footer.scss";
import Logo from "../images/adalablogo.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="logoAdalab" src={Logo} alt="Logo Adalab" />
    </footer>
  );
}

export default Footer;
