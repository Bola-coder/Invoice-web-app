import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Spinner,
  Select,
  //   Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useClientContext } from "../contexts/ClientContext";
import { useCompanyContext } from "../contexts/CompanyContext";
import { useSubscriptionContext } from "../contexts/Subscription";
import Layout from "../components/Layout";

const CreateClient = () => {
  const { loading, createClient, createCompanyClient } = useClientContext();
  const { companies } = useCompanyContext();
  const { isSubscribed } = useSubscriptionContext();

  const formik = useFormik({
    initialValues: {
      company: "1",
      email: "",
      name: "",
      phoneNumber: "",
      address: "",
    },
    validationSchema: Yup.object({
      company: Yup.string().required("Company is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      name: Yup.string().required("Client name is required"),
      phoneNumber: Yup.string()
        .matches(/^\d{11}$/, "Invalid phone number (10 digits)")
        .required("Phone number is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);

      if (isSubscribed) {
        await createCompanyClient(values);
      } else {
        await createClient(values);
      }
      // formik.resetForm();
    },
  });

  return (
    <Box fontFamily={"IBM Plex Sans"} bg={"#E7ECF0"}>
      <Layout title={"Create Client"}>
        <Box>
          <Text as={"h2"} fontSize={"20px"} fontWeight={500} mb={"10px"}>
            Create Client
          </Text>
          <Box p={6} borderRadius="md" bg="white" boxShadow="md">
            <form onSubmit={formik.handleSubmit}>
              {isSubscribed && (
                <FormControl mt={4}>
                  <FormLabel>Company</FormLabel>
                  <Select
                    id="company"
                    name="company"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Select company"
                  >
                    {companies.map((company) => (
                      <option key={company._id} value={company._id}>
                        {company.name}
                      </option>
                    ))}
                  </Select>
                  {formik.touched.client && formik.errors.client && (
                    <Text color="red">{formik.errors.client}</Text>
                  )}
                </FormControl>
              )}
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <Text color="red">{formik.errors.name}</Text>
                )}
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <Text color="red">{formik.errors.email}</Text>
                )}
              </FormControl>
              <Flex mt={4}>
                <FormControl flex="1" mr={2}>
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    name="address"
                    vame="address"
                    id="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.address && formik.errors.address && (
                    <Text color="red">{formik.errors.address}</Text>
                  )}
                </FormControl>
                <FormControl flex="1" ml={2}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <Text color="red">{formik.errors.phoneNumber}</Text>
                  )}
                </FormControl>
              </Flex>
              <Flex justifyContent={"flex-end"}>
                <Button mt={6} colorScheme="primary" type="submit">
                  {loading ? (
                    <Spinner color="white" size={"md"} />
                  ) : (
                    <Text>Create Client</Text>
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

export default CreateClient;
