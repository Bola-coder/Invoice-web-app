import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import Layout from "../components/Layout";
import InvoiceList from "../components/InvoiceList";
import invoices from "../data/invoices";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import { useState } from "react";
const Invoice = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(10);
  const itemsPerPage = 7;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInvoices = invoices.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage === Math.ceil(invoices.length / itemsPerPage)) return;
    setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  return (
    <Box fontFamily={"IBM Plex Sans"} bg={"#E7ECF0"}>
      <Layout>
        <Box padding={"3%"}>
          {/* Header */}
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
              Invoices
            </Text>
            <Link to={"/create-invoice"}>
              <Button colorScheme="primary">
                {" "}
                <FaPlus color="#fff" />{" "}
                <Text ml={"2px"}>Create New Invoice</Text>
              </Button>
            </Link>
          </Flex>

          {/* Stats */}
          <Flex justifyContent={"space-between"} mt={"20px"}>
            <Box
              bg={"primary.500"}
              padding={"20px"}
              borderRadius={"12px"}
              flexBasis={"48%"}
            >
              <Text fontSize={"14px"} fontWeight={500} color={"#FFF"}>
                Total invoices
              </Text>
              <Text fontSize={"20px"} color={"#FFF"}>
                {invoices.length}
              </Text>
            </Box>
            <Box
              bg={"primary.500"}
              padding={"20px"}
              borderRadius={"12px"}
              flexBasis={"48%"}
            >
              <Text fontSize={"14px"} fontWeight={500} color={"#FFF"}>
                Total amount
              </Text>
              <Text fontSize={"20px"} color={"#FFF"}>
                NGN 234,090
              </Text>
            </Box>
          </Flex>
          {/* Stats (White) */}
          {/* <Flex justifyContent={"space-between"} mt={"20px"}>
            <Box
              bg={"#FFF"}
              padding={"20px"}
              borderRadius={"12px"}
              flexBasis={"48%"}
            >
              <Text fontSize={"14px"} fontWeight={500} color={"priamry.500"}>
                Total invoices
              </Text>
              <Text fontSize={"20px"} color={"priamry.500"}>
                {invoices.length}
              </Text>
            </Box>
            <Box
              bg={"#FFF"}
              padding={"20px"}
              borderRadius={"12px"}
              flexBasis={"48%"}
            >
              <Text fontSize={"14px"} fontWeight={500} color={"primary.500"}>
                Total amount
              </Text>
              <Text fontSize={"20px"} color={"primary.500"}>
                NGN 234,090
              </Text>
            </Box>
          </Flex> */}

          {/* List */}
          <InvoiceList invoices={currentInvoices} />
          <Box mt="20px">
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              numberOfContent={invoices.length}
              handleNextPage={() => handleNextPage()}
              handlePreviousPage={() => handlePreviousPage()}
              handlePageChange={(page) => setCurrentPage(page)}
            />
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Invoice;