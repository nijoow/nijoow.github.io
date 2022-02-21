import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <container className="container">
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
          background: #4b4173;
        }
        .contents {
          flex: 1;
        }
      `}</style>
    </>
  );
}
