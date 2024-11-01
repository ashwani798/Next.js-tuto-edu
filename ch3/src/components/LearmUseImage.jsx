import Image from "next/image";
import MyImage from "../../public/images/wolf.png";
const LearnUseImage = () => {
  return (
    <>
      <Image src={MyImage} alt="My Image" width={400} hoght={600} />
    </>
  );
};
export default LearnUseImage;
