import { useState } from "react";
import style from "/styles/style.module.css";


const NavBar = ({ handleRegionFilter }) => {
  const [NavBar, setnavbar] = useState(false);
  const [activeRegion, setActiveRegion] = useState("");

  const handeclicked = () => {
    setnavbar(!NavBar);
  };

  const handleRegionClick = (region) => {
    handleRegionFilter(region);
    setActiveRegion(region);
  };

  return (
    <div className={style.nav_container}>
      <div className={style.filter_container}>
        Filter by Region
        <button className={style.filter_button} onClick={handeclicked}>
          <i
            className={`fa-solid fa-chevron-down ${style.icon_filter} ${
              NavBar ? style.rotate : ""
            }`}
          ></i>
        </button>
      </div>
      <div className={`${style.nav_menu} ${NavBar ? style.open : ""}`}>
        <ul className={style.nav_list}>
          <li
            className={`${style.nav_item} ${
              activeRegion === "Africa" ? style.active : ""
            }`}
            onClick={() => handleRegionClick("Africa")}
          >
            Africa
          </li>
          <li
            className={`${style.nav_item} ${
              activeRegion === "Americas" ? style.active : ""
            }`}
            onClick={() => handleRegionClick("Americas")}
          >
            America
          </li>
          <li
            className={`${style.nav_item} ${
              activeRegion === "Asia" ? style.active : ""
            }`}
            onClick={() => handleRegionClick("Asia")}
          >
            Asia
          </li>
          <li
            className={`${style.nav_item} ${
              activeRegion === "Europe" ? style.active : ""
            }`}
            onClick={() => handleRegionClick("Europe")}
          >
            Europe
          </li>
          <li
            className={`${style.nav_item} ${
              activeRegion === "Oceania" ? style.active : ""
            }`}
            onClick={() => handleRegionClick("Oceania")}
          >
            Oceania
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
