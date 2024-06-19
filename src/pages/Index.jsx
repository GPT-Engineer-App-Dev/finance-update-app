import { Box, Container, Heading, VStack, Text, SimpleGrid, GridItem, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" mb={4}>Financial News</Heading>
          <Text fontSize="lg">Your source for the latest financial news and market data.</Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="xl" mb={4}>Top News</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Top News Article 1</Heading>
                <Text mt={2}>Summary of the top news article 1...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Top News Article 2</Heading>
                <Text mt={2}>Summary of the top news article 2...</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="xl" mb={4}>Market Data</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Market Data 1</Heading>
                <Text mt={2}>Details of market data 1...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Market Data 2</Heading>
                <Text mt={2}>Details of market data 2...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Market Data 3</Heading>
                <Text mt={2}>Details of market data 3...</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="xl" mb={4}>Latest Articles</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Latest Article 1</Heading>
                <Text mt={2}>Summary of the latest article 1...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Latest Article 2</Heading>
                <Text mt={2}>Summary of the latest article 2...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Latest Article 3</Heading>
                <Text mt={2}>Summary of the latest article 3...</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;