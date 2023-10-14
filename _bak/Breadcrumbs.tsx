import { Breadcrumbs as JoyBreadcrumbs } from "@mui/joy";

type Props = {
  children: React.ReactNode;
};

const Breadcrumbs = ({ children }: Props) => {
  return (
    <JoyBreadcrumbs
      aria-label="breadcrumbs"
      separator="›"
      sx={{ px: 2, mb: 2 }}
    >
      {children}
    </JoyBreadcrumbs>
  );
};

export default Breadcrumbs;
