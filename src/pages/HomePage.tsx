import { Grid, Show, GridItem, HStack, Box } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import GamesGrid from "../components/GamesGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
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
};

export default HomePage;
