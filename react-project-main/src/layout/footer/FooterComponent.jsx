// FooterComponent
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { Favorite } from "@mui/icons-material";
import ROUTES from "../../routes/ROUTES";
import { useNavigate } from "react-router-dom";

const FooterComponent = () => {
  const navigate = useNavigate();

  return (
    <Paper elevation={4} sx={{ position: "sticky", mt: 2 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="favotite" icon={<Favorite />} onClick={() => navigate(ROUTES.FAVORITE_CARDS)} />
      </BottomNavigation>
    </Paper>
  );
};

export default FooterComponent;
