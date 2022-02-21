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
  BsFillGeoAltFill,
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
            안녕하세요, 신입 프론트엔드 개발자 <span>이우진</span>입니다.
          </div>
        </div>
      </section>
      <section>
        <div className={styles.subTitle}>
          <span className={styles.underLine}>Information</span>
        </div>
        <div className={styles.contents}>
          <div className={styles.inforTitle}>
            <BsPersonCircle />
            이름
          </div>{" "}
          : 이우진
        </div>
        <div className={styles.contents}>
          <div className={styles.inforTitle}>
            <BsFillCalendarEventFill />
            생년월일
          </div>{" "}
          : 1996.11.27
        </div>
        <div className={styles.contents}>
          <div className={styles.inforTitle}>
            <BsFillGeoAltFill />
            주소지
          </div>{" "}
          : 부산광역시 동래구
        </div>
        <div className={styles.contents}>
          <div className={styles.inforTitle}>
            <BsFillEnvelopeFill />
            이메일
          </div>{" "}
          : nijoow1127@gmail.com
        </div>
        <div className={styles.contents}>
          <div className={styles.inforTitle}>
            <BsFillPencilFill />
            학력
          </div>{" "}
          : 부산대학교 디자인학과 디자인앤테크놀로지전공
        </div>
      </section>
    </div>
  );
}
