import React from "react";
import { useSelector } from "react-redux";
import Crypt from "./Crypt";
import "../Styling/Portfolio.css";
import NavLogo from "../assets/NavLogo.png";
import { getUserCrypto } from "../functions/GeneralFunctions";
import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    getUserCrypto();
  }, []);

  const portfolio = useSelector((state) => state.portfolioData);
  return (
    <div className="portfolio">
      <div className="portfolioCont">
        <div className="portHeaderCont">
          <img src={NavLogo} alt="logo"></img>
          <h2>PORTFOLIO</h2>
        </div>
        <div className="portCrypt">
          {portfolio?.map((crypt) => (
            <Crypt key={crypt.id} crypt={crypt} />
          ))}
        </div>
      </div>
    </div>
  );
}
