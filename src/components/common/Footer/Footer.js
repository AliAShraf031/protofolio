import FooterCss from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={FooterCss["links"]}>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitch"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
    </footer>
  );
}
