import TestimonialsCss from "./Testimonials.module.css";
import img1 from "../../assets/images/team-1.png";
import img2 from "../../assets/images/team-2.png";
import img3 from "../../assets/images/team-3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsItems = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: img1,
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: img2,
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: img3,
    name: "GorkCoder",
    post: "React Developer",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={TestimonialsCss["testimonials"]}>
      <div className={TestimonialsCss["container"]}>
        <h2>Testimonials</h2>
        <Slider {...settings}>
          {testimonialsItems.map((item) => {
            return (
              <div className={TestimonialsCss["box"]} key={item.id}>
                <i className="fa-solid fa-quote-left"></i>
                <p>{item.text}</p>
                <img src={item.image} alt="" />
                <div className={TestimonialsCss["text"]}>
                  <span className={TestimonialsCss["name"]}> {item.name} </span>
                  <span className={TestimonialsCss["post"]}> {item.post} </span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
