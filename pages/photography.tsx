import { useState, useEffect } from "react";
import useInView from "react-cool-inview";
import axios from "axios";
import {
  SimpleGrid,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

const Photography = () => {
  const [images, setImages] = useState([]);
  const [fetchURL, setFetchURL] = useState(
    process.env.NEXT_PUBLIC_INSTAGRAM_API_URL +
      process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN
  );
  const [modalImage, setmodalImage] = useState("");
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const openModal = (src) => {
    setmodalImage(src);
    onToggle();
  };

  const { observe } = useInView({
    // For better UX, we can grow the root margin so the data will be loaded earlier
    rootMargin: "50px 0px",
    // When the last item comes to the viewport
    onEnter: ({ unobserve, observe }) => {
      // Pause observe when loading data
      unobserve();
      // Load more data
      if (fetchURL) {
        axios.get(fetchURL).then((res) => {
          setImages([...images, ...res.data.data]);
          // Resume observe after loading data
          setFetchURL(res.data.paging.next ?? null);
          observe();
        });
      }
    },
  });

  //Get first load of Data
  useEffect(() => {
    // Run! Like go get some data from an API.
    axios.get(fetchURL).then((res) => {
      console.log("Data", res.data);
      setImages(res.data.data);
      setFetchURL(res.data.paging.next);
    });
  }, []);

  return (
    <Box>
      <SimpleGrid columns={3} spacingX="10px" spacingY="10px">
        {images.map((image, idx) => (
          <div
            ref={idx === images.length - 1 ? observe : null}
            key={image.id}
            style={{ width: "100%" }}
            onClick={() => openModal(image.media_url)}
          >
            <Image
              src={image.media_url}
              alt={image.caption}
              height={1000}
              width={1000}
              layout="responsive"
            />
          </div>
        ))}
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {" "}
            <Image
              src={modalImage}
              alt="Text caption"
              height={1000}
              width={1000}
              layout="responsive"
            />
          </ModalBody>

          <ModalFooter isCentered>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default Photography;
