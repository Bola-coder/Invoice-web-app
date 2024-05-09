/* eslint-disable react/prop-types */
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { convertNumberToCurrencyFormat } from "../utils/formatNumber";
import { useNavigate } from "react-router-dom";

const InvoiceList = ({ displayTitle, invoices }) => {
  const navigate = useNavigate();
  return (
    <Box mt={"5%"} bg={"#FFF"} borderRadius={"12px"}>
      {displayTitle && (
        <Box padding={"10px"}>
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
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          borderBottom={"1px solid gray"}
          // mb={"10px"}
          padding={"10px"}
          cursor={"pointer"}
        >
          <Text fontSize={"14px"} fontWeight={500} flexBasis={"18%"}>
            Invoice Number
          </Text>
          <Text fontSize={"14px"} fontWeight={500} flexBasis={"18%"}>
            Status
          </Text>
          <Text fontSize={"14px"} fontWeight={500} flexBasis={"18%"}>
            Client Name
          </Text>
          <Text fontSize={"14px"} fontWeight={500} flexBasis={"18%"}>
            Total Amount
          </Text>
          <Button bg={"transparent"} color={"primary.500"}>
            Action
          </Button>
        </Flex>
        {invoices &&
          invoices.map((invoice) => (
            <Box
              padding={"10px"}
              key={invoice._id}
              borderBottom={"1px solid gray"}
            >
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                mb={"10px"}
                // padding={"10px 0"}
                cursor={"pointer"}
                onClick={() => navigate(`/invoice/${invoice._id}`)}
              >
                <Text fontSize={"14px"} flexBasis={"18%"}>
                  {invoice.invoiceNumber}
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
                  {invoice.client?.name.length > 15
                    ? `${invoice.client?.name.slice(0, 15)}...`
                    : invoice.client?.name}
                </Text>
                <Text fontSize={"14px"} flexBasis={"18%"}>
                  NGN {convertNumberToCurrencyFormat(invoice.total)}
                </Text>
                <Button bg={"transparent"} color={"primary.500"}>
                  Download
                </Button>
              </Flex>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default InvoiceList;
