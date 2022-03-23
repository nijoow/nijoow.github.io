import Seo from "../../components/Seo";
import Link from "next/link";
import styles from "../../styles/Contents.module.css";
import Work from "../../components/Work";
export default function PortPolio() {
  return (
    <>
      <Seo title="Works" />
      <section>
        <div className={styles.title}>
          <Link href="/works">
            <a>Works</a>
          </Link>
          <span className={styles.workTitle}>
            &nbsp;&nbsp;&gt;&nbsp;&nbsp;포트폴리오 사이트
          </span>
        </div>
        <div className={styles.workInfomation}>
          <div className={styles.subTitle}>[View]</div>
          <Work url="https://nijoow.github.io/" imgSrc="portpolio.PNG"></Work>

          <br />
          <div className={styles.subTitle}>[Explanation]</div>
          <ul className={styles.infoContents}>
            <li>포트폴리오 사이트</li>
            <li>
              [주요 기능] <br />
              - 포트폴리오 소개 및 링크
              <br />
              - 다양한 transition을 추가한 CSS 요소
              <br />
              - 시스템 테마에 따른 다크모드 및 토글
              <br />
              - three.js를 사용한 3D 오브젝트 렌더링
              <br />- Spotify API를 사용해서 최근에 들은 음악 소개
            </li>
            <li>
              [기술 스택]
              <br />- React / Next.js / SASS / three.js
            </li>
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
