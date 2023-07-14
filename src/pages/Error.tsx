import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Center>
        <VStack>
          <Heading>Ooops...</Heading>
          <Text>
            {isRouteErrorResponse(error)
              ? "This page does not exist."
              : "An unexpected error occured."}
          </Text>
        </VStack>
      </Center>
    </>
  );
};

export default Error;
