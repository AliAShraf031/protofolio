import ServicesCss from "./Services.module.css";

const servicesCard = [
  {
    id: 1,
    icon: <i className="fa-solid fa-gear"></i>,
    title: "Creative Design",
    text: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 2,
    icon: <i className="fa-solid fa-crop-simple"></i>,
    title: "Clean Code",
    text: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 3,
    icon: <i className="fa-solid fa-cube"></i>,
    title: "Responsive Design",
    text: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 4,
    icon: <i className="fa-solid fa-circle-half-stroke"></i>,
    title: "Material UI",
    text: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 5,
    icon: <i className="fa-brands fa-uikit"></i>,
    title: "Material UI Icons",
    text: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 6,
    icon: <i className="fa-solid fa-hand"></i>,
    title: "Awesome Support",
    text: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
];

function Card({ icon, title, text }) {
  return (
    <div className={ServicesCss["card"]}>
      {icon}
      <span>{title}</span>
      <p>{text}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section className={ServicesCss["services"]}>
      <div className={ServicesCss["container"]}>
        <h2>Services</h2>
        <div className={ServicesCss["services-content"]}>
          {servicesCard.map((card) => {
            return (
              <Card
                key={card.id}
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
