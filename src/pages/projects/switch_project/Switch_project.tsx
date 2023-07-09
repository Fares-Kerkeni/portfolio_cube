// Switch_project.tsx
import React from "react";
import style from "./Switch_project.module.scss";
import { usePageContext } from "../../../PageContext";
import All_contries from "../all_contries/All_contries";
import La_maison_jungle from "../la_maison_jungle/La_maison_jugle.tsx";
import Barberplus from "../barberplus/Barberplus";

function Switch_project() {
  const { activePage } = usePageContext();

  return (
    <div className={style.container}>
      {activePage === "all_countries" && <All_contries />}
      {activePage === "la_maison_jungle" && <La_maison_jungle />}
      {activePage === "barberplus" && <Barberplus />}
    </div>
  );
}

export default Switch_project;
