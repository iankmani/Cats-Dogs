import React from "react";
import "./Starter.css";
import { useNavigate } from "react-router-dom";

const Starter = () => {
  const navigate = useNavigate();
  const handleNavigateToDogsPage = () => {
    navigate("/DogSignUp");
  };
  const handleNavigateToCatsPage = () => {
    navigate("/CatSignUp");
  };
  return (
    <section>
      <div className="starter-container">
        <h2>choose one:</h2>
        <div className="thebuttons">
          <button className="dogbtn" onClick={handleNavigateToDogsPage}>
            Dogs
          </button>
          <button className="catbtn" onClick={handleNavigateToCatsPage}>
            Cats
          </button>
        </div>
      </div>
    </section>
  );
};

export default Starter;
