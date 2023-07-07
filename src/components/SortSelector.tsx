import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortItems = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const setSelectedSortValue = useGameQueryStore(
    (selector) => selector.setSortBy
  );

  const selectedSortValue = useGameQueryStore(
    (selector) => selector.gameQuery.sortBy
  );

  const selectedSortItem = sortItems.find(
    (item) => item.value === selectedSortValue
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {selectedSortItem?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortItems.map((item, i) => (
          <MenuItem
            fontWeight={selectedSortValue === item.value ? "bold" : "normal"}
            color={selectedSortValue === item.value ? "#b994eb" : ""}
            onClick={() => setSelectedSortValue(item.value)}
            key={i}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
