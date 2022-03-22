import Seo from "../components/Seo";
// import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../context/context";
import styles from "../styles/Contents.module.css";

export default function Skills() {
  const { prefix } = useContext(UserContext);
  const skillsFront = [
    { id: 1, fileName: "html.svg", name: "HTML" },
    { id: 2, fileName: "css.svg", name: "CSS" },
    { id: 3, fileName: "javascript.svg", name: "JAVASCRIPT" },
    { id: 4, fileName: "typescript.svg", name: "TYPESCRIPT" },
    { id: 5, fileName: "react.svg", name: "REACT JS" },
    { id: 6, fileName: "bootstrap.svg", name: "BOOTSTRAP" },
    { id: 7, fileName: "sass.svg", name: "SASS" },
    { id: 8, fileName: "next.svg", name: "NEXT JS" },
  ];
  const skillsEtc = [
    { id: 1, fileName: "git.svg", name: "GIT" },
    { id: 2, fileName: "illustrator.svg", name: "ILLUSTRATOR" },
    { id: 3, fileName: "photoshop.svg", name: "PHOTOSHOP" },
    { id: 4, fileName: "premiere.png", name: "PREMIERE" },
    { id: 5, fileName: "aftereffect.png", name: "AFTER EFFECT" },
    // /{ id: 6, fileName: "arduino.svg", name: "ARDUINO" },
  ];
  const Skill = ({ fileName, name }) => {
    return (
      <div className={styles.skill}>
        <img
          src={`${prefix}/images/skills/${fileName}`}
          width="60"
          height="60"
        />
        <span className={styles.skillName}>{name}</span>
      </div>
    );
  };
  return (
    <>
      <Seo title="Skills" />
      <section>
        <div className={styles.title}>Front-End Skills</div>
        <div className={styles.imageContainer}>
          {skillsFront.map((skill) => {
            return (
              <Skill
                key={skill.name}
                name={skill.name}
                fileName={skill.fileName}
              />
            );
          })}
        </div>
        <div className={styles.title}>Etc Skills</div>
        <div className={styles.imageContainer}>
          {skillsEtc.map((skill) => {
            return (
              <Skill
                key={skill.id}
                name={skill.name}
                fileName={skill.fileName}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
