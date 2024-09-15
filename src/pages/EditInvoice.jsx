import { useEffect } from "react";
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
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useClientContext } from "../contexts/ClientContext";
import { useInvoiceContext } from "../contexts/InvoiceContext";
import Layout from "../components/Layout";

const EditInvoice = () => {
  const { id } = useParams();
  //   const history = useHistory();
  const { clients } = useClientContext();
  const { loading, invoiceDetails, getInvoiceDetails, updateInvoice } =
    useInvoiceContext();

  useEffect(() => {
    console.log(id);
    const fetchInvoice = async () => {
      const data = await getInvoiceDetails(id);
      console.log("Data is", data);
    };
    fetchInvoice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.log("Details is", invoiceDetails);

  useEffect(() => {
    if (invoiceDetails) {
      formik.setValues({
        invoiceNumber: invoiceDetails.invoiceNumber,
        client: invoiceDetails.client?._id,
        invoiceDate: invoiceDetails.invoiceDate,
        dueDate: invoiceDetails.dueDate,
        items: invoiceDetails.items,
        status: invoiceDetails.status,
        amountPaid: invoiceDetails.amountPaid,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, invoiceDetails]);

  const formik = useFormik({
    initialValues: {
      invoiceNumber: invoiceDetails?.invoiceNumber || "",
      client: invoiceDetails?.client || "",
      invoiceDate: invoiceDetails?.invoiceDate || "",
      dueDate: invoiceDetails?.dueDate || "",
      items: invoiceDetails?.items || [{ itemName: "", quantity: 0, price: 0 }],
      status: invoiceDetails?.status || "draft",
      amountPaid: invoiceDetails?.amountPaid || 0,
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
      status: Yup.string().required("Status is required"),
      amountPaid: Yup.number()
        .min(0, "Amount paid must be non-negative")
        .required("Amount paid is required"),
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line no-unused-vars
      const itemsWithoutId = values.items.map(({ _id, ...rest }) => rest);

      // Create a new values object without the id fields in the items array
      const valuesWithoutId = {
        ...values,
        items: itemsWithoutId,
      };
      console.log("Values submitted", valuesWithoutId);
      updateInvoice(id, valuesWithoutId);
      //   history.push("/invoices");
    },
  });

  function getFormattedDate(inputDate) {
    const date = new Date(inputDate);
    // console.log(date);
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return year + "-" + month + "-" + day;
  }

  console.log("Formik", formik.values);

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

  if (loading || Object.keys(invoiceDetails).length === 0) {
    return (
      <Layout>
        <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
          <Spinner size="xl" color="primary" />
        </Flex>
      </Layout>
    );
  }

  return (
    <Box fontFamily={"IBM Plex Sans"} bg={"#E7ECF0"}>
      <Layout title={"Edit Invoice"}>
        <Box>
          <Text as={"h2"} fontSize={"20px"} fontWeight={500} mb={"10px"}>
            Edit Invoice
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
                  readOnly
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
                    value={getFormattedDate(formik.values.invoiceDate)}
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
                    value={getFormattedDate(formik.values.dueDate)}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.dueDate && formik.errors.dueDate && (
                    <Text color="red">{formik.errors.dueDate}</Text>
                  )}
                </FormControl>
              </Flex>

              {formik.values?.items?.map((item, index) => (
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
              <FormControl mt={4}>
                <FormLabel>Status</FormLabel>
                <Select
                  id="status"
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Select status"
                >
                  <option value="draft">Draft</option>
                  <option value="sent">Sent</option>
                  <option value="not-paid">Not Paid</option>
                  <option value="partially-paid">Partially Paid</option>
                  <option value="paid">Paid</option>
                </Select>
                {formik.touched.status && formik.errors.status && (
                  <Text color="red">{formik.errors.status}</Text>
                )}
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Amount Paid</FormLabel>
                <Input
                  type="number"
                  name="amountPaid"
                  id="amountPaid"
                  value={formik.values.amountPaid}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.amountPaid && formik.errors.amountPaid && (
                  <Text color="red">{formik.errors.amountPaid}</Text>
                )}
              </FormControl>
              <Flex justifyContent={"flex-end"}>
                <Button mt={6} colorScheme="primary" type="submit">
                  {loading ? (
                    <Spinner color="white" size={"md"} />
                  ) : (
                    <Text>Update Invoice</Text>
                  )}
                </Button>
              </Flex>
            </form>
          </Box>
        </Box>
        <h2>Yayy</h2>
      </Layout>
    </Box>
  );
};

export default EditInvoice;
