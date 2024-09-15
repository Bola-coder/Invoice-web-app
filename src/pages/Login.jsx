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
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import useShowPassword from "../hooks/useShowPassword";

const Login = () => {
  //   const toast = useToast();
  const navigate = useNavigate();
  const { showPassword, handleShowPassword } = useShowPassword();
  const { loading, login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      await login(values.email, values.password);
      //   formik.resetForm();
    },
  });
  return (
    <Box
      padding={"3%"}
      fontFamily={"IBM Plex Sans"}
      width={"50%"}
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
        Login to SwyftInvoice
      </Text>
      <Text
        as={"p"}
        fontSize={"14px"}
        fontWeight={400}
        mb={"10px"}
        color={"#FFF"}
      >
        Login to your account and continue making stress free invoices
      </Text>
      <Box p={6} borderRadius="md" bg="white" boxShadow="md">
        <form onSubmit={formik.handleSubmit}>
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

          <Flex justifyContent={"flex-end"}>
            <Button mt={6} colorScheme="primary" type="submit">
              {loading ? (
                <Spinner color="white" size={"md"} />
              ) : (
                <Text>Login</Text>
              )}
            </Button>
          </Flex>
        </form>
        <Box mt={8} display={"flex"} justifyContent={"flex-end"}>
          <Text as="p" fontWeight={500} fontSize={20}>
            Don&apos;t have an account?{" "}
            <Text as={"span"} color={"primary.500"} fontWeight={600}>
              <Link to={"/signup"}>Register</Link>
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
