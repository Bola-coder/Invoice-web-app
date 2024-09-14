import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Stack,
  HStack,
  useToast,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { FaBuilding, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const CompanyList = () => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Company A",
      invoiceCount: 10,
      address: "123 Main St",
      contact: "companyA@example.com",
    },
    {
      id: 2,
      name: "Company B",
      invoiceCount: 5,
      address: "456 Oak St",
      contact: "companyB@example.com",
    },
    {
      id: 3,
      name: "Company C",
      invoiceCount: 12,
      address: "789 Pine St",
      contact: "companyC@example.com",
    },
  ]);

  const toast = useToast();

  const handleCreateCompany = () => {
    const newCompany = {
      id: companies.length + 1,
      name: `Company ${String.fromCharCode(65 + companies.length)}`, // Company D, E, etc.
      invoiceCount: 0,
      address: "New Address",
      contact: "newCompany@example.com",
    };
    setCompanies([...companies, newCompany]);

    toast({
      title: "Company Created.",
      description: `Successfully created ${newCompany.name}.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxW="1200px" mx="auto" py={10} px={5}>
      <Flex justify="space-between" mb={6} align="center">
        <Heading size="lg">Registered Companies</Heading>
        <Button colorScheme="teal" onClick={handleCreateCompany}>
          Create New Company
        </Button>
      </Flex>

      <VStack spacing={6} align="stretch">
        {companies.map((company) => (
          <Box
            key={company.id}
            bg="white"
            rounded="md"
            shadow="md"
            p={6}
            borderWidth={1}
            borderColor="gray.200"
            _hover={{ borderColor: "teal.400", shadow: "lg" }}
            transition="0.3s"
          >
            <HStack spacing={4} mb={3} align="center">
              <Icon as={FaBuilding} boxSize={6} color="teal.500" />
              <Heading size="md">{company.name}</Heading>
              <Badge colorScheme="teal">{company.invoiceCount} Invoices</Badge>
            </HStack>
            <Stack spacing={2}>
              <HStack>
                <Icon as={FaLocationArrow} color="gray.500" />
                <Text color="gray.600">{company.address}</Text>
              </HStack>
              <HStack>
                <Icon as={FaEnvelope} color="gray.500" />
                <Text color="gray.600">{company.contact}</Text>
              </HStack>
            </Stack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default CompanyList;
