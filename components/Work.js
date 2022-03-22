import { useContext } from "react";
import { UserContext } from "../context/context";
import styles from "../styles/Contents.module.css";
// pageName="pnudt12"
// name="MEMORY"
// url="https://nijoow.github.io/PNUDT12/"
// imgSrc="pnudt12.png"
const Work = ({ url, imgSrc }) => {
  const { prefix } = useContext(UserContext);

  return (
    <div className={styles.card}>
      <img
        src={`${prefix}/images/works/${imgSrc}`}
        width="768"
        height="432"
        className={styles.cardImg}
      ></img>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className={styles.cardOverlay}>
          <span>사이트 바로가기 &gt;</span>
        </div>
      </a>
    </div>
  );
};
export default Work;
