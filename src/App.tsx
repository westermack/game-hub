import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform, Sort } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortBy: Sort;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(searchText) => {
            console.log(searchText);
            setGameQuery({ ...gameQuery, searchText });
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} marginTop="18px">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={4}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={4} marginBottom={3}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              selectedSort={gameQuery.sortBy}
              onSelectSortOrder={(sortBy) => {
                setGameQuery({ ...gameQuery, sortBy });
              }}
            />
          </HStack>
        </Box>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
