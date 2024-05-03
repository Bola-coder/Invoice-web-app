import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  //   Select,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import Layout from "../components/Layout";

const CreateInvoice = () => {
  const [formData, setFormData] = useState({
    invoiceNumber: "",
    client: "",
    invoiceDate: "",
    dueDate: "",
    items: [{ itemName: "", quantity: 0, price: 0 }],
    total: 0,
    amountPaid: 0,
    balance: 0,
    status: "draft",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleItemChange = (e, index) => {
    const { name, value } = e.target;
    const updatedItems = [...formData.items];
    updatedItems[index][name] = value;
    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { itemName: "", quantity: 0, price: 0 }],
    });
  };

  const handleRemoveItem = (index) => {
    if (index !== 0) {
      const updatedItems = [...formData.items];
      updatedItems.splice(index, 1);
      setFormData({
        ...formData,
        items: updatedItems,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
    // Reset form data after submission
    setFormData({
      invoiceNumber: "",
      client: "",
      invoiceDate: "",
      dueDate: "",
      items: [{ itemName: "", quantity: 0, price: 0 }],
      total: 0,
      amountPaid: 0,
      balance: 0,
      status: "draft",
    });
  };

  return (
    <Box fontFamily={"IBM Plex Sans"} bg={"#E7ECF0"}>
      <Layout>
        <Box padding={"3%"}>
          <Text as={"h2"} fontSize={"20px"} fontWeight={500} mb={"10px"}>
            Create Invoice
          </Text>
          <Box p={6} borderRadius="md" bg="white" boxShadow="md">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Invoice Number</FormLabel>
                <Input
                  type="text"
                  name="invoiceNumber"
                  value={formData.invoiceNumber}
                  onChange={handleChange}
                  placeholder="Enter invoice number"
                  required
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Client</FormLabel>
                <Input
                  type="text"
                  name="client"
                  value={formData.client}
                  onChange={handleChange}
                  placeholder="Enter client name"
                  required
                />
              </FormControl>
              <Flex mt={4}>
                <FormControl flex="1" mr={2}>
                  <FormLabel>Invoice Date</FormLabel>
                  <Input
                    type="date"
                    name="invoiceDate"
                    value={formData.invoiceDate}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl flex="1" ml={2}>
                  <FormLabel>Due Date</FormLabel>
                  <Input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
              </Flex>
              {/* <FormControl mt={4}>
                <FormLabel>Items</FormLabel>
                <Input
                  type="text"
                  name="item"
                  placeholder="Item Name"
                  value={formData.item}
                  onChange={handleChange}
                  required
                  mb={"10px"}
                />
                <Input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  mb={"10px"}
                />
                <Input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  mb={"10px"}
                />
                <Button width={"100%"} mt={6} colorScheme="primary">
                  Add new item
                </Button>
              </FormControl> */}
              {formData.items.map((item, index) => (
                <FormControl key={index} mt={4}>
                  <Flex justifyContent={"space-between"}>
                    <FormLabel>Item {index + 1}</FormLabel>
                    {index > 0 && (
                      <FaTimes
                        size={14}
                        onClick={() => handleRemoveItem(index)}
                      />
                    )}
                  </Flex>
                  <Input
                    type="text"
                    name="itemName"
                    placeholder="Item Name"
                    value={item.itemName}
                    onChange={(e) => handleItemChange(e, index)}
                    required
                    mb={"10px"}
                  />
                  <Input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(e, index)}
                    required
                    mb={"10px"}
                  />
                  <Input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={item.price}
                    onChange={(e) => handleItemChange(e, index)}
                    required
                    mb={"10px"}
                  />
                </FormControl>
              ))}
              <Button
                mt={4}
                colorScheme="primary"
                width={"100%"}
                onClick={handleAddItem}
              >
                Add new item
              </Button>
              <Flex mt={4}>
                <FormControl flex="1" mr={2}>
                  <FormLabel>Total</FormLabel>
                  <Input
                    type="number"
                    name="total"
                    value={formData.total}
                    onChange={handleChange}
                    readOnly
                  />
                </FormControl>
                {/* <FormControl flex="1" ml={2}>
                  <FormLabel>Amount Paid</FormLabel>
                  <Input
                    type="number"
                    name="amountPaid"
                    value={formData.amountPaid}
                    onChange={handleChange}
                  />
                </FormControl> */}
              </Flex>
              {/* <FormControl mt={4}>
                <FormLabel>Balance</FormLabel>
                <Input
                  type="number"
                  name="balance"
                  value={formData.balance}
                  onChange={handleChange}
                  readOnly
                />
              </FormControl> */}
              {/* <FormControl mt={4}>
                <FormLabel>Status</FormLabel>
                <Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="draft">Draft</option>
                  <option value="sent">Sent</option>
                  <option value="not-paid">Not Paid</option>
                  <option value="partially-paid">Partially Paid</option>
                  <option value="paid">Paid</option>
                </Select>
              </FormControl> */}
              <Flex justifyContent={"flex-end"}>
                <Button mt={6} colorScheme="primary" type="submit">
                  Create Invoice
                </Button>
              </Flex>
            </form>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default CreateInvoice;
