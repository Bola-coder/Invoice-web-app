/* eslint-disable react/prop-types */
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import routes from "../data/routes";
import { NavLink, useLocation } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useAuth } from "../contexts/AuthContext";

const SideNav = ({ isMobile }) => {
  const location = useLocation();
  const isActivePath = (path) => location.pathname.startsWith(path);
  const { logout } = useAuth();

  return (
    <Box
      as="nav"
      fontFamily={"IBM Plex Sans"}
      bg={"primary.500"}
      height={"100%"}
      maxHeight={"100%"}
      overflowY={"hidden"}
      shadow={"lg"}
      display={{ base: isMobile ? "block" : "none", lg: "block" }}
      position={{ base: "fixed", lg: "inherit" }}
      top={"0"}
      left={"0"}
      width={{ base: "80%", sm: "50%", lg: "auto" }}
      zIndex={"1000"}
    >
      <Box height={"10vh"} maxHeight={"8vh"}>
        <Text
          as={"h1"}
          color={"primary.100"}
          fontSize={"32px"}
          fontWeight={600}
          display={{ base: "none", lg: "block" }}
          p={4}
        >
          Swyft
          <Text as={"span"} color={"#FFF"}>
            Invoice
          </Text>
        </Text>
      </Box>
      <Flex justifyContent={"space-between"} flexDir={"column"} height={"90%"}>
        <Box mt={"10px"}>
          {routes.map(
            (route, index) =>
              route.position === "top" && (
                <NavLink key={index} to={route.path}>
                  <Box p={4} display={"flex"} alignItems={"center"}>
                    {isActivePath(route.path) ? (
                      <route.activeIcon
                        size={22}
                        style={{
                          marginRight: "10px",
                        }}
                        color={isActivePath(route.path) ? "#BFDB38" : "#FFF"}
                      />
                    ) : (
                      <route.icon
                        size={22}
                        style={{
                          marginRight: "10px",
                        }}
                        color={isActivePath(route.path) ? "#BFDB38" : "#FFF"}
                      />
                    )}
                    <Text
                      as={"span"}
                      href={route.path}
                      color={isActivePath(route.path) ? "#BFDB38" : "#FFF"}
                      display={"block"}
                      fontSize={{ base: "16px", md: "20px" }}
                      fontWeight={isActivePath(route.path) ? 600 : 400}
                    >
                      {route.name}
                    </Text>
                  </Box>
                </NavLink>
              )
          )}
        </Box>
        <Box mt={"10px"} paddingBottom={"20px"}>
          {routes.map(
            (route, index) =>
              route.position === "bottom" && (
                <NavLink key={index} to={route.path}>
                  <Box p={4} display={"flex"}>
                    {isActivePath(route.path) ? (
                      <route.activeIcon
                        size={22}
                        style={{
                          marginRight: "10px",
                        }}
                        color={isActivePath(route.path) ? "#BFDB38" : "#FFF"}
                      />
                    ) : (
                      <route.icon
                        size={22}
                        style={{
                          marginRight: "10px",
                        }}
                        color={isActivePath(route.path) ? "#BFDB38" : "#FFF"}
                      />
                    )}

                    <Text
                      as={"span"}
                      href={route.path}
                      color={isActivePath(route.path) ? "#BFDB38" : "#FFF"}
                      display={"block"}
                      _hover={{ textDecoration: "none" }}
                      fontSize={{ base: "16px", md: "20px" }}
                      fontWeight={isActivePath(route.path) ? 600 : 400}
                    >
                      {route.name}
                    </Text>
                  </Box>
                </NavLink>
              )
          )}
          <Box p={4} display={"flex"} alignItems={"center"}>
            <Button variant={"outline"} onClick={logout}>
              <MdLogout
                size={"20"}
                color="#BFDB38"
                style={{ marginRight: "10px" }}
              />
              <Text
                as={"span"}
                color="#BFDB38"
                display={"block"}
                _hover={{ textDecoration: "none" }}
                fontSize={"20px"}
                fontWeight={500}
              >
                Logout
              </Text>
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SideNav;
