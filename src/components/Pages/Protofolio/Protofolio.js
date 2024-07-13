import ProtofolioCss from "./Protofolio.module.css";
import img1 from "../../assets/images/port1.jpg";
import img2 from "../../assets/images/port2.jpg";
import img3 from "../../assets/images/port3.jpg";
import img4 from "../../assets/images/port4.jpg";
import img5 from "../../assets/images/port5.jpg";
import img6 from "../../assets/images/port6.jpg";
import { useState } from "react";


const portfolioItem = [
  {
    id: 1,
    cover: img1,
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: img2,
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: img3,
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: img4,
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: img5,
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: img6,
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
];



export default function Protofolio() {
  const [category, setCategory] = useState("all");
  const [List, setList] = useState(portfolioItem);

  return (
    <section className={ProtofolioCss["protofolio"]}>
      <div className={ProtofolioCss["container"]}>
        <h2>Protofolio</h2>
        <div className={ProtofolioCss["btn"]}>
          <button
            onClick={() => {
              setCategory("all");
              setList(portfolioItem);
            }}
            className={category === "all" ? ProtofolioCss["active"] : null}
          >
            All
          </button>
          <button
            onClick={() => {
              setCategory("marketing");
              const filterItem = portfolioItem.filter((item) => {
                return item.category === "marketing";
              });
              setList(filterItem);
            }}
            className={
              category === "marketing" ? ProtofolioCss["active"] : null
            }
          >
            Marketing
          </button>
          <button
            onClick={() => {
              setCategory("design");

              const filterItem = portfolioItem.filter((item) => {
                return item.category === "design";
              });

              setList(filterItem);
            }}
            className={category === "design" ? ProtofolioCss["active"] : null}
          >
            Design
          </button>
          <button
            onClick={() => {
              setCategory("development");

              const filterItem = portfolioItem.filter((item) => {
                return item.category === "development";
              });

              setList(filterItem);
            }}
            className={
              category === "development" ? ProtofolioCss["active"] : null
            }
          >
            Development
          </button>
        </div>
        <div className={ProtofolioCss["protofolio-content"]}>
          {List.map((item) => {
            return (
              <div className={ProtofolioCss["box"]} key={item.id}>
                <img src={item.cover} alt="" />
                <div className={ProtofolioCss["overlay"]}>
                  <h4>{item.title}</h4>
                  <span>{item.name}</span>
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
