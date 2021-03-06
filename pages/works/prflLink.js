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
              <span className={styles.bold}>프로필링크(prfl.link)</span>
              <br /> - 여러 홈페이지 주소와 작업물 등을 한 눈에 볼 수 있는
              멀티링크 연결 서비스
              <br /> - 스타트업 기업에서의 현장실습 기간에 참여한 프로젝트
            </li>
            <li>
              <span className={styles.bold}> [담당 업무]</span>
              <br />- 서비스 내 테마 페이지 디자인 <br />
              - svg를 활용한 테마 페이지 퍼블리싱
              <br />- 프로필링크 로고 제작
            </li>
            <li>
              <span className={styles.bold}> [기술 스택]</span> <br />- CSS /
              React
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
