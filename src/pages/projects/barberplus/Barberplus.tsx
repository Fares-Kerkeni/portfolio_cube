import { Swiper, SwiperSlide } from "swiper/react";
import style from "./barber.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import Nav from "../../../components/nav/Nav";
import { Scrollbar, A11y, EffectCube, Mousewheel } from "swiper/modules";
import Template from "../template_project/Template";

function Barberplus() {
  return (
    <>
      <Template
        titre="BARBER PLUS"
        description="Le site que j'ai créé pour le barber shop est une plateforme simple mais efficace. Il met en avant les différents réseaux sociaux du barber shop, tels que Snapchat, Instagram, TikTok et Google My Business. À travers des boutons clairement affichés, les visiteurs peuvent facilement accéder aux profils du barber shop sur ces plateformes. Cela leur permet de suivre les dernières mises à jour, promotions, créations et tendances du salon. Cette approche directe offre aux clients une manière pratique de se connecter et d'interagir avec le barber shop sur les réseaux sociaux de leur choix, leur offrant ainsi une expérience interactive et les tenant informés des dernières actualités du salon."
        lien="https://barber-plus.vercel.app/"
      />
    </>
  );
}

export default Barberplus;
