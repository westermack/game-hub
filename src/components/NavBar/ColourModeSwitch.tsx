import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColourModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="purple"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>{colorMode === "dark" ? "Dark" : "Light"} Mode</Text>
    </HStack>
  );
};

export default ColourModeSwitch;
