import BlogCss from "./Blog.module.css";
import img1 from "../../assets/images/b1.png";
import img2 from "../../assets/images/b2.png";
import img3 from "../../assets/images/b3.png";

const blogItems = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: img1,
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: img2,
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: img3,
  },
];

export default function Blog() {
  return (
    <section className={BlogCss["blog"]}>
      <div className={BlogCss["container"]}>
        <h2>Blog</h2>
        <div className={BlogCss["blog-content"]}>
          {blogItems.map((item) => {
            return (
              <div className={BlogCss["box"]} key={item.id}>
                <img src={item.cover} alt="" />
                <div className={BlogCss["text"]}>
                  <h3>{item.title}</h3>
                  <span>
                    {item.author} {item.date}
                  </span>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
