import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface Props extends ButtonProps {}

function ToolbarButton({ children, ...props }: Props) {
  return (
    <Button sx={{ minWidth: 0, px: 2 }} {...props}>
      {children}
    </Button>
  );
}

export default ToolbarButton;
