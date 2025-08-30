import { Box } from "@chakra-ui/react";

interface BlurCircleProps {
  size?: string | number;   // diameter (e.g., "200px")
  color?: string;           // circle color
  top?: string | number;    // position
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  opacity?: number;         // blur opacity
  blur?: string | number;   // blur amount (e.g., "120px")
  zIndex?: number;          // layering
}

export const BlurCircle = ({
  size = "200px",
  color = "#9D1800",
  top,
  left,
  right,
  bottom,
  opacity = 0.7,
  blur = "300px",
  zIndex = 10,
}: BlurCircleProps) => {
  return (
    <Box
      position="absolute"
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      w={size}
      h={size}
      borderRadius="50%"
      bg={color}
      filter={`blur(${blur})`}
      opacity={opacity}
      zIndex={zIndex}
    />
  );
};
