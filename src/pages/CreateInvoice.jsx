import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Select,
  Spinner,
  //   Select,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useClientContext } from "../contexts/ClientContext";
import { useInvoiceContext } from "../contexts/InvoiceContext";
import Layout from "../components/Layout";

const CreateInvoice = () => {
  const { clients } = useClientContext();
  console.log(clients);
  const { loading, createInvoice } = useInvoiceContext();
  const formik = useFormik({
    initialValues: {
      invoiceNumber: "",
      client: "",
      invoiceDate: "",
      dueDate: "",
      items: [{ itemName: "", quantity: 0, price: 0 }],
    },
    validationSchema: Yup.object({
      invoiceNumber: Yup.string().required("Invoice number is required"),
      client: Yup.string().required("Client is required"),
      invoiceDate: Yup.date().required("Invoice date is required"),
      dueDate: Yup.date().required("Due date is required"),
      items: Yup.array().of(
        Yup.object().shape({
          itemName: Yup.string().required("Item name is required"),
          quantity: Yup.number()
            .min(1, "Quantity must be at least 1")
            .required("Quantity is required"),
          price: Yup.number()
            .min(0, "Price must be non-negative")
            .required("Price is required"),
        })
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
      createInvoice(values);
      formik.resetForm();
    },
  });

  const handleAddItem = () => {
    const items = formik.values.items.concat({
      itemName: "",
      quantity: 0,
      price: 0,
    });
    formik.setFieldValue("items", items);
  };

  const handleRemoveItem = (index) => {
    const items = [...formik.values.items];
    items.splice(index, 1);
    formik.setFieldValue("items", items);
  };

  return (
    <Box fontFamily={"IBM Plex Sans"} bg={"#E7ECF0"}>
      <Layout>
        <Box padding={"3%"}>
          <Text as={"h2"} fontSize={"20px"} fontWeight={500} mb={"10px"}>
            Create Invoice
          </Text>
          <Box p={6} borderRadius="md" bg="white" boxShadow="md">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>Invoice Number</FormLabel>
                <Input
                  type="text"
                  name="invoiceNumber"
                  id="invoiceNumber"
                  value={formik.values.invoiceNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.invoiceNumber &&
                  formik.errors.invoiceNumber && (
                    <Text color="red">{formik.errors.invoiceNumber}</Text>
                  )}
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Client</FormLabel>
                <Select
                  id="client"
                  name="client"
                  value={formik.values.client}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Select client"
                >
                  {clients.map((client) => (
                    <option key={client._id} value={client._id}>
                      {client.name}
                    </option>
                  ))}
                </Select>
                {formik.touched.client && formik.errors.client && (
                  <Text color="red">{formik.errors.client}</Text>
                )}
              </FormControl>
              <Flex mt={4}>
                <FormControl flex="1" mr={2}>
                  <FormLabel>Invoice Date</FormLabel>
                  <Input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    value={formik.values.invoiceDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.invoiceDate && formik.errors.invoiceDate && (
                    <Text color="red">{formik.errors.invoiceDate}</Text>
                  )}
                </FormControl>
                <FormControl flex="1" ml={2}>
                  <FormLabel>Due Date</FormLabel>
                  <Input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    value={formik.values.dueDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.total && formik.errors.total && (
                    <Text color="red">{formik.errors.total}</Text>
                  )}
                </FormControl>
              </Flex>

              {formik.values.items.map((item, index) => (
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
                    name={`items[${index}].itemName`}
                    placeholder="Item Name"
                    value={item.itemName}
                    onChange={formik.handleChange}
                    required
                    mt={2}
                  />
                  {formik.touched.items?.[index]?.itemName &&
                    formik.errors.items?.[index]?.itemName && (
                      <Text color="red">
                        {formik.errors.items[index].itemName}
                      </Text>
                    )}

                  <Input
                    type="number"
                    name={`items[${index}].quantity`}
                    placeholder="Quantity"
                    value={item.quantity}
                    onChange={formik.handleChange}
                    required
                    mt={2}
                  />
                  {formik.touched.items?.[index]?.quantity &&
                    formik.errors.items?.[index]?.quantity && (
                      <Text color="red">
                        {formik.errors.items[index].quantity}
                      </Text>
                    )}
                  <Input
                    type="number"
                    name={`items[${index}].price`}
                    placeholder="Price"
                    value={item.price}
                    onChange={formik.handleChange}
                    required
                    mt={2}
                  />
                  {formik.touched.items?.[index]?.price &&
                    formik.errors.items?.[index]?.price && (
                      <Text color="red">
                        {formik.errors.items[index].price}
                      </Text>
                    )}
                </FormControl>
              ))}
              <Button
                mt={4}
                colorScheme="primary"
                type="button"
                onClick={handleAddItem}
              >
                Add new item
              </Button>

              <Flex mt={4}>
                {/* <FormControl flex="1" mr={2}>
                  <FormLabel>Total</FormLabel>
                  <Input
                    type="number"
                    name="total"
                    id="total"
                    value={formik.values.total}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    readOnly
                  />
                  {formik.touched.total && formik.errors.total && (
                    <Text color="red">{formik.errors.total}</Text>
                  )}
                </FormControl> */}
              </Flex>
              <Flex justifyContent={"flex-end"}>
                <Button mt={6} colorScheme="primary" type="submit">
                  {loading ? (
                    <Spinner color="white" size={"md"} />
                  ) : (
                    <Text>Create Invoice</Text>
                  )}
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
