import React, { useRef, useState } from "react";
import style from "./all_works.module.scss";
import fleche from "../../assets/fleche.png";
import flag from "../../assets/flags.jpg";
import plantes from "../../assets/plantes.jpg";
import barber from "../../assets/barber.jpg";
import { useHover } from "usehooks-ts";
import { useSwiper } from "../../SwiperContext";
import { usePageContext } from "../../PageContext";

const All_works: React.FC = () => {
  const hoverRef1 = useRef<HTMLDivElement>(null);
  const hoverRef2 = useRef<HTMLDivElement>(null);
  const hoverRef3 = useRef<HTMLDivElement>(null);
  const isHover1 = useHover(hoverRef1);
  const isHover2 = useHover(hoverRef2);
  const isHover3 = useHover(hoverRef3);
  const [imageSrc, setImageSrc] = useState<string>(flag);
  const { setActivePage } = usePageContext();
  const handlePageChange = (index: string) => {
    let activePage = "";

    switch (index) {
      case "contries":
        setActivePage("all_countries");
        break;
      case "jungle":
        setActivePage("la_maison_jungle");
        break;
      case "barber":
        setActivePage("barberplus");
        break;
      default:
        activePage = "all_countries";
        break;
    }

    // Faites quelque chose avec activePage, comme le transmettre en tant que prop à un autre composant
    console.log("Active Page:", activePage);
  };

  const handleContentHover = (contentId: number) => {
    if (contentId === 1) {
      setImageSrc(flag);
    } else if (contentId === 2) {
      setImageSrc(plantes);
    } else if (contentId === 3) {
      setImageSrc(barber);
    }
  };

  const { swiper } = useSwiper();

  const navigateTo = (index: number, pages: string) => {
    if (swiper) {
      swiper.slideTo(index);
      handlePageChange(pages);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.select}>SELECT THE PROJECT</div>
      <div className={style.container_projects}>
        <div className={style.project_title}>
          <a onClick={() => navigateTo(3, "contries")}>
            <div
              className={style.contenu}
              ref={hoverRef1}
              onMouseEnter={() => handleContentHover(1)}
            >
              <div className={style.numero}>1</div>
              <div className={style.title}>ALL CONTRIES</div>
              <div className={style.fleche}>
                <img src={fleche} alt="" />
              </div>
            </div>
          </a>
          <a onClick={() => navigateTo(3, "jungle")}>
            <div
              className={style.contenu}
              ref={hoverRef2}
              onMouseEnter={() => handleContentHover(2)}
            >
              <div className={style.numero}>2</div>
              <div className={style.title}>LA MAISON JUNGLE</div>
              <div className={style.fleche}>
                <img src={fleche} alt="" />
              </div>
            </div>
          </a>
          <a onClick={() => navigateTo(3, "barber")}>
            <div
              className={style.contenu}
              ref={hoverRef3}
              onMouseEnter={() => handleContentHover(3)}
            >
              <div className={style.numero}>3</div>
              <div className={style.title}>BARBER PLUS</div>
              <div className={style.fleche}>
                <img src={fleche} alt="" />
              </div>
            </div>
          </a>
        </div>
        <div className={style.project_img}>
          <div
            className={style.img}
            style={{
              display: isHover1 || isHover2 || isHover3 ? "block" : "none",
            }}
          >
            <img src={imageSrc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default All_works;
