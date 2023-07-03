import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.svg";
import thumbsUp from "../assets/thumbs-up.svg";
import meh from "../assets/meh.svg";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "29px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "35px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "30px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
