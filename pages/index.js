import Seo from "../components/Seo";
import styles from "../styles/Contents.module.css";
import Information from "../components/Information";
import { useEffect, useState, useRef, useContext } from "react";
import {
  BsPersonCircle,
  BsFillCalendarEventFill,
  BsGithub,
  BsFillEnvelopeFill,
  BsFillPencilFill,
  BsLink45Deg,
} from "react-icons/Bs";
import { GiBasketballBall, GiMusicalNotes } from "react-icons/Gi";
import { UserContext } from "../context/context";
export default function Home() {
  const [song, setSong] = useState({});
  const { dispatch, prefix } = useContext(UserContext);

  useEffect(async () => {
    try {
      const response = await fetch(`${prefix}/api/nowPlaying`);

      setSong(await response.json());
      dispatch({ type: "setSong", value: song });
    } catch (e) {
      console.log(e);
    }
  }, []);
  const { albumImageUrl, artist, songUrl, title } = song;

  return (
    <div>
      <Seo title="Home" />
      <section>
        <div className={styles.introbox}>
          <div className={styles.intro}>
            반갑습니다🖐🏻 신입 프론트엔드 개발자 <span>이우진</span>입니다.
          </div>
        </div>
      </section>
      <section>
        <ul className={styles.introContents}>
          <li>
            부산대학교 디자인학과 디자인앤테크놀로지 전공에서 디자인과
            프로그래밍을 학습하였습니다.
          </li>
          <li>
            스타트업 기업에서의 현장 실습을 통해 웹개발에 관심을 가지게
            되었습니다.
          </li>
          <li>
            눈으로 보이는 결과물을 직접 완성해내는 것에 흥미를 느껴 프론트엔드
            개발자의 꿈을 키우게 되었고, 실력 있는 개발자가 되기 위해 고민하고
            학습하는 중입니다.
          </li>
          <li>
            부족한 부분이 있더라도 항상 배우고 습득하려는 태도를 가지려고
            노력하는 중입니다.
          </li>
        </ul>
      </section>
      <section>
        <div className={styles.title}>Infomation</div>
        <Information Icon={BsPersonCircle} list="이름" contents=": 이우진" />
        <Information
          Icon={BsFillCalendarEventFill}
          list="생년월일"
          contents=": 1996.11.27"
        />
        <Information
          Icon={BsFillPencilFill}
          list="학력"
          contents=": 부산대학교 디자인학과 디자인앤테크놀로지전공"
        />
        <Information
          Icon={BsFillEnvelopeFill}
          list="이메일"
          contents=": nijoow1127@gmail.com"
        />
        <Information
          Icon={BsGithub}
          list="깃허브"
          contents=": @nijoow"
          link="https://github.com/nijoow"
        />
        <Information
          Icon={BsLink45Deg}
          list="프로필링크"
          contents=": @nijoow"
          link="https://prfl.link/@nijoow"
        />
      </section>
      <section>
        <div className={styles.title}>Interest</div>
        {/* <div className={styles.interest}>
          <GiMusicalNotes />
          음악, 힙합, <GiBasketballBall />
          농구
        </div> */}
        <a href={songUrl} target="_blank" rel="noopener noreferrer">
          <div className={styles.song}>
            <div className={styles.songAlbumImage}>
              <img src={albumImageUrl} width="130" height="130"></img>
            </div>
            <div className={styles.songInfo}>
              <div className={styles.songTitle}>{title}</div>
              <div className={styles.songArtist}>{artist}</div>
            </div>
          </div>
        </a>
      </section>
    </div>
  );
}
