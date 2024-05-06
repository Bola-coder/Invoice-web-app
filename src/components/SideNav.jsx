import { Flex, Box, Image, Text } from "@chakra-ui/react";
import routes from "../data/routes";
import { NavLink, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  const isActivePath = (path) => location.pathname === path;

  return (
    <Box
      as="nav"
      fontFamily={"IBM Plex Sans"}
      bg={"primary.500"}
      height={"100%"}
      maxHeight={"100%"}
      overflowY={"hidden"}
    >
      <Text
        as={"h1"}
        color={"primary.100"}
        fontSize={"32px"}
        fontWeight={600}
        // textAlign={"center"}
        paddingTop={"10%"}
        px={4}
      >
        Swyft
        <Text as={"span"} color={"#FFF"}>
          Invoice
        </Text>
      </Text>
      <Flex justifyContent={"space-between"} flexDir={"column"} height={"90%"}>
        <Box mt={"10px"}>
          {routes.map(
            (route, index) =>
              route.position === "top" && (
                <NavLink key={index} to={route.path}>
                  <Box p={4} display={"flex"}>
                    <Image
                      src={
                        isActivePath(route.path) ? route.activeIcon : route.icon
                      }
                      alt={route.name}
                      marginRight={"10px"}
                    />
                    <Text
                      as={"span"}
                      href={route.path}
                      color={isActivePath(route.path) ? "#BFDB38" : "#FFF"}
                      display={"block"}
                      _hover={{ textDecoration: "none" }}
                      fontSize={"16px"}
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
                    <Image
                      src={
                        isActivePath(route.path) ? route.activeIcon : route.icon
                      }
                      alt={route.name}
                      marginRight={"10px"}
                    />
                    <Text
                      as={"span"}
                      href={route.path}
                      color={isActivePath(route.path) ? "#BFDB38" : "#FFF"}
                      display={"block"}
                      _hover={{ textDecoration: "none" }}
                      fontSize={"16px"}
                      fontWeight={isActivePath(route.path) ? 600 : 400}
                    >
                      {route.name}
                    </Text>
                  </Box>
                </NavLink>
              )
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default SideNav;
