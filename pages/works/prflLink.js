import Seo from "../../components/Seo";
import Link from "next/link";
import styles from "../../styles/Contents.module.css";
import Work from "../../components/Work";
export default function Pnudt12() {
  return (
    <>
      <Seo title="Works" />
      <section>
        <div className={styles.title}>
          <Link href="/works">
            <a>Works</a>
          </Link>
          <span className={styles.workTitle}>
            &nbsp;&nbsp;&gt;&nbsp;&nbsp;프로필링크(prfl.link)
          </span>
        </div>
        <div className={styles.workInfomation}>
          <div className={styles.subTitle}>[View]</div>
          <Work url="https://prfl.link/" imgSrc="prflLink.PNG"></Work>

          <br />
          <div className={styles.subTitle}>[Explanation]</div>
          <ul className={styles.infoContents}>
            <li>
              - [담당 업무] <br />
              테마 페이지 디자인 및 퍼블리싱, 로고 제작
            </li>
            <li>
              - [사용 언어] <br />
              CSS / React
            </li>
            {/* <li>
              링크 :&nbsp;
              <a
                href="https://prfl.link/"
                target="_blank"
                rel="noopener noreferrer"
              >
                prfl.link
              </a>
            </li> */}
          </ul>
          <a
            href="https://prfl.link/@nijoow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.btn}>My Page &gt;</button>
          </a>
        </div>
      </section>
    </>
  );
}
