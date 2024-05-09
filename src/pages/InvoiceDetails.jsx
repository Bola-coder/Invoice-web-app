/* eslint-disable react/prop-types */
import { useEffect } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Badge,
  Grid,
  GridItem,
  Flex,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { useInvoiceContext } from "../contexts/InvoiceContext";
import { convertNumberToCurrencyFormat } from "../utils/formatNumber";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const InvoiceDetails = () => {
  const { id } = useParams();
  const { invoiceDetails, loading, getInvoiceDetails } = useInvoiceContext();

  useEffect(() => {
    console.log(id);
    const getInvoice = async () => {
      await getInvoiceDetails(id);
    };
    getInvoice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.log(invoiceDetails);

  if (loading || Object.keys(invoiceDetails).length === 0) {
    return (
      <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
        <Spinner size="xl" color="primary" />
      </Flex>
    );
  }

  return (
    <Box fontFamily={"IBM Plex Sans"} bg={"#E7ECF0"}>
      <Layout>
        <Box padding={"3%"}>
          {/* Header */}
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
              Invoice Details
            </Text>
            <Link to={`/invoice/edit/${id}`}>
              <Button colorScheme="primary">
                {" "}
                <FaPlus color="#fff" /> <Text ml={"2px"}>Edit Invoice</Text>
              </Button>
            </Link>
          </Flex>
          {/* Content */}
          <Box
            mt={"2%"}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            bg={"#FFF"}
          >
            <VStack align="stretch">
              <HStack justifyContent="space-between">
                <Text fontSize="lg" fontWeight="bold">
                  Invoice #{invoiceDetails?.invoiceNumber}
                </Text>
                <Text>
                  Status:{" "}
                  <Badge
                    colorScheme={
                      invoiceDetails?.status === "paid"
                        ? "green"
                        : invoiceDetails?.status === "partially-paid"
                        ? "yellow"
                        : "red"
                    }
                  >
                    {invoiceDetails?.status.toUpperCase()}
                  </Badge>
                </Text>
              </HStack>
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem>
                  <Text>
                    <strong>Invoice Date:</strong>{" "}
                    {new Date(invoiceDetails?.invoiceDate).toLocaleDateString()}
                  </Text>
                  <Text>
                    <strong>Due Date:</strong>{" "}
                    {new Date(invoiceDetails?.dueDate).toLocaleDateString()}
                  </Text>
                  <Text>
                    <strong>Client:</strong> {invoiceDetails?.client?.name}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text>
                    <strong>Total:</strong> $
                    {convertNumberToCurrencyFormat(
                      invoiceDetails.total.toFixed(2)
                    )}
                  </Text>
                  <Text>
                    <strong>Amount Paid:</strong> $
                    {convertNumberToCurrencyFormat(
                      invoiceDetails.amountPaid.toFixed(2)
                    )}
                  </Text>
                  <Text>
                    <strong>Balance:</strong> $
                    {convertNumberToCurrencyFormat(
                      invoiceDetails?.balance.toFixed(2)
                    )}
                  </Text>
                </GridItem>
              </Grid>
              <Box mt={4}>
                <Text fontSize="md" fontWeight="semibold">
                  Items
                </Text>
                {invoiceDetails.items.map((item, index) => (
                  <Box
                    key={index}
                    p={2}
                    bg="primary.500"
                    color={"#FFF"}
                    borderRadius="md"
                    mt={2}
                  >
                    <HStack justifyContent="space-between">
                      <Text>{item.itemName}</Text>
                      <Text>
                        {item.quantity} x ${item.price.toFixed(2)}
                      </Text>
                    </HStack>
                  </Box>
                ))}
              </Box>
            </VStack>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default InvoiceDetails;
