import LandingCss from "./Landing.module.css";
import Typewriter from "typewriter-effect";
export default function Landing() {
  return (
    <section className={LandingCss["landing"]}>
      <span className={LandingCss["text"]}>HELLO I'M</span>

      <h1>
        <Typewriter
          options={{
            strings: ["Ali Ashraf Ali", "Front-end Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>
      <button>Download CV</button>
    </section>
  );
}
