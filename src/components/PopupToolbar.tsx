import { Card, CardContent, IconButton, Sheet, styled } from "@mui/joy";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useContext } from "react";
import { SelectionContext } from "@/context/SelectionContext";

type Props = {};

const ToolbarWrapper = styled("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 4;
`;

const PopupToolbar = (props: Props) => {
  const { selectedSymbol } = useContext(SelectionContext);
  return (
    <ToolbarWrapper>
      <Card
        sx={{
          boxShadow: "0 0 10px 0 rgba(0,0,0, .25)",
          p: 1,
        }}
      >
        <CardContent>
          <Sheet
            sx={{
              whiteSpace: "nowrap",
              p: 0,
            }}
          >
            <IconButton variant="plain" color="danger">
              <ClearIcon />
            </IconButton>
          </Sheet>
        </CardContent>
      </Card>
    </ToolbarWrapper>
  );
};

export default PopupToolbar;
