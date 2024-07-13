import CounterCss from "./Counter.module.css";
import CountUp from "react-countup";

function Box({ icon, number, title }) {
  return (
    <div className={CounterCss["box"]}>
      {icon}
      <span className={CounterCss["number"]}>
        <CountUp duration={4} end={number} />
      </span>
      <span className={CounterCss["title"]}>{title}</span>
    </div>
  );
}

export default function Counter() {
  return (
    <section className={CounterCss["counter"]}>
      <div className={CounterCss["box-container"]}>
        <Box
          icon={<i className="fa-solid fa-cloud"></i>}
          number={87}
          title={"HAPPY CLIENTS"}
        />
        <Box
          icon={<i className="fa-regular fa-heart"></i>}
          number={231}
          title={"PROJECTS COMPLEATED"}
        />
        <Box
          icon={<i className="fa-solid fa-heart"></i>}
          number={108}
          title={"FILES DOWNLOADED"}
        />
        <Box
          icon={<i className="fa-solid fa-user"></i>}
          number={1543}
          title={"LIENS OF CODE"}
        />
      </div>
    </section>
  );
}
