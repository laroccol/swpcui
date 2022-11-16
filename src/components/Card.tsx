import { Box } from "@chakra-ui/react";

interface CardProps {
  children?: React.ReactNode;
  [x: string]: any;
}

export default function Card({ children, ...rest }: CardProps) {
  return (
    <Box
      bgColor="white"
      padding={4}
      borderRadius={20}
      boxShadow="rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
      {...rest}
    >
      {children}
    </Box>
  );
}
