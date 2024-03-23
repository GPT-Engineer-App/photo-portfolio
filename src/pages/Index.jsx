import React from "react";
import { Box, Heading, Text, Image, Grid, GridItem, Container, Stack, Link, Icon } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  const photos = ["https://images.unsplash.com/photo-1603775020644-eb8decd79994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcxMDk4MDk1Nnww&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1604430456280-43f652c497aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTExNjc1ODV8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/flagged/photo-1552981941-424aac2b4311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzExMDU1MzY4fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1599557041284-7e2a15610388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTExNjc1ODV8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1601597565151-70c4020dc0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzExMTY3NTg2fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1579504344957-c09070053c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTExNjc1ODZ8MA&ixlib=rb-4.0.3&q=80&w=1080"];

  return (
    <Box>
      <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Swiistogrophy
          </Heading>
          <Text fontSize="xl" mb={8}>
            Professional Photographer
          </Text>
          <Stack direction="row" spacing={4}>
            <Link href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} w={8} h={8} />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <Icon as={FaTwitter} w={8} h={8} />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <Icon as={FaFacebook} w={8} h={8} />
            </Link>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.lg" py={16}>
        <Heading as="h2" size="xl" mb={8}>
          Portfolio
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {photos.map((photo, index) => (
            <GridItem key={index}>
              <Image src={photo} alt={`Photo ${index + 1}`} borderRadius="md" />
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            About Me
          </Heading>
          <Text fontSize="lg" mb={8}>
            I am a passionate photographer with over 10 years of experience. I specialize in portrait, landscape, and wedding photography. My goal is to capture the beauty and emotion in every moment.
          </Text>
          <Text fontSize="lg">
            For inquiries or bookings, please contact me at{" "}
            <Link href="mailto:john@example.com" color="blue.500">
              john@example.com
            </Link>
            .
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
