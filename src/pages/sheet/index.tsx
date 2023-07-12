import Button from "@/components/Button";
import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import CardHeader from "@/components/CardHeader";
import Stack from "@/components/Stack";
import { PlusIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

const SheetIndex = () => {
  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate("/create");
  };

  return (
    <Card>
      <CardHeader>
        <Stack>
          <h2 className="text-2xl">Sheet Music</h2>
          <Button color="primary" onClick={handleClickCreate}>
            <PlusIcon className="mr-1" />
            Create New Sheet
          </Button>
        </Stack>
      </CardHeader>
      <CardContainer>
        <table className="w-full">
          <thead>
            <tr>
              <td className="p-2 border">Title</td>
              <td className="p-2 border">Author</td>
              <td className="p-2 border">Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Fur Elise</td>
              <td className="p-2 border">Ludwig Von Beethoven</td>
              <td className="p-2 border">
                <button>View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </CardContainer>
    </Card>
  );
};
export default SheetIndex;
