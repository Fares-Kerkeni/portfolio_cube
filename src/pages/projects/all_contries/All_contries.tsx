import style from "./all_contries.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import Template from "../template_project/Template";

function All_contries() {
  return (
    <>
      <Template
        titre="ALL CONTRIES"
        description="Le site que j'ai créé est une plateforme interactive
                  présentant une collection de drapeaux de pays. Lorsque vous
                  parcourez les drapeaux, en passant la souris dessus, vous
                  obtenez des informations telles que la population et la
                  capitale du pays correspondant. Le site propose également des
                  boutons pour filtrer les drapeaux par continent et ajuster le
                  nombre de drapeaux affichés à la fois. Cela permet aux
                  utilisateurs de sélectionner les drapeaux en fonction de leurs
                  intérêts et de naviguer facilement à travers les différentes
                  régions du monde. Dans l'ensemble, le site offre une
                  expérience interactive pour découvrir les drapeaux, les
                  populations et les capitales des pays à travers le monde."
        lien="https://the-jungle.vercel.app/"
      />
    </>
  );
}

export default All_contries;
