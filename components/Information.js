import styles from "../styles/Home.module.css";

export default function Infomation({ Icon, list, contents }) {
  return (
    <div className={styles.infomation}>
      <div className={styles.subTitle}>
        <Icon className={styles.icon} />
        <span>{list}</span>
      </div>
      <div className={styles.infoContents}>
        {list == "깃허브" ? (
          <a href="https://github.com/nijoow" target="_blank">
            {contents}
          </a>
        ) : (
          contents
        )}
      </div>
    </div>
  );
}
