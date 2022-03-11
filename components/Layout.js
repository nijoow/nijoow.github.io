import NavBar from "./NavBar";
import Footer from "./Footer";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "../components/Lights";
import Nijoow from "../components/Nijoow";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <container className="container">
        <div>
          <Canvas
            colorManagement
            camera={{ position: [0, 0, 1], fov: 70 }}
            className="canvas"
          >
            <OrbitControls />
            <Lights />
            <Suspense fallback={null} r3f>
              <Nijoow />
            </Suspense>
          </Canvas>
        </div>
        <div className="contents">{children}</div>
        <Footer />
      </container>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 100vh;
          padding-top: 50px;
          background: #222;
        }
        .contents {
          flex: 1;
        }
        .canvas {
          background: #222;
        }
      `}</style>
    </>
  );
}
