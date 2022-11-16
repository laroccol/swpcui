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
  return (
    <Box display="flex" alignItems="flex-start" gap={8} margin={8}>
      <Stack flex={1} spacing={5}>
        <Card paddingX={10}>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            gap={5}
          >
            <Heading>SWPC</Heading>
            <Icon as={Gi3DStairs} fontSize="6xl" />
          </Box>
        </Card>
        <Card paddingY={10} paddingX={0}>
          <Stack spacing={8}>
            <Stack spacing={2} paddingLeft={10}>
              <Heading>Main</Heading>
              <Text fontSize="13px" color="Highlight">
                Select a category dropdown
              </Text>
            </Stack>
            <Divider />
            <Box>
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
                        borderLeft: "8px solid Highlight",
                      }}
                    >
                      <Box display="flex" alignItems="center">
                        <Icon as={icon} fontSize="2xl" marginX={5} />

                        <Text fontSize="sm" fontWeight="semibold">
                          {name.toUpperCase()}
                        </Text>
                      </Box>
                    </Box>
                  </Link>
                  // </NextLink>
                );
              })}
            </Box>
          </Stack>
        </Card>
      </Stack>
      <Box flex={4}>{children}</Box>
    </Box>
  );
}
