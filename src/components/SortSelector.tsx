import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Sort } from "../hooks/useGames";

interface Props {
  onSelectSortOrder: (sortOrder: Sort) => void;
  selectedSort: Sort;
}

const SortSelector = ({ onSelectSortOrder, selectedSort }: Props) => {
  const sortItems = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {selectedSort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortItems.map((sortOrder, i) => (
          <MenuItem
            fontWeight={
              selectedSort?.value === sortOrder.value ||
              (!selectedSort && sortOrder.value === "")
                ? "bold"
                : "normal"
            }
            color={
              selectedSort?.value === sortOrder.value ||
              (!selectedSort && sortOrder.value === "")
                ? "#b994eb"
                : ""
            }
            onClick={() => onSelectSortOrder(sortOrder)}
            key={i}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
