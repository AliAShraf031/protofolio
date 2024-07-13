import ContactCss from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={ContactCss["contact"]}>
      <div className={ContactCss["container"]}>
        <h2>Keep In Touch</h2>
        <div className={ContactCss["contact-content"]}>
          <div className={ContactCss["left"]}>
            <div className={ContactCss["info"]}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <input
              className={ContactCss["subject"]}
              type="text"
              placeholder="Subject"
            />
            <textarea defaultValue="....."></textarea>
            <button>Sumbit</button>
          </div>
          <div className={ContactCss["right"]}>
            <i className="fa-solid fa-location-dot"></i>
            <span>2651 Main Street, Suit 124</span>
            <span>Seattle, WA, 98101</span>
            <i className="fa-regular fa-mobile"></i>
            <span>0123456789</span>
            <span>0345627891</span>
            <i className="fa-solid fa-envelope"></i>
            <span>hello@thetheme.io</span>
            <span>inf0@brex-theme.io</span>
          </div>
        </div>
      </div>
    </section>
  );
}
