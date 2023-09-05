import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>

      <VStack w={'full'} alignItems={['center', 'flex-start']}>
        <Text fontWeight={'bold'}>About Us</Text>
        <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center', 'left']}>Know information about you favourite crypto</Text>
      </VStack>
      <VStack>
         <a href="https://www.linkedin.com/in/momin-aouf/" target="blank"><Avatar boxSize={'28'} mt={['4','0']}/></a>
        <Text>Momin Aouf</Text>
      </VStack>

      </Stack>
    </Box>
  );
};

export default Footer;
