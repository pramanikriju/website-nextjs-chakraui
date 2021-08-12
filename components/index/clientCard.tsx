import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import dynamic from "next/dynamic";

interface item {
  id: number;
  name: string;
  img: string;
  description: string;
  url: string;
  technology: string[];
}
interface clientProps {
  item: item;
}

export default function ClientCard(props: clientProps) {
  const item = props.item;
  let bgtagcolor = useColorModeValue("gray.50", "gray.800");
  return (
    <Center py={6}>
      <Box
        border="1px"
        borderColor="cyan.200"
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Box mb={4} pos={"relative"}>
          <Image
            src={item.img}
            alt="Picture of the author"
            //layout="fill"
            //objectFit=""
            height={200}
            width={1000}
          />
        </Box>
        <hr />

        {/* <Avatar
          size={"xl"}
          src={"https://placedog.net/500?random"}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
        /> */}
        <Heading fontSize={"2xl"} fontFamily={"body"} mt={4}>
          {item.name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @lindsey_jam3s
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Actress, musician, songwriter and artist. PM for work inquires or{" "}
          <Link href={"#"} color={"cyan.400"}>
            #tag
          </Link>{" "}
          me in your posts
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          {item.technology.map((tech, i) => {
            <Badge px={2} py={1} bg={bgtagcolor} fontWeight={"400"}>
              {tech} test
            </Badge>;
          })}
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #music
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            Message
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"cyan.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
