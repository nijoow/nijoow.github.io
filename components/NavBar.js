import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../context/context";
export default function NavBar() {
  const router = useRouter();
  const { currentTheme, dispatch } = useContext(UserContext);

  const toggleTheme = () => {
    dispatch({ type: "toggleTheme" });
  };
  return (
    <nav className={`${styles.nav} ${currentTheme}`}>
      <div className={styles.navBar}>
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <div className={styles.logoImg}>
                <Logo
                  width={80}
                  height={50}
                  fill={currentTheme === "dark" ? "#fff" : "#443483"}
                  stroke={currentTheme === "dark" ? "#fff" : "#443483"}
                />
              </div>
              <span>&apos;S PORTPOLIO</span>
            </div>
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>
                <span
                  className={`
                  ${router.pathname === "/" ? styles.active : ""}
                  ${styles.angledGradient} ${styles.underLine}`}
                >
                  About
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <a>
                <span
                  className={`
                  ${router.pathname === "/skills" ? styles.active : ""}
                  ${styles.angledGradient} ${styles.underLine}`}
                >
                  Skills
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a>
                <span
                  className={`
                  ${router.pathname.includes("/works") ? styles.active : ""}
                  ${styles.angledGradient} ${styles.underLine}`}
                >
                  Works
                </span>
              </a>
            </Link>
          </li>
          <div className={styles.darkModeBtnContainer}>
            <button className={styles.darkModeBtn} onClick={toggleTheme}>
              {currentTheme === "dark" ? (
                <MdWbSunny className={styles.darkModeIcon} />
              ) : (
                <MdDarkMode className={styles.darkModeIcon} />
              )}
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
}
