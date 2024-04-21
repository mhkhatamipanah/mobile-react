import React from "react";
import "../Cards/portfilo.scss";
import Card from "./Card";
import { useEffect, useState } from "react";
import Loading from "../../LoadingPortfilo/Loading";

import iconSite from "../../../images/icon2/1.png";
import iconGraphic from "../../../images/icon2/2.png";
import iconInsta from "../../../images/icon2/3.png";

import site from "../../../images/portfilo/50.jpg";

import story1 from "../../../images/portfilo/31.jpg";
import story2 from "../../../images/portfilo/32.jpg";
import story3 from "../../../images/portfilo/33.jpg";

import page1 from "../../../images/portfilo/1.jpg";
import page2 from "../../../images/portfilo/2.jpg";
import page3 from "../../../images/portfilo/3.jpg";

import logo1 from "../../../images/portfilo/11.jpg";
import logo2 from "../../../images/portfilo/12.jpg";
import logo3 from "../../../images/portfilo/13.jpg";
import logo4 from "../../../images/portfilo/14.jpg";

let all = [
  {
    id: 0,
    name: "site",
    icon: iconSite,
    pic: site,
    title: "MH_KHP",
    description:
      "Personal Website : Programmer and website designer with more than 2 years of experience in web development, testing and troubleshooting, familiarity with the user interface Also, more than 5 years of experience in the field of graphics.",
  },
  {
    id: 1,
    name: "graphic",
    icon: iconGraphic,
    pic: story1,
    title: "Fastfood Aria",
    description:
      "We have started to operate and provide services since 1377. All raw materials are of quality and well-known brands",
  },
  {
    id: 2,
    name: "graphic",
    icon: iconGraphic,
    pic: story2,
    title: "Nuts Saber",
    description:
      "Saber Nuts and Dried Fruits by supplying high-quality, hand-picked and healthy products, with online ordering of all kinds of Iranian and foreign nuts and dried fruits and chocolates.",
  },
  {
    id: 3,
    name: "graphic",
    icon: iconGraphic,
    pic: story3,
    title: "Tire Farzin ",
    description:
      "Fast shipping all over the country - money back guarantee - the quality of all products is guaranteed",
  },
  {
    id: 4,
    name: "graphic",
    icon: iconGraphic,
    pic: logo1,
    title: "Labkhand_wood",
    description:
      "Designing and manufacturing all kinds of wooden artefacts with the written guarantee of the Smile brand, sending from Tehran (Pakdasht) to all over the country",
  },
  {
    id: 5,
    name: "graphic",
    icon: iconGraphic,
    pic: logo2,
    title: "Truffle_Khushe",
    description:
      "Kusheh food industry will create a memorable taste for you with the best raw materials and seasonings. Just try once",
  },
  {
    id: 6,
    name: "graphic",
    icon: iconGraphic,
    pic: logo3,
    title: "Data_wood",
    description:
      "We are a manufacturer of all kinds of wooden products ordered by customers in Gilan, with 40 years of production experience, we ship all over the country",
  },
  {
    id: 7,
    name: "graphic",
    icon: iconGraphic,
    pic: logo4,
    title: "Kavosh",
    description:
      "Kavash Educational Institute is by your side for ease of learning, along with an experienced team of teachers and top graduates.",
  },
  {
    id: 8,
    name: "page",
    icon: iconInsta,
    pic: page1,
    title: "Labkhand_wood",
    description:
      "Designing and manufacturing all kinds of wooden artefacts with the written guarantee of the Smile brand, sending from Tehran (Pakdasht) to all over the country",
  },
  {
    id: 9,
    name: "page",
    icon: iconInsta,
    pic: page2,
    title: "Truffle_Khushe",
    description:
      "Kusheh food industry will create a memorable taste for you with the best raw materials and seasonings. Just try once",
  },
  {
    id: 10,
    name: "page",
    icon: iconInsta,
    pic: page3,
    title: "Data_wood_ind",
    description:
      "We are a manufacturer of all kinds of wooden products ordered by customers in Gilan, with 40 years of production experience, we ship all over the country",
  },
];

function Portfilo() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isPageLoaded, setIsPageLoaded] = useState(true); //this helps

  useEffect(() => {
    setIsLoaded(false);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsPageLoaded(false);
      }, 500);
    }
  }, [isLoaded]);

  //  function btn
  let showCard = [...all];
  const [allarray, setAllarray] = useState(all);

  function allcard() {
    setAllarray(showCard);
    removeActiceClassList();
    document.querySelector(".btn-all").classList.add("active-btn");
  }

  function siteCard() {
    let site = showCard.filter((e) => {
      if (e.name == "site") {
        return e;
      }
    });
    setAllarray(site);
    removeActiceClassList();
    document.querySelector(".btn-site").classList.add("active-btn");
  }

  function graphicCard() {
    let graphic = showCard.filter((e) => {
      if (e.name == "graphic") {
        return e;
      }
    });
    setAllarray(graphic);
    removeActiceClassList();
    document.querySelector(".btn-graphic").classList.add("active-btn");
  }

  function pageCard() {
    let page = showCard.filter((e) => {
      if (e.name == "page") {
        return e;
      }
    });
    setAllarray(page);
    removeActiceClassList();
    document.querySelector(".btn-page").classList.add("active-btn");
  }

  // remove all active
  function removeActiceClassList() {
    document.querySelector(".btn-all").classList.remove("active-btn");
    document.querySelector(".btn-site").classList.remove("active-btn");
    document.querySelector(".btn-graphic").classList.remove("active-btn");
    document.querySelector(".btn-page").classList.remove("active-btn");
  }

  useEffect(() => {}, [allarray]);

  let cards = allarray.map((e) => {
    return (
      <Card
        key={e.id}
        icon={e.icon}
        pic={e.pic}
        title={e.title}
        description={e.description}
        nestedRoute={e.id}
      />
    );
  });
  return (
    <div className="margin-portfilo">
      <div className="btn-select-portfilo">
        <button
          className=" btn btn-outline-primary m-1 active-btn btn-all"
          onClick={allcard}
        >
          All
        </button>
        <button
          className=" btn btn-outline-primary m-1 btn-site"
          onClick={siteCard}
        >
          Site
        </button>
        <button
          className=" btn btn-outline-primary m-1 btn-graphic"
          onClick={graphicCard}
        >
          Grapghic{" "}
        </button>
        <button
          className=" btn btn-outline-primary m-1  btn-page"
          onClick={pageCard}
        >
          Page
        </button>
      </div>

      <div className="container-of-cards row ">
        {isPageLoaded ? <Loading /> : cards}

        {/* <Card icon={iconGraphic} pic={story1} title='Fastfood Aria' description= "desc asdasdri ptix zxzcsad sd ondfjsadfssad sdadsaha xzcx c zdsadxasdc zasdzcxczsadx z cz xcfassda xczdfh as"/>
          <Card icon={iconGraphic} pic={story2} title='Fastfood Aria' description= "desc asdasdri ptix zxzcsad sd ondfjsadfssad sdadsaha xzcx c zdsadxasdc zasdzcxczsadx z cz xcfassda xczdfh as"/>
          <Card icon={iconGraphic} pic={story3} title='Fastfood Aria' description= "desc asdasdri ptix zxzcsad sd ondfjsadfssad sdadsaha xzcx c zdsadxasdc zasdzcxczsadx z cz xcfassda xczdfh as"/>
          <Card icon={iconGraphic} pic={logo1} title='Fastfood Aria' description= "desc asdasdri ptix zxzcsad sd ondfjsadfssad sdadsaha xzcx c zdsadxasdc zasdzcxczsadx z cz xcfassda xczdfh as"/>
          <Card icon={iconGraphic} pic={logo2} title='Fastfood Arsssia' description= "desc asdasdri ptix zxzcsad sd ondfjsadfssad sdadsaha xzcx c zdsadxasdc zasdzcxczsadx z cz xcfassda xczdfh as"/>
          <Card icon={iconGraphic} pic={logo3} title='Fastfood Aria' description= "desc asdasdri ptix zxzcsad sd ondfjsadfssad sdadsaha xzcx c zdsadxasdc zasdzcxczsadx z cz xcfassda xczdfh as"/>
          <Card icon={iconGraphic} pic={logo4} title='Fastfood Aria' description= "desc asdasdri ptix zxzcsad sd ondfjsadfssad sdadsaha xzcx c zdsadxasdc zasdzcxczsadx z cz xcfassda xczdfh as"/>
          <Card icon={iconGraphic} pic={logo5} title='Fastfood Aria' description= "desc asdasdri ptix zxzcsad sd ondfjsadfssad sdadsaha xzcx c zdsadxasdc zasdzcxczsadx z cz xcfassda xczdfh as"/>
          <Card icon={iconInsta} pic={page1} title='Fastfood Aria' description= "desc asdasdri ptix zxzcsad sd ondfjsadfssad sdadsaha xzcx c zdsadxasdc zasdzcxczsadx z cz xcfassda xczdfh as"/>
          <Card icon={iconInsta} pic={page2} title='Fastfood Aria' description= "desc asdasdri ptix zxzcsad sd ondfjsadfssad sdadsaha xzcx c zdsadxasdc zasdzcxczsadx z cz xcfassda xczdfh as"/>
          <Card icon={iconInsta} pic={page3} title='Fastfood Aria' description= "desc asdasdri ptix zxzcsad sd ondfjsadfssad sdadsaha xzcx c zdsadxasdc zasdzcxczsadx z cz xcfassda xczdfh as"/> */}
      </div>
    </div>
  );
}

export default Portfilo;
