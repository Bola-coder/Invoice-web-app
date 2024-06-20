/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
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
import { useInvoicePaymentContext } from "../contexts/InvoicePaymentContext";
import { convertNumberToCurrencyFormat } from "../utils/formatNumber";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import AddPayment from "./AddPayment";

const InvoiceDetails = () => {
  const { id } = useParams();
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const {
    invoiceDetails,
    loading,
    pdfLoading,
    getInvoiceDetails,
    generateInvoicePdf,
  } = useInvoiceContext();
  const {
    loading: invoicePaymentLoading,
    invoicePayments,
    getInvoicePayments,
    createNewPayment,
  } = useInvoicePaymentContext();

  console.log(pdfLoading);
  const handleOpenModal = () => {
    setOpenPaymentModal(true);
  };

  const handleCloseModal = () => {
    setOpenPaymentModal(false);
  };

  const handlePaymentSubmit = async (data) => {
    await createNewPayment(data);
  };

  const generatePdf = async (id) => {
    generateInvoicePdf(id);
  };

  useEffect(() => {
    console.log(id);
    const getInvoice = async () => {
      await getInvoiceDetails(id);
      getInvoicePayments(id);
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
          {/* Invoice Details */}
          <Box>
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
                      {new Date(
                        invoiceDetails?.invoiceDate
                      ).toLocaleDateString()}
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
                      <strong>Total:</strong> NGN
                      {convertNumberToCurrencyFormat(
                        invoiceDetails.total.toFixed(2)
                      )}
                    </Text>
                    <Text>
                      <strong>Amount Paid:</strong> NGN
                      {convertNumberToCurrencyFormat(
                        invoiceDetails.amountPaid.toFixed(2)
                      )}
                    </Text>
                    <Text>
                      <strong>Balance:</strong> NGN
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
                          {item.quantity} x NGN {item.price.toFixed(2)}
                        </Text>
                      </HStack>
                    </Box>
                  ))}
                </Box>
              </VStack>
              <Flex justifyContent={"flex-end"} mt={"15px"}>
                <Button
                  color="primary.500"
                  mr={"10px"}
                  onClick={() => generatePdf(id)}
                >
                  {!pdfLoading ? (
                    <Text ml={"2px"}>
                      {invoiceDetails?.pdf ? "Regenerate Pdf" : "Generate Pdf"}
                    </Text>
                  ) : (
                    <Spinner color="#FFF" />
                  )}
                </Button>
                <Button
                  colorScheme="primary"
                  isDisabled={invoiceDetails.pdf ? false : true}
                >
                  <Text ml={"2px"}>
                    <a href={invoiceDetails?.pdf} target="_blank">
                      Download Pdf
                    </a>
                  </Text>
                </Button>
              </Flex>
            </Box>
          </Box>

          {/* Payment Details */}
          <Box mt={"5%"} width={"100%"}>
            {/* Header */}
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
                Invoice Payment Details
              </Text>
              {/* <Link to={`/invoice/payment/${id}`}> */}
              <Button colorScheme="primary" onClick={handleOpenModal}>
                {" "}
                <FaPlus color="#fff" />{" "}
                <Text ml={"2px"}>Enter new payment</Text>
              </Button>
              {/* </Link> */}
            </Flex>
            {/* Modal for Payment */}
            <AddPayment
              isOpen={openPaymentModal}
              handleClose={handleCloseModal}
              payments={invoicePayments}
              invoiceId={id}
              handleSubmit={handlePaymentSubmit}
            />
            {/* Content */}
            <Box
              mt={"20px"}
              p="6"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              bg="white"
              w="100%"
              // maxW=""
            >
              <HStack justifyContent="space-between" mb={"10px"}>
                <Text>Payment Date</Text>
                <Text>Payment Method</Text>
                <Text>Amount Paid</Text>
              </HStack>
              {invoicePaymentLoading ? (
                <Flex justifyContent={"center"} alignItems={"center"}>
                  <Spinner size="xl" color="primary" />
                </Flex>
              ) : (
                <VStack align="stretch" spacing="2">
                  {invoicePayments?.payments?.map((payment, index) => (
                    <Box key={index} p={2} bg="primary.500" color={"#FFF"}>
                      <HStack justifyContent="space-between">
                        <Text>
                          {new Date(payment.date).toLocaleDateString()}
                        </Text>
                        <Text>{payment.paymentMethod}</Text>
                        <Text>
                          NGN {convertNumberToCurrencyFormat(payment.amount)}
                        </Text>
                      </HStack>
                    </Box>
                  ))}
                </VStack>
              )}
            </Box>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default InvoiceDetails;
