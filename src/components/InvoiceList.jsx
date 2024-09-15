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
          <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
            Invoices
          </Text>
          <Text
            as={"p"}
            fontSize={"14px"}
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
      >
        {/* Header */}
        <Box
          display="grid"
          gridTemplateColumns="1fr 1.5fr 1fr 1fr 1fr 1fr"
          alignItems="center"
          borderBottom={"1px solid #efeded"}
          backgroundColor={"#FCFDFD"}
          padding={"20px"}
          borderRadius={"12px"}
        >
          <Text fontSize={"14px"} fontWeight={500}>
            Invoice Number
          </Text>

          <Text fontSize={"14px"} fontWeight={500}>
            Client Name
          </Text>

          <Text fontSize={"14px"} fontWeight={500}>
            Total Amount
          </Text>

          <Text fontSize={"14px"} fontWeight={500}>
            Amount Paid
          </Text>

          <Text fontSize={"14px"} fontWeight={500}>
            Status
          </Text>
          <Text fontSize={"14px"} fontWeight={500}>
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
                gridTemplateColumns="1fr 1.5fr 1fr 1fr 1fr 1fr"
                alignItems="center"
                padding={"20px"}
              >
                <Text fontSize={"14px"}>{invoice.invoiceNumber}</Text>

                <Text fontSize={"14px"}>
                  {invoice.client?.name.length > 30
                    ? `${invoice.client?.name.slice(0, 30)}...`
                    : invoice.client?.name}
                </Text>

                <Text fontSize={"14px"}>
                  NGN {convertNumberToCurrencyFormat(invoice.total)}
                </Text>

                <Text fontSize={"14px"}>
                  NGN {convertNumberToCurrencyFormat(invoice.amountPaid)}
                </Text>

                <Text
                  fontSize={"14px"}
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

                <Text fontSize={"14px"}>
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
