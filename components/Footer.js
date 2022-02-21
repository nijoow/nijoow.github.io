const Footer = () => {
  return (
    <footer className="footer">
      <div>
        &copy; {new Date().getFullYear()} Lee Woo Jin. All Rights Reserved.
      </div>
      <style jsx>{`
        .footer {
          width: 100%;
          padding: 20px;
        }
        .footer div {
          text-align: center;
          margin: auto;
          color: #a69dc9;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
