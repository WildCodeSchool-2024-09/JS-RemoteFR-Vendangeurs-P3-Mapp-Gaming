// import { useEffect, useState } from "react";
import Check from "../../assets/icons/Check.svg";
import StarP from "../../assets/icons/StarP.svg";
import StarV from "../../assets/icons/StarV.svg";
import pc from "../../assets/icons/pc.svg";
import playstation from "../../assets/icons/playstation.svg";
import switchIcon from "../../assets/icons/switch.svg";
import xbox from "../../assets/icons/xbox.svg";
import tombraider from "../../assets/images/tombraider.jpeg";

export default function GameBanner() {
  // const [game, setGame] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:3310/api/Games")
  //     .then((response) => response.json())
  //     .then((data) => setGame(data));
  // }, []);
  return (
    <>
      <section className="flex items-center justify-between mb-4">
        <div className="flex gap-4">
          <h1>TOMB RAIDER</h1>
          <div className="flex items-center gap-2">
            <span>EN STOCK</span>
            <img src={Check} alt="check" />
          </div>
          <div className="flex items-center gap-3">
            <img src={pc} alt="pc" />
            <img src={playstation} alt="playstation" />
            <img src={xbox} alt="xbox" />
            <img src={switchIcon} alt="switch" />
          </div>
        </div>
        <div className="flex items-center">
          <img src={StarP} alt="star" />
          <img src={StarP} alt="star" />
          <img src={StarP} alt="star" />
          <img src={StarP} alt="star" />
          <img src={StarV} alt="star" />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 w-3/4">
          <div className="row-span-2 col-span-2">
            <img
              src={tombraider}
              alt="tomb raider"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <img
              src={tombraider}
              alt="tomb raider"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div>
            <img
              src={tombraider}
              alt="tomb raider"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div>
            <img
              src={tombraider}
              alt="tomb raider"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div>
            <img
              src={tombraider}
              alt="tomb raider"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
