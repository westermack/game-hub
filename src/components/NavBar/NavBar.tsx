import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchBox from "./SearchBox";

const NavBar = () => {
  return (
    <HStack padding="14px">
      <Image src={logo} boxSize="50px"></Image>
      <SearchBox />
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
