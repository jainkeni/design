import { Container, Flex, Box, Image, Text, Input } from "@chakra-ui/react";

const Demo = () => {
  return (
    <Flex p="8">
      <Container
        className="w-1/6 h-24 rounded-xl bg-white text-black"
        border="1px solid #e2e8f0"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box textAlign="center">
          <Image src="/narayana-logo.png"/>
          <Text fontFamily="Poppins" fontSize="2xl" >NARAYANA</Text>
          <Text fontFamily="Poppins" fontSize="sm" letterSpacing="4px" mt="-2">NETHRALAYA</Text>
        </Box> 
      </Container>

      <Container
        className="w-4/5 h-24 rounded-xl bg-white text-black"
        border="1px solid #e2e8f0"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding={4}
      >
        <Box>
            <Text fontSize="3xl" fontWeight="bold">Narayana Eye Hospital</Text>
        </Box>
        <Box>
        <Input 
        type="text" 
        placeholder="Search" 
        bg="white" 
        px={3} 
        py={1} 
        focusBorderColor="#99c7e0" 
        _placeholder={{
          textDecoration: 'underline', 
          textDecorationColor: 'gray.400' 
        }} 
        />
        </Box>
        <Box>
            <Text fontFamily="heading" fontWeight="medium" fontSize="large" mr={2}>Admin</Text>
            <Text fontFamily="heading" fontSize="sm" letterSpacing="1px" mr={20}>hello@samwhitaker.com</Text>
        </Box>
      </Container>
    </Flex>
  );
};

export default Demo;