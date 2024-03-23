import { Route, BrowserRouter as Router, Routes, Link as RouterLink } from "react-router-dom";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import Upload from "./pages/Upload.jsx";

function App() {
  return (
    <Router>
      <Box bg="gray.100" py={4}>
        <Flex maxW="container.lg" mx="auto" align="center">
          <Link as={RouterLink} to="/" fontWeight="bold">
            Swiistogrophy
          </Link>
          <Spacer />
          <Link as={RouterLink} to="/upload" ml={4}>
            Upload
          </Link>
        </Flex>
      </Box>

      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
