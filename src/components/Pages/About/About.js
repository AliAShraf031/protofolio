import AboutCss from "./About.module.css";
import img from "../../assets/images/man.png";
export default function About() {
  return (
    <section className={AboutCss["about"]}>
      <div className={AboutCss["container"]}>
        <img src={img} alt="" />
        <div className={AboutCss["info"]}>
          <h2>About Me</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur
          </p>
          <p>
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor si voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
          </p>
          <div className={AboutCss["btn"]}>
            <button>Download CV</button>
            <button>Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
}
