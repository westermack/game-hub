import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import ColourModeSwitch from "./ColourModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="12px">
      <Image src={logo} boxSize="60px"></Image>
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
