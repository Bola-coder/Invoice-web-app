import { useEffect } from "react";
import { Box, Text, Flex, Button, Spinner } from "@chakra-ui/react";
import { useClientContext } from "../contexts/ClientContext";
import Layout from "../components/Layout";
import ClientList from "../components/ClientList";
// import clients from "../data/clients";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
const Client = () => {
  const { loading, clients, fetchClients } = useClientContext();

  useEffect(() => {
    const fetchAllClients = async () => {
      fetchClients();
    };
    fetchAllClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Clients", clients);
  if (loading) {
    <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <Spinner size="xl" color="primary" />
    </Flex>;
  }
  return (
    <Box fontFamily={"IBM Plex Sans"} bg={"#E7ECF0"}>
      <Layout>
        <Box padding={"3%"}>
          {/* Header */}
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
              Client
            </Text>
            <Link to={"/create-client"}>
              <Button colorScheme="primary">
                <FaPlus color="#fff" />{" "}
                <Text ml={"2px"}>Create New Client</Text>
              </Button>
            </Link>
          </Flex>

          {/* Stats */}
          <Flex justifyContent={"space-between"} mt={"20px"}>
            <Box
              // bg={"primary.500"}
              padding={"20px"}
              borderRadius={"12px"}
              flexBasis={"48%"}
            >
              {/* <Text fontSize={"14px"} fontWeight={500} color={"#FFF"}>
                Total amount
              </Text> */}
              <Text fontSize={"20px"} color={"primary.500"} fontWeight={600}>
                Your clients information tracked and managed all in one place.
              </Text>
            </Box>
            <Box
              bg={"primary.500"}
              padding={"20px"}
              borderRadius={"12px"}
              flexBasis={"48%"}
            >
              <Text fontSize={"14px"} fontWeight={500} color={"#FFF"}>
                Total clients
              </Text>
              <Text fontSize={"20px"} color={"#FFF"}>
                {clients.length}
              </Text>
            </Box>
          </Flex>

          {/* Data */}
          <Box>
            <ClientList clients={clients} />
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Client;
