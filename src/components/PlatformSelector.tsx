import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(
    (selector) => selector.gameQuery.platformId
  );
  const platform = usePlatform(selectedPlatformId);

  const setSelectedPlatformId = useGameQueryStore(
    (selector) => selector.setPlatformId
  );

  const { data: platforms, error, isLoading } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {isLoading ? <Spinner /> : ""}
        {platforms?.results.map((platform) => (
          <MenuItem
            fontWeight={selectedPlatformId === platform.id ? "bold" : "normal"}
            color={selectedPlatformId === platform.id ? "#b994eb" : ""}
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
