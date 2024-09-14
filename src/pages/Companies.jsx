import { Box, Text } from "@chakra-ui/react";

import Layout from "../components/Layout";
import CompanyList from "../components/CompanyList";
const Companies = () => {
  return (
    <Layout>
      <Box minHeight={"100vh"} fontFamily={"IBM Plex Sans"}>
        <Box>
          <Text>Welcome to the company section</Text>
          <CompanyList />
        </Box>
      </Box>
    </Layout>
  );
};

export default Companies;
