/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Flex,
  Text,
  Stack,
  HStack,
  Badge,
  Icon,
  Avatar,
} from "@chakra-ui/react";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CompanyList = ({ companies }) => {
  const navigate = useNavigate();
  return (
    <Box mx="auto" fontFamily={"IBM Plex Sans"}>
      <Flex justify="space-between" mb={6} align="center">
        <Box mb={2}>
          <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
            Your Companies
          </Text>
          <Text
            as={"p"}
            fontSize={"14px"}
            fontWeight={500}
            color={"text.coral"}
          >
            Manage invoices and clients for your companies
          </Text>
        </Box>{" "}
        <Button colorScheme="primary">Create New Company</Button>
      </Flex>

      <Box display={"grid"} gridTemplateColumns={" 1fr 1fr"} gap={10}>
        {companies.length === 0 ? (
          <Box>
            <Text as={"p"} fontSize={"14px"} fontWeight={500}>
              No companies found
            </Text>
          </Box>
        ) : (
          companies.map((company) => (
            <Box
              key={company._id}
              bg="white"
              rounded="md"
              shadow="md"
              padding={6}
              mb={6}
              borderWidth={1}
              borderColor="gray.200"
              _hover={{ borderColor: "primary.500", shadow: "lg" }}
              transition="0.3s"
              cursor={"pointer"}
              onClick={() => {
                navigate(`/company/${company._id}`);
              }}
            >
              <HStack spacing={4} mb={3} align="center">
                <Avatar name={company.name} src={company?.logo} />
                <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
                  {company.name}
                </Text>
                <Badge colorScheme="teal">
                  {company.invoices.length} Invoices
                </Badge>
                <Badge colorScheme="teal">
                  {company.clients.length} Clients
                </Badge>
              </HStack>
              <Stack spacing={2}>
                <HStack>
                  <Icon as={FaLocationArrow} color="gray.500" />
                  <Text color="gray.600">{company.address}</Text>{" "}
                </HStack>
                <HStack>
                  <Icon as={FaEnvelope} color="gray.500" />
                  <Text color="gray.600">{company.phoneNumber}</Text>
                </HStack>
              </Stack>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default CompanyList;
