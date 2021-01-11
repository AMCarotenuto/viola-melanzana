import Logo from "../../public/vercel.svg";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="col1">
        <p>Powered By Team Chikorita ©</p>
        <p>We are hiring! </p>
      </div>
    </div>
  );
}
