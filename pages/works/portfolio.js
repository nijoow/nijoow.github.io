import Seo from "../../components/Seo";
import Link from "next/link";
import styles from "../../styles/Contents.module.css";
import Work from "../../components/Work";
import { BsGithub } from "react-icons/bs";
export default function portfolio() {
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
          <Work url="https://nijoow.github.io/" imgSrc="portfolio.PNG"></Work>

          <br />
          <div className={styles.subTitle}>[Explanation]</div>
          <ul className={styles.infoContents}>
            <li>
              <span className={styles.bold}> 개인 포트폴리오 사이트</span>
              <br />- 저에 대한 소개와 경험했던 프로젝트를 모아놓은 포트폴리오
              사이트입니다.
              <br />- 다양한 기능을 추가해보며 업데이트하고 있습니다.
            </li>
            <li>
              <span className={styles.bold}>[주요 기능]</span>
              <br />
              Next.js 프레임워크를 사용한 Single Page Application
              <br />
              - 다양한 동적 요소를 활용한 페이지 구현
              <br />
              - 반응형 CSS 마크업
              <br />
              - 시스템 테마에 따른 다크모드 및 토글 기능
              <br />
              - canvas와 three.js를 사용하여 blender로 제작한 3D 로고 오브젝트
              렌더링
              <br />- Spotify API를 사용하여 최근에 들은 음악 소개
            </li>
            <li>
              <span className={styles.bold}>[기술 스택]</span>
              <br />- React / Next.js / SASS / three.js
            </li>
            <li></li>
          </ul>
          <a
            href="https://github.com/nijoow/nijoow.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.btn}>
              <BsGithub />
              &nbsp; Github
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
