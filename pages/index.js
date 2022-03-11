import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "../components/Lights";
import Nijoow from "../components/Nijoow";
import { useState } from "react";
import {
  BsPersonCircle,
  BsFillCalendarEventFill,
  BsGithub,
  BsFillEnvelopeFill,
  BsFillPencilFill,
} from "react-icons/Bs";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <Seo title="Home" />
      <section>
        <Canvas
          colorManagement
          camera={{ position: [0, 0, 1], fov: 70 }}
          className={styles.canvas}
        >
          <OrbitControls />
          <Lights />
          <Nijoow />
        </Canvas>
      </section>
      <section>
        <div className={styles.introbox}>
          <div className={styles.intro}>
            반갑습니다🖐🏻 신입 프론트엔드 개발자 <span>이우진</span>입니다.
          </div>
        </div>
      </section>
      {/* <section>
        <div className={styles.name}>Hello🖐🏻 I'm LEE WOOJIN</div>
      </section> */}
      <section>
        <div className={styles.title}>Infomation</div>
        <div className={styles.infomation}>
          <div className={styles.subTitle}>
            <BsPersonCircle className={styles.icon} />
            <span>이름</span>
          </div>
          <div className={styles.contents}>이우진</div>
        </div>
        <div className={styles.infomation}>
          <div className={styles.subTitle}>
            <BsFillCalendarEventFill className={styles.icon} />
            <span>생년월일</span>
          </div>
          <div className={styles.contents}>1996.11.27</div>
        </div>
        <div className={styles.infomation}>
          <div className={styles.subTitle}>
            <BsFillPencilFill className={styles.icon} />
            <span>학력</span>
          </div>
          <div className={styles.contents}>
            부산대학교 디자인학과 디자인앤테크놀로지전공
          </div>
        </div>
        <div className={styles.infomation}>
          <div className={styles.subTitle}>
            <BsFillEnvelopeFill className={styles.icon} />
            <span>이메일</span>
          </div>
          <div className={styles.contents}>nijoow1127@gmail.com</div>
        </div>
        <div className={styles.infomation}>
          <div className={styles.subTitle}>
            <BsGithub className={styles.icon} />
            <span>깃허브</span>
          </div>
          <div className={styles.contents}>
            <a href="https://github.com/nijoow">@nijoow</a>
          </div>
        </div>
      </section>
    </div>
  );
}
