import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";
export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.navBar}>
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <Logo />
            </div>
            <span>'S PORTPOLIO</span>
          </a>
        </Link>
        <ul>
          <li>
            <div>
              <Link href="/about">
                <a
                  className={`
                  ${router.pathname === "/about" ? styles.active : ""}
                  ${styles.angledGradient}`}
                >
                  About
                </a>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="/skills">
                <a
                  className={`
                  ${router.pathname === "/skills" ? styles.active : ""}
                  ${styles.angledGradient}`}
                >
                  Skills
                </a>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="/works">
                <a
                  className={`
                  ${router.pathname === "/works" ? styles.active : ""}
                  ${styles.angledGradient}`}
                >
                  Works
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
