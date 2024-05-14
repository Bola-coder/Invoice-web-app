/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Spinner,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useInvoiceContext } from "../contexts/InvoiceContext";
// import Layout from "../components/Layout";

const AddPayment = ({
  isOpen,
  handleClose,
  handleSubmit,
  invoiceId,
  payments,
}) => {
  const { loading } = useInvoiceContext();

  const formik = useFormik({
    initialValues: {
      invoiceId: invoiceId || "",
      payments: payments?.payments || [
        { paymentMethod: "cash", amount: 0, date: "" },
      ],
    },
    validationSchema: Yup.object({
      invoiceId: Yup.string().required("Invoice ID is required"),
      payments: Yup.array().of(
        Yup.object().shape({
          paymentMethod: Yup.string().required("Payment method is required"),
          amount: Yup.number()
            .min(0.01, "Amount must be greater than zero")
            .required("Amount is required"),
          date: Yup.date().required("Payment date is required"),
        })
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
      formik.resetForm();
      handleClose();
    },
  });

  const handleAddPayment = () => {
    const payments = formik.values.payments.concat({
      paymentMethod: "cash",
      amount: 0,
      date: "",
    });
    formik.setFieldValue("payments", payments);
  };

  const handleRemovePayment = (index) => {
    const payments = [...formik.values.payments];
    payments.splice(index, 1);
    formik.setFieldValue("payments", payments);
  };

  return (
    <Box>
      {/* <Button colorScheme="primary" onClick={() => isOpen}>
        Open Invoice Payment Modal
      </Button> */}
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent fontFamily={"IBM Plex Sans"}>
          <ModalHeader>Create Invoice Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={formik.handleSubmit}>
              <Box>
                <FormControl mt={4}>
                  <FormLabel>Invoice ID</FormLabel>
                  <Input
                    type="text"
                    name="invoiceId"
                    value={formik.values.invoiceId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    readOnly
                  />
                  {formik.touched.invoiceId && formik.errors.invoiceId && (
                    <Text color="red">{formik.errors.invoiceId}</Text>
                  )}
                </FormControl>
                {formik.values.payments.map((payment, index) => (
                  <FormControl key={index} mt={4}>
                    <FormLabel>Payment {index + 1}</FormLabel>
                    <Select
                      name={`payments[${index}].paymentMethod`}
                      value={payment.paymentMethod}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      mt={"10px"}
                    >
                      <option value="cash">Cash</option>
                      <option value="cheque">Cheque</option>
                      <option value="bank-transfer">Bank Transfer</option>
                      <option value="credit-card">Credit Card</option>
                      <option value="other">Other</option>
                    </Select>
                    {formik.touched.payments?.[index]?.paymentMethod &&
                      formik.errors.payments?.[index]?.paymentMethod && (
                        <Text color="red">
                          {formik.errors.payments[index].paymentMethod}
                        </Text>
                      )}
                    <Input
                      type="number"
                      name={`payments[${index}].amount`}
                      placeholder="Amount"
                      value={payment.amount}
                      onChange={formik.handleChange}
                      required
                      mt={"10px"}
                    />
                    {formik.touched.payments?.[index]?.amount &&
                      formik.errors.payments?.[index]?.amount && (
                        <Text color="red">
                          {formik.errors.payments[index].amount}
                        </Text>
                      )}
                    <Input
                      type="date"
                      name={`payments[${index}].date`}
                      placeholder="Payment Date"
                      value={payment.date}
                      onChange={formik.handleChange}
                      required
                      mt={"10px"}
                    />
                    {formik.touched.payments?.[index]?.date &&
                      formik.errors.payments?.[index]?.date && (
                        <Text color="red">
                          {formik.errors.payments[index].date}
                        </Text>
                      )}
                    {index > 0 && (
                      <Button
                        type="button"
                        onClick={() => handleRemovePayment(index)}
                        mt={2}
                      >
                        Remove Payment
                      </Button>
                    )}
                  </FormControl>
                ))}
                <Button
                  mt={4}
                  colorScheme="primary"
                  type="button"
                  onClick={handleAddPayment}
                >
                  Add Payment
                </Button>
              </Box>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="primary"
              mr={3}
              onClick={formik.handleSubmit}
              disabled={loading}
            >
              {loading ? <Spinner /> : "Create Invoice Payment"}
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddPayment;
