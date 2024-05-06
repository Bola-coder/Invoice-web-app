/* eslint-disable react/prop-types */
import { Flex, Box, Text, Button } from "@chakra-ui/react";
// import { convertNumberToCurrencyFormat } from "../utils/formatNumber";

const ClientList = ({ clients }) => {
  return (
    <Box mt={"2%"} bg={"#FFF"} padding={"20px"} borderRadius={"12px"}>
      {/* {displayTitle && (
        <Box>
          <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
            clients
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
      )} */}

      <Box>
        {clients &&
          clients.map((client, index) => (
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={"1px solid gray"}
              mb={"10px"}
              padding={"10px"}
              key={index}
              _hover={{
                backgroundColor: "#E7ECF0",
                borderRadius: "12px",
              }}
              cursor={"pointer"}
            >
              <Text fontSize={"14px"} flexBasis={"18%"}>
                {client.namelength > 15
                  ? `${client.name.slice(0, 15)}...`
                  : client.name}
              </Text>
              <Text fontSize={"14px"} flexBasis={"18%"}>
                {client.email.length > 20
                  ? `${client.email.slice(0, 20)}...`
                  : client.email}
              </Text>
              <Text fontSize={"14px"} flexBasis={"18%"}>
                {client.phoneNumber}
              </Text>
              {/* <Text fontSize={"14px"} flexBasis={"18%"}>
                NGN {convertNumberToCurrencyFormat(client.amount)}
              </Text> */}
              <Button bg={"transparent"} color={"primary.500"}>
                Archive
              </Button>
            </Flex>
          ))}
      </Box>
    </Box>
  );
};

export default ClientList;
