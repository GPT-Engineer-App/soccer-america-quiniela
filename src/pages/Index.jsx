import React, { useState } from "react";
import { Box, Heading, Container, VStack, SimpleGrid, Text, Input, Button, useToast, FormControl, FormLabel } from "@chakra-ui/react";
import { FaFutbol } from "react-icons/fa";

const Match = ({ homeTeam, awayTeam, onResultSubmit }) => {
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");

  const handleSubmit = () => {
    onResultSubmit(homeTeam, awayTeam, homeScore, awayScore);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <SimpleGrid columns={3} spacing={4} alignItems="center">
        <Text fontWeight="bold">{homeTeam}</Text>
        <VStack>
          <FormControl>
            <FormLabel>Home Score</FormLabel>
            <Input type="number" value={homeScore} onChange={(e) => setHomeScore(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Away Score</FormLabel>
            <Input type="number" value={awayScore} onChange={(e) => setAwayScore(e.target.value)} />
          </FormControl>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Submit
          </Button>
        </VStack>
        <Text fontWeight="bold">{awayTeam}</Text>
      </SimpleGrid>
    </Box>
  );
};

const Index = () => {
  const toast = useToast();

  // This should be replaced with actual match data and logic to submit results.
  const matches = [
    { homeTeam: "Argentina", awayTeam: "Brazil" },
    { homeTeam: "Chile", awayTeam: "Uruguay" },
    // ... other matches
  ];

  const handleResultSubmit = (homeTeam, awayTeam, homeScore, awayScore) => {
    toast({
      title: "Result submitted.",
      description: `${homeTeam} ${homeScore} - ${awayScore} ${awayTeam}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Here you would handle the result submission, e.g., saving it to a database.
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Copa América Quiniela <FaFutbol />
        </Heading>
        <VStack spacing={4} align="stretch">
          {matches.map((match, idx) => (
            <Match key={idx} homeTeam={match.homeTeam} awayTeam={match.awayTeam} onResultSubmit={handleResultSubmit} />
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
