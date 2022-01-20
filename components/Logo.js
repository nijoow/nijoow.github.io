import Image from "next/image";

const Logo = () => {
  const logoImg = "/nijoow.svg";
  return <Image src={logoImg} width={80} height={50} alt="logo"></Image>;
};
export default Logo;
