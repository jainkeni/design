import { Container, Flex, Box, Image, Text, Input} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";


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
        
        <Box 
          display="flex" 
          alignItems="center" 
          position="relative" 
          borderBottom="2px solid"
          borderColor="gray.300"
          pb="1"
          >
          <Input
            type="text"
            fontSize="2xl"
            placeholder="Search"
            bg="white"
            px={14} 
            py={2}
            _placeholder={{
              color: "gray.300",
            }}
          />
          <CiSearch
            className="text-gray-300 text-4xl"
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </Box>


        <Box textAlign="right" mr="24">
            <Text fontFamily="heading" fontWeight="medium" fontSize="large"  >Admin</Text>
            <Text fontFamily="heading" fontSize="sm" letterSpacing="1px">hello@samwhitaker.com</Text>
        </Box>
      </Container>
    </Flex>
  );
};

export default Demo;