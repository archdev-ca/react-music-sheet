import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Link,
  Option,
  Select,
  Stack,
  Typography,
} from "@mui/joy";
import { useParams, Link as RouterLink } from "react-router-dom";
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
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Add from "@mui/icons-material/Add";
import { NoteCursorMap } from "@/interfaces/images";
import SheetView from "@/components/SheetView";
import { BeatType, SheetRowInterface } from "@/interfaces";
import { FormInterface, ToolData } from "@/interfaces/common";
import { Home, PlayArrow, Save } from "@mui/icons-material";
import { getToneSequence, playPreview, preloadAudio } from "@/utils";
import { produce } from "immer";
import StickyBox from "react-sticky-box";
import { SheetContext } from "@/context/SheetContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import Toolbar from "@/components/Toolbar";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  sheetData: SheetRowInterface;
}

const SheetCreate = ({ sheetData }: Props) => {
  const {
    activeTool,
    setActiveTool,
    timeSignature,
    setTimeSignature,
    DEFAULT_CLEF_DATA,
  } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInterface>();

  const { setSheetData } = useContext(SheetContext);

  const getCursor = (toolData: ToolData | null) => {
    if (!toolData) {
      return null;
    }
    const restImageMap: NoteCursorMap = {
      1: {
        image: wholeRest,
        x: "7",
        y: "7",
      },
      2: {
        image: halfRest,
        x: "8",
        y: "36",
      },
      4: {
        image: quarterRest,
        x: "8",
        y: "36",
      },
      8: {
        image: eightRest,
        x: "8",
        y: "36",
      },
      16: {
        image: sixteenthRest,
        x: "8",
        y: "36",
      },
    };
    const noteImageMap: NoteCursorMap = {
      1: {
        image: wholeNote,
        x: "7",
        y: "7",
      },
      2: {
        image: halfNote,
        x: "8",
        y: "36",
      },
      4: {
        image: quarterNote,
        x: "8",
        y: "36",
      },
      8: {
        image: eightNote,
        x: "8",
        y: "36",
      },
      16: {
        image: sixteenthNote,
        x: "8",
        y: "36",
      },
    };
    if (toolData.type === "note" && noteImageMap[toolData.length]) {
      return noteImageMap[toolData.length];
    }

    if (toolData.type === "rest" && restImageMap[toolData.length]) {
      return restImageMap[toolData.length];
    }
    return null;
  };

  const onSubmit: SubmitHandler<FormInterface> = (data) => {
    console.log("Data: ", data);
  };

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

  const handleClickAddStaff = () => {
    const newState = produce(sheetData, (draft) => {
      draft.sheetData.staves.push(DEFAULT_CLEF_DATA);
    });
    setSheetData(newState);
  };

  const cursor = getCursor(activeTool);

  return (
    <>
      <Breadcrumbs>
        <Link component={RouterLink} to="/">
          <Home fontSize="inherit" sx={{ mr: 0.5 }} />
          Music Sheets
        </Link>
        <Typography>Create</Typography>
      </Breadcrumbs>
      <Box sx={{ px: 2 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            alignContent="center"
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            marginBottom={2}
          >
            <Typography level="h4">Create Sheet Music</Typography>
            <Button
              // onClick={handleClickSave}
              type="submit"
              sx={{
                alignSelf: "center",
              }}
              color="success"
            >
              <Save sx={{ mr: 0.5 }} fontSize="inherit" />
              Save Changes
            </Button>
          </Stack>
          <StickyBox offsetTop={16} style={{ zIndex: 5 }}>
            <Toolbar />
          </StickyBox>
          <Card>
            <CardContent>
              <SheetView data={sheetData} register={register} />
            </CardContent>
          </Card>
        </form>
      </Box>
    </>
  );
};

export default SheetCreate;
