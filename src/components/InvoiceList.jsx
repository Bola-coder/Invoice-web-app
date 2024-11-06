/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
import { convertNumberToCurrencyFormat } from "../utils/formatNumber";
import { useNavigate } from "react-router-dom";

const InvoiceList = ({ displayTitle, invoices }) => {
  const navigate = useNavigate();

  return (
    <Box mt={"2%"}>
      {displayTitle && (
        <Box padding={"10px"} mb={2}>
          <Text
            as={"h2"}
            fontSize={{ base: "16px", md: "20px" }}
            fontWeight={500}
          >
            Invoices
          </Text>
          <Text
            as={"p"}
            fontSize={{ base: "12px", md: "14px" }}
            fontWeight={500}
            color={"text.coral"}
          >
            Recent invoices displayed for you
          </Text>
        </Box>
      )}

      <Box
        background={"#FFF"}
        margin={"auto"}
        border={"1px solid #e0e0e0"}
        borderRadius={"12px"}
        overflowX="auto" // Ensures horizontal scroll on smaller screens
      >
        {/* Header */}
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr 1.5fr", // 2 columns on mobile screens
            sm: "1fr 1.5fr 1fr", // 3 columns on small screens
            md: "1fr 1.5fr 1fr 1fr", // 4 columns on medium screens
            lg: "1fr 1.5fr 1fr 1fr 1fr 1fr", // 6 columns on large screens
          }}
          alignItems="center"
          borderBottom={"1px solid #efeded"}
          backgroundColor={"#FCFDFD"}
          padding={"20px"}
          borderRadius={"12px"}
          fontSize={{ base: "12px", md: "14px" }} // Responsive text size
        >
          <Text fontWeight={500}>Invoice Number</Text>
          <Text fontWeight={500}>Client Name</Text>
          <Text fontWeight={500} display={{ base: "none", sm: "block" }}>
            Total Amount
          </Text>
          <Text fontWeight={500} display={{ base: "none", md: "block" }}>
            Amount Paid
          </Text>
          <Text fontWeight={500} display={{ base: "none", lg: "block" }}>
            Status
          </Text>
          <Text fontWeight={500} display={{ base: "none", lg: "block" }}>
            Due Date
          </Text>
        </Box>

        {/* Content */}
        {invoices &&
          invoices.map((invoice) => (
            <Box
              key={invoice._id}
              borderBottom={"1px solid #efeded"}
              onClick={() => navigate(`/invoice/${invoice._id}`)}
              cursor="pointer"
            >
              <Box
                display="grid"
                gridTemplateColumns={{
                  base: "1fr 1.5fr", // 2 columns on mobile screens
                  sm: "1fr 1.5fr 1fr", // 3 columns on small screens
                  md: "1fr 1.5fr 1fr 1fr", // 4 columns on medium screens
                  lg: "1fr 1.5fr 1fr 1fr 1fr 1fr", // 6 columns on large screens
                }}
                alignItems="center"
                padding={"20px"}
                fontSize={{ base: "12px", md: "14px" }} // Responsive text size
              >
                <Text>{invoice.invoiceNumber}</Text>
                <Text>
                  {invoice.client?.name.length > 30
                    ? `${invoice.client?.name.slice(0, 30)}...`
                    : invoice.client?.name}
                </Text>
                <Text display={{ base: "none", sm: "block" }}>
                  NGN {convertNumberToCurrencyFormat(invoice.total)}
                </Text>
                <Text display={{ base: "none", md: "block" }}>
                  NGN {convertNumberToCurrencyFormat(invoice.amountPaid)}
                </Text>
                <Text
                  display={{ base: "none", lg: "block" }}
                  color={invoice.status === "paid" ? "#00B69B" : "#6226EF"}
                  backgroundColor={
                    invoice.status === "paid" ? "#ccf0eb" : "#e0d4fc"
                  }
                  fontWeight={500}
                  paddingY={"5px"}
                  paddingX={"10px"}
                  borderRadius={"4px"}
                  textAlign="center"
                  maxWidth="fit-content"
                >
                  {invoice.status}
                </Text>
                <Text display={{ base: "none", lg: "block" }}>
                  {new Date(invoice.dueDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default InvoiceList;
