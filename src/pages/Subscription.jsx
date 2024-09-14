/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Icon,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import Layout from "../components/Layout";
import dashboardImage from "./../assets/images/dashboard.png";
import paystackImage from "./../assets/images/paystack.jpeg";

const SubscriptionPage = () => {
  return (
    <Layout>
      <Box p={"3%"} fontFamily={"IBM Plex Sans"}>
        {/* Header Section */}
        <Flex direction="column" mb={10}>
          <Heading as="h1" size="2xl" mb={4} color={"primary.500"}>
            Subscribe to Premium
          </Heading>
          <Text fontSize="lg" mb={6}>
            Unlock exclusive features and enjoy an enhanced experience.
          </Text>
          <Image
            src={dashboardImage}
            alt="Premium Content"
            width={"full"}
            mb={8}
          />
        </Flex>

        {/* Benefits Section */}
        <Box mb={10}>
          <Heading
            fontFamily={"IMB Plex Sans"}
            as="h2"
            size="lg"
            textAlign={"center"}
            p={4}
            color={"primary.500"}
            mb={6}
          >
            Why Go Premium?
          </Heading>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            margin={"auto"}
            flexWrap={"wrap"}
          >
            <Benefit
              icon={FaCheckCircle}
              text="Unlimited Access to All Features"
            />
            <Benefit
              icon={FaCheckCircle}
              text="Exclusive Content and Resources"
            />
            <Benefit icon={FaCheckCircle} text="Ad-Free Experience" />
            <Benefit icon={FaCheckCircle} text="Priority Customer Support" />
            <Benefit
              icon={FaCheckCircle}
              text="Unlimited Access to All Features"
            />
            <Benefit
              icon={FaCheckCircle}
              text="Exclusive Content and Resources"
            />
            {/* <Benefit icon={FaCheckCircle} text="Ad-Free Experience" />
            <Benefit icon={FaCheckCircle} text="Priority Customer Support" /> */}
          </Flex>
        </Box>

        {/* Pricing Section */}
        <VStack spacing={6} mb={10}>
          <Heading
            fontFamily={"IMB Plex Sans"}
            as="h2"
            size="lg"
            color={"primary.500"}
          >
            Choose Your Plan
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <PlanCard
              title="Monthly Plan"
              price="$9.99/month"
              description="Access all premium features for a month."
              isPopular={false}
            />
            <PlanCard
              title="Annual Plan"
              price="$99.99/year"
              description="Save 20% compared to the monthly plan!"
              isPopular={true}
            />
          </SimpleGrid>
        </VStack>

        {/* Call to Action Section */}
        <Flex direction="column" align="center" mt={"10%"}>
          <Text fontSize="lg" mb={"10px"}>
            Secure Payment Powered by Paystack
          </Text>
          <Image
            src={paystackImage}
            alt="Payment Security"
            display="inline"
            width={"60px"}
          />
        </Flex>
      </Box>
    </Layout>
  );
};

// Benefit Component
const Benefit = ({ icon, text }) => (
  <Flex align="center" flexBasis={"22%"} mb={10}>
    <Icon as={icon} color="primary.500" boxSize={6} mr={4} />
    <Text fontSize="lg">{text}</Text>
  </Flex>
);

// Plan Card Component
const PlanCard = ({ title, price, description, isPopular }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    p={6}
    textAlign="center"
    boxShadow={isPopular ? "lg" : "sm"}
    bg={isPopular ? "primary.50" : "white"}
  >
    {isPopular && (
      <Text color="primary.300" fontWeight="bold" mb={2}>
        Most Popular
      </Text>
    )}
    <Heading
      fontFamily={"IMB Plex Sans"}
      as="h3"
      size="md"
      mb={2}
      color={"primary.500"}
    >
      {title}
    </Heading>
    <Text fontSize="2xl" mb={4}>
      {price}
    </Text>
    <Text mb={4}>{description}</Text>
    <Button colorScheme="primary" variant={isPopular ? "solid" : "outline"}>
      Choose Plan
    </Button>
  </Box>
);

export default SubscriptionPage;
