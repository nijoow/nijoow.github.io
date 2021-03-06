import Seo from "../../components/Seo";
import Link from "next/link";
import styles from "../../styles/Contents.module.css";
import Work from "../../components/Work";
import { BsGithub } from "react-icons/bs";
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
            <li className={styles.bold}>
              π¬Catch the candy (μ‘Έμμ μν ν μΈν°λν°λΈμνΈ p5.js ver.)
            </li>
            <li>
              <span className={styles.bold}>[μ»¨μ] Bias </span>
              <br />- λ°κ΅¬λλ₯Ό μ ννλ©΄ κ²μμ μμλλ€. λμ μ μλ₯Ό μ»κΈ° μν΄
              μ΄λ¦¬μ λ¦¬ μμ§μ΄λ©° λ¨μ΄μ§λ μ¬νλ€μ λ°μλ³΄μ. κ²μμ μ¨μ ν
              λͺ°μνκ³  λΉ μ Έλ€μ΄λ³΄λ κ²μ΄λ€. λ€μν μ¬νμ μ λλ‘ λ°κ³  μλ κ²μ΄
              λ§μκΉ? μμκ³Όλ λ€λ₯Έ κ²°κ³Όκ° λμ¬μ§λ λͺ¨λ₯Έλ€.
            </li>
            <li>
              <span className={styles.bold}>[μ€ν κ³Όμ ] </span>
              <br />
              &nbsp;1) λΉ¨κ°μ λ°κ΅¬λμ νλμ λ°κ΅¬λμ€ νλλ₯Ό ν΄λ¦­νλ©΄ κ²μ μμ
              <br /> &nbsp;2) λ§μ°μ€ μμΉμ λ°λΌ λ°κ΅¬λκ° μμμΌλ‘ μμ§μ΄λ©°
              νλμμ λ¨μ΄μ§λ μ¬νμ λ°μΌλ©° κ²μ μ§ν <br />
              &nbsp;3) νμ΄λ¨Έκ° λλκ³  κ²μμ΄ μ’λ£λλ©΄ κ²°κ³Όλ₯Ό νμΈ <br />
            </li>
            <li>
              <span className={styles.bold}>[κΈ°μ  μ€ν]</span> <br />-
              Javascript (p5.js)
            </li>
            <li>
              <span className={styles.bold}>[νκ΅¬μ±]</span>
              <br />
              μ‘Έμμ μν λ©€λ² 4λͺ (Memoryν)
            </li>
            <li>
              <span className={styles.bold}>[μ­ν ] </span>
              <br />
              - μμ΄λμ΄ λ° μ»¨μ κΈ°ν
              <br />- κ²μ κΈ°λ₯ κ°λ°
            </li>
            <li>
              <span className={styles.bold}>[μμ° μμ] </span>
              <br />
              (μ‘Έμμ μν Processing &amp; Arduino ver.)
              <br />
              <a
                href="https://www.youtube.com/watch?v=vcJvQrc6k_w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.btn}>Link &gt;</button>
              </a>
            </li>
          </ul>
          <a
            href="https://github.com/nijoow/CatchTheCandy_p5"
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
