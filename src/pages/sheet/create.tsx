import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import CardHeader from "@/components/CardHeader";
import Stack from "@/components/Stack";
import Staff from "@/components/Staff";

const SheetCreate = () => {
  return (
    <Card>
      <CardHeader>
        <Stack>
          <h2 className="text-2xl">Create Sheet Music</h2>
        </Stack>
      </CardHeader>
      <CardContainer>
        <Staff />
      </CardContainer>
    </Card>
  );
};

export default SheetCreate;
