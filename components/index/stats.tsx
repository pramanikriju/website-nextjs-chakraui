import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Icon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
      style={{ backdropFilter: "blur(30px)" }}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box
      maxW="5xl"
      mx={"auto"}
      py={5}
      px={{ base: 2, sm: 12, md: 17 }}
      position="relative"
    >
      <Blob
        w={"100%"}
        h={"100%"}
        position={"absolute"}
        top={"0%"}
        left={0}
        zIndex={-1}
        color={useColorModeValue("cyan.100", "red.600")}
      />
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Reliability, across users and products
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Users"}
          stat={"50,000+"}
          icon={<BsPerson size={"3em"} />}
        />
        <StatsCard
          title={"Clients"}
          stat={"100+"}
          icon={<FiServer size={"3em"} />}
        />
        <StatsCard
          title={"Continents"}
          stat={"4"}
          icon={<GoLocation size={"3em"} />}
        />
      </SimpleGrid>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        And expanding rapidly
      </chakra.h1>
    </Box>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 560 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        //d="M33.1,-27.6C49.4,-16.7,73.7,-8.4,80.4,6.7C87.2,21.8,76.3,43.6,60,48.4C43.6,53.1,21.8,40.7,1.1,39.6C-19.7,38.6,-39.4,48.8,-51.5,44.1C-63.7,39.4,-68.3,19.7,-64.6,3.8C-60.8,-12.2,-48.7,-24.3,-36.5,-35.2C-24.3,-46,-12.2,-55.5,-1.9,-53.6C8.4,-51.7,16.7,-38.4,33.1,-27.6Z"
        fill="currentColor"
        //transform="translate(100 100)"
      />
    </Icon>
  );
};
