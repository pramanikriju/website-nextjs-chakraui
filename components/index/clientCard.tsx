import {
  Heading,
  Flex,
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
import { ImLocation } from "react-icons/im";
import item from "../../types/client";

interface ClientProps {
  item: item;
}

export default function ClientCard(props: ClientProps) {
  const client = props.item;
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
        <Flex
          mb={4}
          pos={"relative"}
          className="unset-img"
          align="center"
          justify="center"
          minHeight="100px"
        >
          <Image
            src={client.img}
            alt="Picture of the author"
            layout="fill"
            className="custom-img"
          />
        </Flex>
        <hr />

        {/* <Avatar
          size={"xl"}
          src={"https://placedog.net/500?random"}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
        /> */}
        <Heading fontSize={"2xl"} fontFamily={"body"} mt={6} isTruncated>
          {client.name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {client.rel ?? "Technical Consultant"}
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
          {client.technology.map((tech, i) => (
            <Badge px={2} py={1} bg={bgtagcolor} fontWeight={"400"} key={i}>
              #{tech}
            </Badge>
          ))}
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
            leftIcon={<ImLocation />}
          >
            {client.location ?? "Kolkata, IN"}
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
