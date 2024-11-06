import {
  Box,
  Text,
  Flex,
  Badge,
  VStack,
  HStack,
  Spinner,
  Grid,
  Icon,
  Avatar,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaBuilding,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useCompanyContext } from "../contexts/CompanyContext";
import Layout from "../components/Layout";
import { useEffect, useRef } from "react";
import InvoiceList from "../components/InvoiceList";
import ClientList from "../components/ClientList";
import EditCompanyModal from "../components/EditCompanyModal";

const CompanyDetails = () => {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, getCompanyDetails, companyDetails, uploadCompanyLogo } =
    useCompanyContext();

  useEffect(() => {
    getCompanyDetails(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const inputRef = useRef(null);

  const handleAvatarClick = () => {
    inputRef.current.click(); // Trigger input click when Avatar is clicked
  };

  const handleFileChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    // console.log("The Selected file is", file);
    // const logo = new FormData();
    // logo.append("logo", file);
    // console.log(logo);
    await uploadCompanyLogo(id, file);
  };

  if (loading || Object.keys(companyDetails).length === 0) {
    return (
      <Layout>
        <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
          <Spinner size="xl" color="primary" />
        </Flex>
      </Layout>
    );
  }

  return (
    <Layout title={"Company Details"}>
      <Box mx="auto" fontFamily={"IBM Plex Sans"}>
        <Flex flexDirection="column" gap={6}>
          {/* Company Information Card */}
          <Box py={6}>
            <Flex justify="space-between" alignItems="center" mb={6}>
              <Box display={"flex"} alignItems={"center"} gap={4}>
                <Avatar
                  name={companyDetails?.name}
                  size={"lg"}
                  cursor={"pointer"}
                  onClick={handleAvatarClick}
                  src={companyDetails?.logo}
                />
                <Input
                  type="file"
                  ref={inputRef}
                  onChange={handleFileChange}
                  display="none" // Hide the input element
                  accept="image/*"
                />
                <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
                  {companyDetails?.name}
                </Text>
              </Box>
              <Box>
                <Badge
                  colorScheme={companyDetails?.active ? "green" : "red"}
                  variant="solid"
                  fontSize="0.9em"
                  size={"lg"}
                  mr={6}
                >
                  {companyDetails?.active ? "Active" : "Inactive"}
                </Badge>
                <Button colorScheme="primary" onClick={onOpen}>
                  Edit Company
                </Button>
              </Box>
            </Flex>

            <Grid templateColumns={["1fr", "1fr 1fr"]} gap={8}>
              <VStack align="start" spacing={4}>
                <HStack>
                  <Icon as={FaBuilding} />
                  <Text fontWeight="medium">Address:</Text>
                  <Text color="gray.600">{companyDetails?.address}</Text>
                </HStack>

                <HStack>
                  <Icon as={FaEnvelope} />
                  <Text fontWeight="medium">Email:</Text>
                  <Text color="gray.600">{companyDetails?.email}</Text>
                </HStack>

                <HStack>
                  <Icon as={FaPhone} />
                  <Text fontWeight="medium">Phone:</Text>
                  <Text color="gray.600">{companyDetails?.phoneNumber}</Text>
                </HStack>
              </VStack>

              <VStack align="start" spacing={4}>
                <HStack>
                  <Icon as={FaCalendarAlt} />
                  <Text fontWeight="medium">Created At:</Text>
                  <Text color="gray.600">
                    {new Date(companyDetails?.createdAt).toLocaleDateString()}
                  </Text>
                </HStack>

                <HStack>
                  <Icon as={FaMoneyBillWave} />
                  <Text fontWeight="medium">Currency:</Text>
                  <Text color="gray.600">{companyDetails?.currency}</Text>
                </HStack>

                <HStack>
                  <Icon as={FaUser} />
                  <Text fontWeight="medium">Owner:</Text>
                  <Text color="gray.600">
                    {companyDetails?.user?.firstname}{" "}
                    {companyDetails?.user?.lastname}
                  </Text>
                </HStack>
              </VStack>
            </Grid>
          </Box>
          {/* Tables */}
          {/* <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={6}> */}
          {/* Invoice Section */}
          <Box py={6}>
            <Box padding={"10px"}>
              <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
                Invoices
              </Text>
              <Text
                as={"p"}
                fontSize={"14px"}
                fontWeight={500}
                color={"text.coral"}
              >
                Invoices for {companyDetails?.name}
              </Text>
            </Box>
            {companyDetails && companyDetails?.invoices.length > 0 ? (
              <InvoiceList invoices={companyDetails.invoices} />
            ) : (
              <Text fontSize="lg" color="gray.500">
                No invoices available for this company.
              </Text>
            )}
          </Box>

          {/* Client Section */}
          <Box py={6}>
            <Box padding={"10px"}>
              <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
                Clients
              </Text>
              <Text
                as={"p"}
                fontSize={"14px"}
                fontWeight={500}
                color={"text.coral"}
              >
                Clients for {companyDetails?.name}
              </Text>
            </Box>
            {companyDetails && companyDetails?.clients.length > 0 ? (
              //   <InvoiceList invoices={companyDetails.invoices} />
              <ClientList clients={companyDetails.clients} />
            ) : (
              <Text fontSize="lg" color="gray.500">
                No clients available for this company.
              </Text>
            )}
          </Box>
          {/* </Box> */}
        </Flex>
        <EditCompanyModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </Layout>
  );
};

export default CompanyDetails;
