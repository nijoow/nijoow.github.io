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
            &nbsp;&nbsp;&gt;&nbsp;&nbsp;Catch The Candy
          </span>
        </div>

        <div className={styles.workInfomation}>
          <div className={styles.subTitle}>[View] </div>

          <Work
            url="https://nijoow.github.io/CatchTheCandy_p5/"
            imgSrc="catchTheCandy.PNG"
          ></Work>
          <br />
          <div className={styles.subTitle}>[Explanation]</div>
          <ul className={styles.infoContents}>
            <li>🍬Catch the candy (졸업전시회 팀 인터랙티브아트 p5.js ver.)</li>
            <li>
              [컨셉] Bias <br />- 바구니를 선택하면 게임은 시작된다. 높은 점수를
              얻기 위해 이리저리 움직이며 떨어지는 사탕들을 받아보자. 게임에
              온전히 몰입하고 빠져들어보는 것이다. 다양한 사탕을 제대로 받고
              있는 것이 맞을까? 예상과는 다른 결과가 나올지도 모른다.
            </li>
            <li>
              [실행 과정] <br />
              &nbsp;1) 빨간색 바구니와 파란색 바구니중 하나를 클릭하면 게임 시작
              <br /> &nbsp;2) 마우스 위치에 따라 바구니가 양옆으로 움직이며
              하늘에서 떨어지는 사탕을 받으며 게임 진행 <br />
              &nbsp;3) 타이머가 끝나고 게임이 종료되면 결과를 확인 <br />
            </li>
            <li>
              [기술 스택] <br />- Javascript (p5.js)
            </li>
            <li>
              [역할] <br />- 게임 기능 개발
            </li>
            <li>
              [시연 영상] (졸업전시회 Processing &amp; Arduino ver.)
              <br />
            </li>
            <a
              href="https://www.youtube.com/watch?v=vcJvQrc6k_w"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.btn}>Link &gt;</button>
            </a>
          </ul>
        </div>
      </section>
    </>
  );
}
