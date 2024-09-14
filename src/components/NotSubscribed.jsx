/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Image,
  List,
  ListItem,
  ListIcon,
  Flex,
  Box,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { InfoIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import dashboardImage from "./../assets/images/dashboard.png";

const NotSubscribed = ({ isOpen, onClose, initializePayment }) => {
  const navigate = useNavigate();
  const handleSubscribe = async () => {
    await initializePayment({
      amount: 2000,
      subscriptionType: "monthly",
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
      <ModalOverlay />
      <ModalContent fontFamily={"IBM Plex Sans"}>
        <ModalHeader
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Box display={"flex"} alignItems={"center"}>
            <InfoIcon color="primary.500" mr={2} />
            <Text textAlign={"left"}>Upgrade to Premium</Text>
          </Box>
          <Button colorScheme="primary" onClick={() => navigate(-1)}>
            Close
          </Button>
        </ModalHeader>
        <ModalBody textAlign="left">
          <Image src={dashboardImage} alt="Premium Content" mb={4} />
          <Text mb={4} fontWeight={"600"}>
            To access this feature, please subscribe to our premium services and
            unlock exclusive benefits!
          </Text>
          <Flex justifyContent={"space-between"} alignItems={"center"} mr={2}>
            <Text mb={4} fontWeight={"600"}>
              SwyftInvoice Premium{" "}
            </Text>
            <Text mb={4} fontWeight={"600"}>
              NGN 2000 monthly
            </Text>
          </Flex>
          <List>
            <ListItem textAlign={"left"} mb={2}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur
            </ListItem>
          </List>
          <List>
            <ListItem textAlign={"left"} mb={2}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur
            </ListItem>
          </List>
          <List>
            <ListItem textAlign={"left"} mb={2}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur
            </ListItem>
          </List>
        </ModalBody>
        <ModalFooter width={"full"}>
          <Button
            colorScheme="primary"
            width={"100%"}
            onClick={handleSubscribe}
          >
            Upgrade to premium
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NotSubscribed;
