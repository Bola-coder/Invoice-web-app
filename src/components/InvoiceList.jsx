/* eslint-disable react/prop-types */
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { convertNumberToCurrencyFormat } from "../utils/formatNumber";

const InvoiceList = ({ displayTitle, invoices }) => {
  return (
    <Box mt={"5%"} bg={"#FFF"} padding={"20px"} borderRadius={"12px"}>
      {displayTitle && (
        <Box>
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

      <Box>
        {invoices &&
          invoices.map((invoice) => (
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={"1px solid gray"}
              mb={"10px"}
              padding={"10px 0"}
              key={invoice.id}
            >
              <Text fontSize={"14px"} flexBasis={"18%"}>
                {invoice.id}3
              </Text>
              <Text
                fontSize={"14px"}
                flexBasis={"18%"}
                color={
                  invoice.status === "Paid" ? "primary.500" : "primary.100"
                }
              >
                {invoice.status}
              </Text>
              <Text fontSize={"14px"} flexBasis={"18%"}>
                {invoice.client.length > 15
                  ? `${invoice.client.slice(0, 15)}...`
                  : invoice.client}
              </Text>
              <Text fontSize={"14px"} flexBasis={"18%"}>
                NGN {convertNumberToCurrencyFormat(invoice.amount)}
              </Text>
              <Button bg={"transparent"} color={"primary.500"}>
                Download
              </Button>
            </Flex>
          ))}
      </Box>
    </Box>
  );
};

export default InvoiceList;
