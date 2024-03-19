import Image from "next/image";
import styles from "./banner.module.css";

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
};

const Banner = (props) => {
  const { headerText } = props;

  return (
    <header className="row mb-4">
      <div className="col-5">
        <Image className={styles.logo} src="/generic.jpg" alt="logo" width="200" height="200"/>
      </div>
      <div className="col-7 mt-5" style={subtitleStyle}>
        { headerText }
      </div>
    </header>
  )
};

export default Banner;
