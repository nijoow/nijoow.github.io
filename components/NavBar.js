import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";
import { MdDarkMode, MdWbSunny } from "react-icons/md";

const isDark = true;
export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.navBar}>
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <div className={styles.logoImg}>
                <Logo width={80} height={50} fill={"#ddd"} stroke={"#ddd"} />
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
                  ${styles.angledGradient}`}
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
                  ${styles.angledGradient}`}
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
                  ${router.pathname === "/works" ? styles.active : ""}
                  ${styles.angledGradient}`}
                >
                  Works
                </span>
              </a>
            </Link>
          </li>
          <div className={styles.darkModeBtnContainer}>
            {isDark ? (
              <button className={styles.darkModeBtn}>
                <MdWbSunny className={styles.darkModeIcon} />
              </button>
            ) : (
              <button className={styles.darkModeBtn}>
                <MdDarkMode className={styles.darkModeIcon} />
              </button>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
}
