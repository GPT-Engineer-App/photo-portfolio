import React, { useState } from "react";
import { Box, Container, FormControl, FormLabel, Input, Button, Image, Text } from "@chakra-ui/react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
   
    if (selectedFile) {
      setUploadedPhotos([...uploadedPhotos, URL.createObjectURL(selectedFile)]);
      setSelectedFile(null);
    }
  };

  return (
    <Box py={8}>
      <Container maxW="container.lg">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Select a photo to upload</FormLabel>
            <Input type="file" onChange={handleFileChange} />
          </FormControl>
          <Button mt={4} colorScheme="blue" type="submit">
            Upload
          </Button>
        </form>

        {uploadedPhotos.length > 0 && (
          <Box mt={8}>
            <Text fontSize="xl" mb={4}>Uploaded Photos:</Text>
            {uploadedPhotos.map((photo, index) => (
              <Image key={index} src={photo} alt={`Uploaded Photo ${index + 1}`} mb={4} />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Upload;