import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameHeading from "./components/GameHeading";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} marginTop="18px">
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={4}>
          <GameHeading />
          <HStack spacing={4} marginBottom={3}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
