import { Box, Text, Flex, Button, VStack } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const ClientDetails = () => {
  const { id } = useParams();
  const client = {
    address: "12 lala street Ibadan",
    archived: false,
    email: "jinadu@dev.com",
    name: "Jinadu Enterprise",
    phoneNumber: "09022336519",
    user: "662335635d8505ad91a915e5",
    __v: 0,
    _id: "66242e57a6d22960058ef533",
  };
  return (
    <Box fontFamily={"IBM Plex Sans"} bg={"#E7ECF0"}>
      <Layout>
        <Box padding={"3%"}>
          {/* Header */}
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
              Client Details
            </Text>
            <Link to={`/client/edit/${id}`}>
              <Button colorScheme="primary">
                <FaPlus color="#fff" /> <Text ml={"2px"}>Edit Client</Text>
              </Button>
            </Link>
          </Flex>
          {/* Content */}

          <Box
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            bg="white"
            w="100%"
            maxW="lg"
          >
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
        </Box>
      </Layout>
    </Box>
  );
};

export default ClientDetails;
