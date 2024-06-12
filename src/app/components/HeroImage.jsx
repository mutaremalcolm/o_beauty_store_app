import Image from "next/image";  

const HeroImage = ({ containerStyles, imgSrc }) => {
  return (
    <div className={containerStyles}>
      <Image src={imgSrc} layout="fill" priority alt="Hero Image"/>
    </div>
  );
}

export default HeroImage;
