import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchBox from "./SearchBox";

const NavBar = () => {
  return (
    <HStack padding="12px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchBox />
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
