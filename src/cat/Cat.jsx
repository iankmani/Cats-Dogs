import React from "react";
import ragdoll from "../assets/Ragdoll.jpeg";
import exoticShorthair from "../assets/exoticShorthair.jpeg";
import SphynxCat from "../assets/SphynxCat.jpeg";
import Abyssinian from "../assets/AbyssiniancatBjork.jpeg";
import Siamese from "../assets/Siamese.jpeg";
import Siberian from "../assets/SiberianCat.jpeg";

import "./Cat.css";

const Cat = () => {
  return (
    <div className="catpage_main">
      <div className="catpage_card_container">
        <div className="catpage_card">
          <div className="catpage_card_image">
            <img
              src={ragdoll}
              alt="picture of cat"
              className="catpage_card_img"
            />
          </div>
          <div className="catpage_card_contents">
            <h2 className="catpage_card_title">Rag doll</h2>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div className="catpage_card">
          <div className="catpage_card_image">
            <img
              src={SphynxCat}
              alt="picture of cat"
              className="catpage_card_img"
            />
          </div>
          <div className="catpage_card_contents">
            <h2 className="catpage_card_title">Sphynx Cat</h2>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div className="catpage_card">
          <div className="catpage_card_image">
            <img
              src={exoticShorthair}
              alt="picture of cat"
              className="catpage_card_img"
            />
          </div>
          <div className="catpage_card_contents">
            <h2 className="catpage_card_title">Exotic Shorthair</h2>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div className="catpage_card">
          <div className="catpage_card_image">
            <img
              src={Abyssinian}
              alt="picture of cat"
              className="catpage_card_img"
            />
          </div>
          <div className="catpage_card_contents">
            <h2 className="catpage_card_title">Abyssinian cat Bjork</h2>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div className="catpage_card">
          <div className="catpage_card_image">
            <img
              src={Siamese}
              alt="picture of cat"
              className="catpage_card_img"
            />
          </div>
          <div className="catpage_card_contents">
            <h2 className="catpage_card_title">Siamese Cat</h2>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div className="catpage_card">
          <div className="catpage_card_image">
            <img
              src={Siberian}
              alt="picture of cat"
              className="catpage_card_img"
            />
          </div>
          <div className="catpage_card_contents">
            <h2 className="catpage_card_title">Siberian cat</h2>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
