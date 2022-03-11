const Footer = () => {
  return (
    <footer className="footer">
      <div>
        &copy; {new Date().getFullYear()} Lee Woo Jin. All Rights Reserved.
      </div>
      <style jsx>{`
        .footer {
          width: 100%;
          padding: 40px 0 20px 0;
        }
        .footer div {
          text-align: center;
          margin: auto;
          color: #ddd;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
