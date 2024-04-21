import React from "react";
import "../Contact/contact.scss";
import Card from "./Card";
import { useState, useEffect } from "react";
import Loading from "../LoadingContact/Loading";

import img1 from "../../images/contact/tel.png";
import img2 from "../../images/contact/instagram.png";
import img3 from "../../images/contact/github.png";
import img4 from "../../images/contact/twitter.png";
import img5 from "../../images/contact/telephone2.png";
import img6 from "../../images/contact/email2.png";
import img7 from "../../images/contact/whatsap.png";
import img8 from "../../images/contact/linkedin.png";

const allaray = [
  {
    id: 1,
    img: img1,
    socialmedia: "Telegram",
    className: "card-contact contact1",
    linkbtn: "https://t.me/M_H_khatami_panah",
  },
  {
    id: 2,
    img: img2,
    socialmedia: "Instagram",
    className: "card-contact contact2",
    linkbtn: "https://instagram.com/m_h_khatamiiii_panah?igshid=ZjA0NjI3M2I=",
  },
  {
    id: 3,
    img: img3,
    socialmedia: "Github",
    className: "card-contact contact3",
    linkbtn: "https://github.com/mhkhatamipanah",
  },
  {
    id: 4,
    img: img4,
    socialmedia: "Twitter",
    className: "card-contact contact4",
    linkbtn:
      "https://twitter.com/MH_khatamipanah?t=FNL49a1fxq3aM-axQyj60w&s=09",
  },
  {
    id: 5,
    img: img5,
    socialmedia: "Telephone",
    className: "card-contact contact5",
    linkbtn: "tel://+989023665306",
  },
  {
    id: 6,
    img: img6,
    socialmedia: "Gmail",
    className: "card-contact contact6",
    linkbtn: "mailto:mhkhatamipanah@gmail.com",
  },
  {
    id: 7,
    img: img7,
    socialmedia: "whatsapp",
    className: "card-contact contact7",
    linkbtn: "https://wa.link/yxc96j",
  },
  {
    id: 8,
    img: img8,
    socialmedia: "Linked-in",
    className: "card-contact contact8",
    linkbtn: "https://www.linkedin.com/in/mmd-khatami-06829625a",
  },
];

function Contact() {
  const [isLoaded1, setIsLoaded1] = useState(true);
  const [isPageLoaded1, setIsPageLoaded1] = useState(true); //this helps

  useEffect(() => {
    setIsLoaded1(false);
  }, []);

  useEffect(() => {
    if (isLoaded1) {
      setTimeout(() => {
        setIsPageLoaded1(false);
      }, 800);
    }
  }, [isLoaded1]);

  let cards = allaray.map((e) => {
    return (
      <Card
        img={e.img}
        socialmedia={e.socialmedia}
        className={e.className}
        linkbtn={e.linkbtn}
        key={e.id}
      />
    );
  });
  return (
    <div className="margin-contact">
      <div className="text-contact-us">
        <h2> Contact Us</h2>
      </div>
      <div className="container-contact">
        {isPageLoaded1 ? <Loading /> : cards}
      </div>
    </div>
  );
}

export default Contact;
