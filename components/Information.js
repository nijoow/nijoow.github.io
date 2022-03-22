import styles from "../styles/Contents.module.css";
import { BsFillForwardFill } from "react-icons/Bs";
export default function Information({ Icon, list, contents, link = null }) {
  return (
    <div className={styles.infomation}>
      <div className={styles.subTitle}>
        {Icon ? <Icon className={styles.icon} /> : ""}
        <span>{list}</span>
      </div>
      <div className={styles.infoContents}>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {contents}
          </a>
        ) : (
          contents
        )}
      </div>
    </div>
  );
}
