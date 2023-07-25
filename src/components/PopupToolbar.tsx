import { Card, CardContent, IconButton, Sheet, styled } from "@mui/joy";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useContext } from "react";
import { SelectionContext } from "@/context/SelectionContext";

type Props = {};

const ToolbarWrapper = styled("div")`
  position: absolute;
  left: 0;
  z-index: 4;
`;

const PopupToolbar = (props: Props) => {
  const { selectedSymbol } = useContext(SelectionContext);

  const target =
    selectedSymbol && selectedSymbol.id
      ? document.getElementById(selectedSymbol.id)
      : null;
  const coords = { x: 0, y: 0 };
  if (target) {
    const targetCoords = target.getBoundingClientRect();
    console.log(targetCoords);
    coords["x"] = targetCoords.x + targetCoords.width;
    coords["y"] = targetCoords.y - 56;
  }

  return (
    <ToolbarWrapper
      style={{
        left: coords.x,
        top: coords.y,
      }}
    >
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
