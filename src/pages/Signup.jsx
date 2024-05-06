import { useEffect } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Spinner,
  //   useToast,
  //   Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import useShowPassword from "../hooks/useShowPassword";

const Signup = () => {
  //   const toast = useToast();
  const navigate = useNavigate();
  const { showPassword, handleShowPassword } = useShowPassword();
  const { loading, signup, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);
  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      firstname: Yup.string().required("First name is required"),
      lastname: Yup.string().required("Last name is required"),
      phoneNumber: Yup.string()
        .matches(/^\d{11}$/, "Invalid phone number (10 digits)")
        .required("Phone number is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      await signup(
        values.email,
        values.firstname,
        values.lastname,
        values.password,
        values.phoneNumber
      );
      formik.resetForm();
    },
  });
  return (
    <Box
      padding={"3%"}
      fontFamily={"IBM Plex Sans"}
      width={"80%"}
      margin={"auto"}
      marginTop={"5%"}
      bg={"primary.500"}
      borderRadius={"12px"}
    >
      <Text
        as={"h2"}
        fontSize={"20px"}
        fontWeight={500}
        mb={"10px"}
        color={"#FFF"}
      >
        Signup to SwyftInvoice
      </Text>
      <Text
        as={"p"}
        fontSize={"14px"}
        fontWeight={400}
        mb={"10px"}
        color={"#FFF"}
      >
        Create your account to get started with making stress free invoices
      </Text>
      <Box p={6} borderRadius="md" bg="white" boxShadow="md">
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              variant={"filled"}
              type="text"
              focusBorderColor="primary.300"
              name="firstname"
              id="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              //   required
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <Text color="red">{formik.errors.firstname}</Text>
            )}
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Last Name</FormLabel>
            <Input
              variant={"filled"}
              type="text"
              focusBorderColor="primary.300"
              name="lastname"
              id="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              //   required
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <Text color="red">{formik.errors.lastname}</Text>
            )}
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              variant={"filled"}
              type="text"
              focusBorderColor="primary.300"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              //   required
            />
            {formik.touched.email && formik.errors.email && (
              <Text color="red">{formik.errors.email}</Text>
            )}
          </FormControl>
          <FormControl mt={4} position={"relative"}>
            <FormLabel>Password</FormLabel>
            <Input
              variant={"filled"}
              type={showPassword ? "text" : "password"}
              focusBorderColor="primary.300"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              //   required
            />
            <Button
              position={"absolute"}
              right={"10px"}
              top={"30px"}
              bg={"transparent"}
              _hover={{ bg: "transparent" }}
              onClick={handleShowPassword}
            >
              {showPassword ? (
                <FaEyeSlash color="gray" />
              ) : (
                <FaEye color="gray" />
              )}
            </Button>
            {formik.touched.password && formik.errors.password && (
              <Text color="red">{formik.errors.password}</Text>
            )}
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              variant={"filled"}
              type="text"
              focusBorderColor="primary.300"
              name="phoneNumber"
              id="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              //   required
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <Text color="red">{formik.errors.phoneNumber}</Text>
            )}
          </FormControl>
          <Flex justifyContent={"flex-end"}>
            <Button mt={6} colorScheme="primary" type="submit">
              {loading ? (
                <Spinner color="white" size={"md"} />
              ) : (
                <Text>Register</Text>
              )}
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
