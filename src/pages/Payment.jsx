import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Layout from "../components/Layout";

const PaymentPage = () => {
  return (
    <Layout>
      <Flex justifyContent="center" p={8} fontFamily="IBM Plex Sans">
        <Box w="80%" textAlign="center">
          <Heading as="h1" size="2xl" mb={4} color={"primary.500"}>
            Complete Your Payment
          </Heading>
          <Text fontSize="lg" mb={6}>
            Pay securely using Paystack to access our premium features.
          </Text>
          <VStack spacing={4}>
            <Button
              onClick={""}
              colorScheme="primary"
              isLoading={""}
              loadingText="Processing"
            >
              Pay Now
            </Button>
            <Text fontSize="md" color="gray.600">
              By proceeding with the payment, you agree to our{" "}
              <Text as="span" color="primary.500" fontWeight="bold">
                Terms and Conditions
              </Text>
              .
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Layout>
  );
};

export default PaymentPage;
