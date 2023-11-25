"use client";
import SheetView from "@/components/SheetView";
import ToolbarButton from "@/components/ToolbarButton";
import useAppStore from "@/store/app";
import { sheetAtom } from "@/store/sheet";
import { Home } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import { useEffect } from "react";

const SheetIndex = () => {
  const id = 0;
  const titles = useAppStore((state) => state.titles);
  const [data, setData] = useAtom(sheetAtom);

  useEffect(() => {
    if (id !== undefined && titles[Number(id)]) {
      setData(titles[Number(id)]);
    }
  }, [titles, id]);

  return (
    <>
      <Box sx={{ px: 2, py: 2 }}>
        <Breadcrumbs sx={{ my: 1, mb: 4 }}>
          <Link href="/" sx={{ display: "flex", alignItems: "center" }}>
            <Home fontSize="inherit" sx={{ mr: 0.5 }} />
            Music Sheets
          </Link>
          {data && data.title ? <Typography>{data.title}</Typography> : null}
        </Breadcrumbs>
        <Stack
          alignContent="center"
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          marginBottom={2}
        >
          <Typography variant="h4">View Music</Typography>
        </Stack>
        <Box sx={{ mb: 2 }}>
          <Card>
            <CardContent
              sx={{
                paddingBottom: (theme) => `${theme.spacing(2)} !important`,
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  alignItems: "stretch",
                  flexDirection: "row",
                  alignContent: "center",
                }}
                spacing={1}
                direction="row"
              >
                <ToolbarButton>
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 19 14"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <ellipse
                      cx={10}
                      cy={9}
                      rx={8}
                      ry={5}
                      fill="transparent"
                      stroke="inherit"
                      transform="skewY(-10)"
                      strokeWidth={2}
                    />
                  </svg>
                </ToolbarButton>
                <ToolbarButton>
                  <svg
                    width="12"
                    height="50"
                    viewBox="0 0 19 50"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <ellipse
                      cx={10}
                      cy={45}
                      rx={8}
                      ry={5}
                      fill="inherit"
                      transform="skewY(-10)"
                    />
                    <line
                      x1="17"
                      y1="45"
                      x2="17"
                      y2="0"
                      stroke="inherit"
                      strokeWidth={2}
                    />
                  </svg>
                </ToolbarButton>
              </Stack>
              {/* <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              stroke="currentColor"
            >
              <ellipse
                cx={10}
                cy={9}
                rx={8}
                ry={5}
                fill="transparent"
                stroke="inherit"
                transform="skewY(-10)"
                strokeWidth={2}
              />
            </svg>
            <svg
              width="19"
              height="50"
              viewBox="0 0 19 50"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              stroke="currentColor"
            >
              <ellipse
                cx={10}
                cy={45}
                rx={8}
                ry={5}
                fill="inherit"
                transform="skewY(-10)"
              />
              <line
                x1="17"
                y1="45"
                x2="17"
                y2="0"
                stroke="inherit"
                strokeWidth={2}
              />
            </svg> */}
            </CardContent>
          </Card>
        </Box>
        <SheetView />
      </Box>
    </>
  );
};
export default SheetIndex;
