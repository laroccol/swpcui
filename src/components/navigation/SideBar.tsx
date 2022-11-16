import { useRouter } from "next/router";
import Card from "components/Card";
import {
  Box,
  Heading,
  Link,
  Text,
  Stack,
  Menu,
  Icon,
  Divider,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  AiFillDiff,
  AiFillAlert,
  AiFillCiCircle,
  AiFillDatabase,
  AiFillAndroid,
} from "react-icons/ai";

import { Gi3DStairs } from "react-icons/gi";

interface SideBarProps {
  children?: React.ReactNode;
}
export default function SideBar({ children }: SideBarProps) {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Stack spacing={8} padding={8} height="100vh">
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        alignSelf="center"
        gap={5}
      >
        <Heading>SWPC</Heading>
        <Icon as={Gi3DStairs} fontSize="6xl" />
      </Box>
      <Card paddingX={8} paddingY={3} alignSelf="center">
        <Stack spacing={8}>
          {/* <Stack spacing={2} paddingLeft={10}>
            <Heading>Main</Heading>
            <Text fontSize="13px" color="Highlight">
              Select a category dropdown
            </Text>
          </Stack>
          <Divider /> */}
          <Flex justifyContent="center">
            {[
              { name: "Maintenance", icon: AiFillDiff },
              { name: "User", icon: AiFillAlert },
              { name: "Manager", icon: AiFillCiCircle },
              { name: "Database", icon: AiFillDatabase },
              { name: "Administration", icon: AiFillAndroid },
            ].map(({ name, icon }) => {
              return (
                // <NextLink href="/" passHref>
                <Link href="/" variant="MenuLink">
                  <Box
                    padding={4}
                    transition="border 0.1s ease-in"
                    _hover={{
                      background:
                        "linear-gradient(-90deg, rgba(70,159,246,0) 0%, rgba(70,159,246,0.13209033613445376) 50%, rgba(70,159,246,0.4906337535014006) 100%)",
                      borderBottom: "8px solid Highlight",
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Icon
                        as={icon}
                        color="linkedin.300"
                        fontSize="2xl"
                        marginRight={5}
                      />

                      <Text fontSize="sm" fontWeight="semibold">
                        {name.toUpperCase()}
                      </Text>
                    </Box>
                  </Box>
                </Link>
                // </NextLink>
              );
            })}
          </Flex>
        </Stack>
      </Card>
      {children}
    </Stack>
  );
}
