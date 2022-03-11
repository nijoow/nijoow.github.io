import Seo from "../components/Seo";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Skills() {
  const skillsFront = [
    { fileName: "html.svg", name: "HTML" },
    { fileName: "css.svg", name: "CSS" },
    { fileName: "javascript.svg", name: "JAVASCRIPT" },
    { fileName: "typescript.svg", name: "TYPESCRIPT" },
    { fileName: "react.svg", name: "REACT JS" },
    { fileName: "bootstrap.svg", name: "BOOTSTRAP" },
    { fileName: "sass.svg", name: "SASS" },
    { fileName: "next.svg", name: "NEXT JS" },
  ];
  const skillsEtc = [
    { fileName: "git.svg", name: "GIT" },
    { fileName: "illustrator.svg", name: "ILLUSTRATOR" },
    { fileName: "photoshop.svg", name: "PHOTOSHOP" },
    { fileName: "premiere.png", name: "PREMIERE" },
    { fileName: "aftereffect.png", name: "AFTER EFFECT" },
    { fileName: "arduino.svg", name: "ARDUINO" },
  ];
  const Skill = ({ fileName, name }) => {
    return (
      <div className="skill">
        <Image src={"/images/" + fileName} width="60" height="60" />
        <span className="skillName">{name}</span>
        <style jsx>{`
          .skill {
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease-out;
            color: #ddd;
          }
          .skill:hover {
            transform: scale(1.1);
          }
          .skillName {
            transition: all 0.3s ease-out;

            opacity: 0;
          }
          .skill:hover .skillName {
            transition: all 0.3s ease-out;

            opacity: 1;
          }
        `}</style>
      </div>
    );
  };
  return (
    <>
      <Seo title="Skills" />
      <section>
        <div className={styles.title}>Front-End</div>
        <div className="imageContainer">
          {skillsFront.map((skill) => {
            console.log(skill);
            return <Skill name={skill.name} fileName={skill.fileName} />;
          })}
        </div>
        <div className={styles.title}>Etc</div>
        <div className="imageContainer">
          {skillsEtc.map((skill) => {
            return <Skill name={skill.name} fileName={skill.fileName} />;
          })}
        </div>
      </section>
      <style jsx>{`
        .imageContainer {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          width: 100%;
          align-items: center;
          padding: 40px 0 20px 0;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
