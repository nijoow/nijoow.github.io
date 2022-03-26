import NavBar from "./NavBar";
import Footer from "./Footer";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "../components/Lights";
import Nijoow from "../components/Nijoow";
import { useContext } from "react";
import { UserContext } from "../context/context";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const { currentTheme } = useContext(UserContext);
  const router = useRouter();
  return (
    <>
      <NavBar />
      <container className={`container ${currentTheme}`}>
        <div>
          <Canvas
            colorManagement
            camera={{ position: [0, 0, 1], fov: 70 }}
            className="canvas"
          >
            <OrbitControls maxDistance={2} minDistance={0.9} />
            <Lights />
            <Suspense fallback={null} r3f>
              <Nijoow />
            </Suspense>
          </Canvas>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="contents"
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear" }}
            key={router.route}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </container>
      <Footer />
    </>
  );
}
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -20 },
};
