import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div style={{
        height:"80vh",
      }}
      animate={{
        translateY:'-20px',
      }}
      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:'reverse',
      }}>
      <Image
        h={"full"}
        w={"full"}
        objectFit={"contain"}
        src={btcSrc}
        filter={"grayscale(1)"}
      />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.600"}
        marginTop={"-20"}
      >
        Know Your Crypto
      </Text>
    </Box>
  );
};

export default Home;
