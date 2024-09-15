import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useCompanyContext } from "../contexts/CompanyContext";
import Layout from "../components/Layout";
import CompanyList from "../components/CompanyList";
import { useEffect } from "react";

const Companies = () => {
  const { loading, companies, fetchCompanies } = useCompanyContext();

  useEffect(() => {
    fetchCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Layout title={"Companies"}>
        <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
          <Spinner size="xl" color="primary" />
        </Flex>
        ;
      </Layout>
    );
  }
  return (
    <Layout title={"Companies"}>
      <Box minHeight={"100vh"} fontFamily={"IBM Plex Sans"}>
        <CompanyList companies={companies} />
      </Box>
    </Layout>
  );
};

export default Companies;
