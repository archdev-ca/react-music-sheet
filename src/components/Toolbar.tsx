import { Box, Card, IconButton, Option, Select } from "@mui/joy";
import wholeNote from "@/assets/notes/whole.png";
import halfNote from "@/assets/notes/half.png";
import quarterNote from "@/assets/notes/quarter.png";
import eightNote from "@/assets/notes/eighth.png";
import sixteenthNote from "@/assets/notes/sixteenth.png";
import wholeRest from "@/assets/rest/wholeRest.png";
import halfRest from "@/assets/rest/halfRest.png";
import quarterRest from "@/assets/rest/quarterRest.png";
import eightRest from "@/assets/rest/eightRest.png";
import sixteenthRest from "@/assets/rest/sixteenthRest.png";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import { BeatType } from "@/interfaces";
import { PlayArrow } from "@mui/icons-material";
import { getToneSequence, playPreview, preloadAudio } from "@/utils";
import { SheetContext } from "@/context/SheetContext";

type Props = {
  readOnly?: boolean;
};

const Toolbar = ({ readOnly }: Props) => {
  const { activeTool, setActiveTool, setTimeSignature } =
    useContext(AppContext);

  const { sheetData, timeSignature } = useContext(SheetContext);

  const handleClickNote = (type: BeatType, length: number) => {
    if (activeTool?.type === type && activeTool?.length === length) {
      setActiveTool(null);
    } else {
      setActiveTool({
        type,
        length,
      });
    }
  };

  const handleChangeSignature = (
    e: React.SyntheticEvent | null,
    value: string | null
  ) => {
    let sig = value?.split("/");
    setTimeSignature({
      beatsPerBar: Number(sig?.[0]),
      beat: Number(sig?.[1]),
    });
  };

  const handlePreviewMusic = () => {
    const [toneSequence, audioMap] = getToneSequence(
      sheetData.sheetData,
      timeSignature
    );
    preloadAudio(audioMap, (audioMap) => {
      playPreview(toneSequence, audioMap);
    });
  };

  const handleDocumentKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setActiveTool(null);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleDocumentKeyPress, false);
    return () => {
      document.removeEventListener("keydown", handleDocumentKeyPress);
    };
  }, []);

  return (
    <Card
      sx={{
        mb: 2,
        display: "flex",
        flexDirection: "row",
        position: "relative",
        zIndex: 2,
      }}
    >
      {!readOnly ? (
        <>
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <IconButton
              variant={
                activeTool?.type === "note" && activeTool?.length === 1
                  ? "outlined"
                  : "plain"
              }
              onClick={() => {
                handleClickNote("note", 1);
              }}
            >
              <img
                src={wholeNote}
                alt=""
                style={{ width: "auto", height: " 10px" }}
              />
            </IconButton>
            <IconButton
              variant={
                activeTool?.type === "note" && activeTool?.length === 2
                  ? "outlined"
                  : "plain"
              }
              onClick={() => {
                handleClickNote("note", 2);
              }}
            >
              <img
                src={halfNote}
                alt=""
                style={{ width: "auto", height: " 24px" }}
              />
            </IconButton>
            <IconButton
              variant={
                activeTool?.type === "note" && activeTool?.length === 4
                  ? "outlined"
                  : "plain"
              }
              onClick={() => {
                handleClickNote("note", 4);
              }}
            >
              <img
                src={quarterNote}
                alt=""
                style={{ width: "auto", height: " 24px" }}
              />
            </IconButton>
            <IconButton
              variant={
                activeTool?.type === "note" && activeTool?.length === 8
                  ? "outlined"
                  : "plain"
              }
              onClick={() => {
                handleClickNote("note", 8);
              }}
            >
              <img
                src={eightNote}
                alt=""
                style={{ width: "auto", height: " 24px" }}
              />
            </IconButton>
            <IconButton
              variant={
                activeTool?.type === "note" && activeTool?.length === 16
                  ? "outlined"
                  : "plain"
              }
              onClick={() => {
                handleClickNote("note", 16);
              }}
            >
              <img
                src={sixteenthNote}
                alt=""
                style={{ width: "auto", height: " 24px" }}
              />
            </IconButton>
            <Select
              defaultValue={`${timeSignature?.beatsPerBar}/${timeSignature?.beat}`}
              onChange={handleChangeSignature}
            >
              <Option value="4/4">4/4</Option>
              <Option value="3/4">3/4</Option>
              <Option value="2/4">2/4</Option>
              <Option value="2/2">2/2</Option>
              <Option value="3/8">3/8</Option>
              <Option value="6/8">6/8</Option>
              <Option value="9/8">9/8</Option>
            </Select>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              borderLeft: "1px dotted #bbb",
              pl: 2,
            }}
          >
            <IconButton
              variant={
                activeTool?.type === "rest" && activeTool?.length === 1
                  ? "outlined"
                  : "plain"
              }
              onClick={() => {
                handleClickNote("rest", 1);
              }}
            >
              <img
                src={wholeRest}
                alt=""
                style={{ width: "auto", height: " 7px" }}
              />
            </IconButton>
            <IconButton
              variant={
                activeTool?.type === "rest" && activeTool?.length === 2
                  ? "outlined"
                  : "plain"
              }
              onClick={() => {
                handleClickNote("rest", 2);
              }}
            >
              <img
                src={halfRest}
                alt=""
                style={{ width: "auto", height: " 7px" }}
              />
            </IconButton>
            <IconButton
              variant={
                activeTool?.type === "rest" && activeTool?.length === 4
                  ? "outlined"
                  : "plain"
              }
              onClick={() => {
                handleClickNote("rest", 4);
              }}
            >
              <img
                src={quarterRest}
                alt=""
                style={{ width: "auto", height: " 24px" }}
              />
            </IconButton>
            <IconButton
              variant={
                activeTool?.type === "rest" && activeTool?.length === 8
                  ? "outlined"
                  : "plain"
              }
              onClick={() => {
                handleClickNote("rest", 8);
              }}
            >
              <img
                src={eightRest}
                alt=""
                style={{ width: "auto", height: " 24px" }}
              />
            </IconButton>
            <IconButton
              variant={
                activeTool?.type === "rest" && activeTool?.length === 16
                  ? "outlined"
                  : "plain"
              }
              onClick={() => {
                handleClickNote("rest", 16);
              }}
            >
              <img
                src={sixteenthRest}
                alt=""
                style={{ width: "auto", height: " 24px" }}
              />
            </IconButton>
          </Box>
        </>
      ) : null}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          borderLeft: !readOnly ? "1px dotted #bbb" : "",
          pl: !readOnly ? 2 : 0,
        }}
      >
        <IconButton
          variant={
            activeTool?.type === "note" && activeTool?.length === 1
              ? "outlined"
              : "plain"
          }
          onClick={handlePreviewMusic}
        >
          <PlayArrow />
        </IconButton>
      </Box>
    </Card>
  );
};

export default Toolbar;
