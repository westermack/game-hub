import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGame";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore(
    (selector) => selector.gameQuery.genreId
  );
  const genre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore(
    (selector) => selector.gameQuery.platformId
  );
  const platform = usePlatform(selectedPlatformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={3} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
