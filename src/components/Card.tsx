import { Box } from "@chakra-ui/react";

interface CardProps {
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  [x: string]: any;
}

export default function Card({ size, children, ...rest }: CardProps) {
  let dimensions = "25vw";
  if (size === "sm") dimensions = "10vw";
  else if (size === "lg") dimensions = "40vw";

  return (
    <Box
      bgColor="orange"
      borderRadius={15}
      padding={3}
      width={dimensions}
      boxShadow="xl"
      {...rest}
    >
      <Box bgColor="white" padding={5} borderRadius={15} boxShadow="lg">
        {children}
      </Box>
    </Box>
  );
}
