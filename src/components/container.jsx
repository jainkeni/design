import { Container, Flex, Box, Image, Text, Input} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";


const Demo = () => {
  return (
    <Flex className="flex-col md:flex-row p-8">
      <Container
        className="flex w-1/2 md:-ml-2 lg:w-72 lg:ml-4 h-24 md:h-28 sm:h-32 rounded-xl bg-white text-black"
        border="1px solid #e2e8f0"
        alignItems="center"
        justifyContent="center"
      >
        <Box textAlign="center">
          <Image src="/narayana-logo.png"/>
          <Text fontFamily="Poppins" className="lg:text-3xl text-2xl" >NARAYANA</Text>
          <Text fontFamily="Poppins" className="text-sm lg:text-lg tracking-[4px] lg:tracking-[5px] lg:ml-1 -mt-2">NETHRALAYA</Text>
        </Box> 
      </Container>

      <Container
        className="flex h-28 rounded-xl bg-white text-black sm:w-24 md:w-3/4 md:h-28 md:ml-2 flex-col xl:flex-row mt-4 md:mt-0 p-4 lg:ml-4 lg:mr-4"
        border="1px solid #e2e8f0"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
            <Text className="text-3xl md:-mt-2 font-bold">Narayana Eye Hospital</Text>
        </Box>
        
        <div className="flex ml-20 mt-2 lg:ml-4 lg:-mr-8">
          <Box className="flex relative pb-1 w-36 md:w-64 lg:w-72"
            position="relative" 
            borderBottom="1px solid"
            borderColor="gray.300"
            >
            <Input className="lg:text-2xl text-xl lg:px-14 px-10 pt-2"
              placeholder="Search"
              _placeholder={{
                color: "gray.300",  
              }}
            />
            <CiSearch
              className="text-gray-300 lg:text-4xl text-3xl"
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </Box>

          <Box className="text-right mr-20 ml-8 lg:ml-20">
              <Text className="font-medium text-lg" fontFamily="heading"  >Admin</Text>
              <Text fontFamily="heading" className="text-sm tracking-[1px]" >hello@samwhitaker.com</Text>
          </Box>
       </div>
      </Container>
    </Flex>
  );
};

export default Demo;