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
            &nbsp;&nbsp;&gt;&nbsp;&nbsp;MEMORY
          </span>
        </div>
        <div className={styles.workInfomation}>
          <div className={styles.subTitle}>[View]</div>
          <Work
            url="https://nijoow.github.io/PNUDT12/"
            imgSrc="pnudt12.png"
          ></Work>
          <br />
          <div className={styles.subTitle}>[Explanation]</div>
          <ul className={styles.infoContents}>
            <li>
              부산대학교 디자인학과 디자인엔테크놀로지 전공 12회 졸업전시회
              웹사이트
            </li>
            <li>
              [주요 기능] <br />- 졸업전시회 소개 및 전시회 정보
              <br />
              - 컨셉 및 작품 설명
              <br />
              - 작품 시연 영상 링크
              <br />
              - 오프닝 영상 및 메이킹 영상
              <br />
            </li>
            <li>
              [기술 스택] <br />- HTML, CSS, Javascript
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
