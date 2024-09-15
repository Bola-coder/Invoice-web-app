/* eslint-disable react/prop-types */
import { Box, Text, useDisclosure } from "@chakra-ui/react";
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
    <Box
      mt={"2%"}
      bg={"#FFF"}
      borderRadius={"12px"}
      border={"1px solid #e0e0e0"}
    >
      {/* Header */}
      <Box
        display="grid"
        gridTemplateColumns="1fr 2fr 1fr 1fr"
        alignItems="center"
        borderBottom={"1px solid #efeded"}
        backgroundColor={"#FCFDFD"}
        padding={"20px"}
      >
        <Text fontSize={"14px"} fontWeight={500}>
          Client Name
        </Text>

        <Text fontSize={"14px"} fontWeight={500}>
          Client Email
        </Text>

        <Text fontSize={"14px"} fontWeight={500}>
          Client Phone Number
        </Text>

        <Text fontSize={"14px"} fontWeight={500}>
          Status
        </Text>
      </Box>

      {/* Content */}
      {clients &&
        clients.map((client, index) => (
          <Box
            key={index}
            borderBottom={"1px solid #efeded"}
            onClick={() => handleGetClientDetails(client._id)}
            cursor="pointer"
          >
            <Box
              display="grid"
              gridTemplateColumns="1fr 2fr 1fr 1fr"
              alignItems="center"
              padding={"20px"}
            >
              <Text fontSize={"14px"}>
                {client.name.length > 15
                  ? `${client.name.slice(0, 15)}...`
                  : client.name}
              </Text>

              <Text fontSize={"14px"}>
                {client.email.length > 20
                  ? `${client.email.slice(0, 20)}...`
                  : client.email}
              </Text>

              <Text fontSize={"14px"}>{client.phoneNumber}</Text>

              <Text
                fontSize={"14px"}
                color={client.archived === true ? "#EF3826" : "#00B69B"}
                backgroundColor={
                  client.archived === true ? "#fcd7d4" : "#ccf0eb"
                }
                fontWeight={500}
                paddingY={"5px"}
                paddingX={"10px"}
                borderRadius={"4px"}
                textAlign="center"
                maxWidth="fit-content"
              >
                {client.archived === true ? "archived" : "active"}
              </Text>
            </Box>
          </Box>
        ))}

      {/* Client Details Modal */}
      <ClientDetails isOpen={isOpen} onClose={onClose} client={clientDetails} />
    </Box>
  );
};

export default ClientList;
