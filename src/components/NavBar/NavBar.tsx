import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchBox from "./SearchBox";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="14px">
      <Image src={logo} boxSize="50px"></Image>
      <SearchBox
        onSearch={(searchText) => {
          onSearch(searchText);
        }}
      />
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
