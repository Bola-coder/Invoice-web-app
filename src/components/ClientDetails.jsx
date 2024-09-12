/* eslint-disable react/prop-types */
import {
  Box,
  Text,
  Button,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

const ClientDetails = ({ isOpen, onClose, client }) => {
  const { id } = useParams();

  return (
    <Box fontFamily={"IBM Plex Sans"} bg={"#E7ECF0"}>
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Client Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {client ? (
              <Box p="4">
                <VStack align="start" spacing="2">
                  <Text fontSize="lg" fontWeight="bold">
                    Name:
                    <Text as="span" ml="2" fontWeight="normal">
                      {client.name}
                    </Text>
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    Email:
                    <Text as="span" ml="2" fontWeight="normal">
                      {client.email}
                    </Text>
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    Phone Number:
                    <Text as="span" ml="2" fontWeight="normal">
                      {client.phoneNumber}
                    </Text>
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    Address:
                    <Text as="span" ml="2" fontWeight="normal">
                      {client.address}
                    </Text>
                  </Text>
                </VStack>
              </Box>
            ) : (
              ""
            )}
          </ModalBody>
          <ModalFooter>
            <Link to={`/client/edit/${id}`}>
              <Button colorScheme="primary" mr={3}>
                Edit Client
              </Button>
            </Link>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ClientDetails;
