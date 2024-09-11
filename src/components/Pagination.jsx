/* eslint-disable react/prop-types */
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = ({
  currentPage,
  numberOfContent,
  itemsPerPage,
  handleNextPage,
  handlePreviousPage,
  handlePageChange,
}) => {
  const pageNumbers = [];
  const numberOfPages = Math.ceil(numberOfContent / itemsPerPage);

  // Define the range of visible page numbers
  let startPage = Math.max(currentPage - 2, 1); // Ensure startPage is not less than 1
  let endPage = currentPage + 2;

  // Adjust endPage if it exceeds the total number of pages
  if (endPage > numberOfPages) {
    endPage = numberOfPages;
  }

  // Adjust startPage again if endPage is less than 5
  if (endPage - startPage < 4) {
    startPage = Math.max(endPage - 4, 1);
  }

  // Generate page numbers within the defined range
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      maxWidth={"100%"}
      overflow={"hidden"}
      margin={"0 auto"}
    >
      <Box
        padding={"10px"}
        border={"2px solid #195F5D"}
        borderRadius={"50%"}
        mx={"20px"}
        cursor={"pointer"}
        onClick={() => {
          handlePreviousPage(pageNumbers);
        }}
        disabled={currentPage === 1}
        opacity={currentPage === 1 ? 0.5 : 1} // Dim the button if it's at the first page
      >
        <FaArrowLeft size={"24px"} color="#195F5D" />
      </Box>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        {startPage > 1 && (
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            textAlign={"center"}
            color={"primary.500"}
            mx={"20px"}
          >
            ...
          </Text>
        )}
        {pageNumbers.map((page) => (
          <Box
            key={page}
            height={"50px"}
            width={"50px"}
            padding={"10px"}
            borderRadius={"12px"}
            cursor={"pointer"}
            mx={"20px"}
            border={page === currentPage ? "2px solid #074D41" : ""}
            onClick={() => handlePageChange(page)} // Navigate to the clicked page
          >
            <Text
              fontSize={"14px"}
              fontWeight={"500"}
              textAlign={"center"}
              color={page === currentPage ? "primary.500" : ""}
            >
              {page}
            </Text>
          </Box>
        ))}
        {endPage < numberOfPages && (
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            textAlign={"center"}
            color={"primary.500"}
            mx={"20px"}
          >
            ...
          </Text>
        )}
      </Flex>
      <Box
        padding={"10px"}
        border={"2px solid #195F5D"}
        borderRadius={"50%"}
        mx={"20px"}
        cursor={"pointer"}
        onClick={() => handleNextPage(pageNumbers)}
        disabled={currentPage === numberOfPages}
        opacity={currentPage === numberOfPages ? 0.5 : 1} // Dim the button if it's at the last page
      >
        <FaArrowRight size={"24px"} color="#195F5D" />
      </Box>
    </Flex>
  );
};

export default Pagination;
