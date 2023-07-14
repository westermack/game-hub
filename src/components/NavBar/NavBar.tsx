import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="14px">
      <Link to="/">
        <Image src={logo} boxSize="50px" />
      </Link>
      <SearchBox />
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
