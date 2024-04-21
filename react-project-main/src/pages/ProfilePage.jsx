import { useEffect , useState , useContext} from "react";
import axios from "axios";
import LoginContext from "../store/loginContext";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";


const ProfilePage = () => {
  const { login } = useContext(LoginContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    //axios call to get user data
    //useContext get user id
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`/users/${login._id}`);
        const userData = response.data;
        setUserData(userData);
        setLoading(false);
    } catch (error) {
      setError("Failed to fetch user data.");
        setLoading(false);
    }
  }
  fetchUserData();

  }, []);
  return (
    <Grid container justifyContent="center" spacing={2} style={{ marginTop: 20 }}>
    <Grid item xs={12} md={8}>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          Profile Page
        </Typography>
        {loading && <CircularProgress />}
        {error && <Alert severity="error">{error}</Alert>}
        {userData && (
          <div>
            <Typography variant="h6" gutterBottom style={{ color: "#2196f3" }}>
              Basic Details
            </Typography>
            <Divider style={{ marginBottom: 10 }} />
            <Typography variant="body1" gutterBottom>
              First Name: {userData.name.first}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Middle Name: {userData.name.middle}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Last Name: {userData.name.last}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: {userData.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: {userData.phone}
            </Typography>
            <Typography variant="h6" gutterBottom style={{ color: "#2196f3", marginTop: 20 }}>
              Address
            </Typography>
            <Divider style={{ marginBottom: 10 }} />
            <Typography variant="body1" gutterBottom>
              State: {userData.address.state}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Country: {userData.address.country}
            </Typography>
            <Typography variant="body1" gutterBottom>
              City: {userData.address.city}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Street: {userData.address.street}
            </Typography>
            <Typography variant="body1" gutterBottom>
              house Number : {userData.address.houseNumber}
            </Typography>
            <Typography variant="body1" gutterBottom>
              zip : {userData.address.zip}
            </Typography>
          </div>
        )}
      </Paper>
    </Grid>
  </Grid>
  );
};

export default ProfilePage;
