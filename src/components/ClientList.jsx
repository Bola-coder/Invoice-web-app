/* eslint-disable react/prop-types */
import { Flex, Box, Text, Button, useDisclosure } from "@chakra-ui/react";
import { useClientContext } from "../contexts/ClientContext";
import ClientDetails from "./ClientDetails";

const ClientList = ({ clients }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { clientDetails, getClientDetails } = useClientContext();

  const handleGetClientDetails = async (id) => {
    await getClientDetails(id);
    onOpen();
  };
  return (
    <Box mt={"5%"} bg={"#FFF"} borderRadius={"12px"}>
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
            Client Name
          </Text>
          <Text fontSize={"14px"} fontWeight={500} flexBasis={"18%"}>
            Client Email
          </Text>
          <Text fontSize={"14px"} fontWeight={500} flexBasis={"18%"}>
            Client Phone Number
          </Text>
          <Text fontSize={"14px"} fontWeight={500} flexBasis={"18%"}>
            Action
          </Text>
        </Flex>
        {clients &&
          clients.map((client, index) => (
            <Box padding={"10px"} key={index} borderBottom={"1px solid gray"}>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                mb={"10px"}
                key={index}
                // _hover={{
                //   backgroundColor: "#E7ECF0",
                //   borderRadius: "12px",
                // }}
                cursor={"pointer"}
                onClick={() => handleGetClientDetails(client._id)}
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
                <Button
                  bg={"transparent"}
                  color={"primary.500"}
                  flexBasis={"18%"}
                >
                  Archive
                </Button>
              </Flex>
            </Box>
          ))}
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <ClientDetails
          isOpen={isOpen}
          onClose={onClose}
          client={clientDetails}
        />
      </Flex>
    </Box>
  );
};

export default ClientList;
