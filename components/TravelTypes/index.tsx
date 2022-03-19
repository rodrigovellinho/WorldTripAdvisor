import styles from "./TravelTypes.module.css";
import Cocktail from "../../assets/cocktail.svg";
import Building from "../../assets/building.svg";
import Earth from "../../assets/earth.svg";
import Museum from "../../assets/museum.svg";
import Surf from "../../assets/surf.svg";
import TravelType from "./TravelType";

function TravelTypes() {
  return (
    <div className={styles.container}>
      <TravelType image={Cocktail} text="vida noturna" />
      <TravelType image={Building} text="praia" />
      <TravelType image={Earth} text="moderno" />
      <TravelType image={Museum} text="clássico" />
      <TravelType image={Surf} text="e mais..." />
    </div>
  );
}

export default TravelTypes;
