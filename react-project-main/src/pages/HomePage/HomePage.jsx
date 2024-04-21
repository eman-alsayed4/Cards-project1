import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "../../components/CardComponent";
import { useContext, useEffect, useState , useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import normalizeHome from "./normalizeHome";
import LoginContext from "../../store/loginContext";
import { useSearchContext } from "../../store/searchContext";
import { toast } from "react-toastify";


//https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards
const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);
  const { searchQuery } = useSearchContext();

  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        console.log(normalizeHome(data));
        setDataFromServer(normalizeHome(data));
      })
      .catch((err) => {
        console.log("error from axios", err);
      });
  }, []);

  useEffect(() => {
    // Filter data based on the search text
    const filtered = dataFromServer.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [ searchQuery]);

  const handleDeleteCard = useCallback(async (id) => {
    try {
      const { data } = await axios.get("/cards/" + id);
      
      if (data.user_id === login._id) {
        await axios.delete(`/cards/${id}`);
        toast.success("Card deleted");
      }
      else{
        toast.error("You are not authorized to delete this card");
      }
    } catch (err) {
      console.log("Error from axios", err);
    }
    
    console.log({ dataFromServer });
  }, [login]);


  let dataFromServerFiltered = normalizeHome(
    dataFromServer,
    login ? login._id : undefined
  );
  if (!dataFromServerFiltered || !dataFromServerFiltered.length) {
    return <Typography>Could not find any items</Typography>;
  }


  const handleEditCard = (id) => {
    navigate(`${ROUTES.EDITCARD}/${id}`);
  };

  const handleLikeCard = async (id) => {
    //axios
    console.log("you liked card", id);
    try {
      let { data } = await axios.patch("/cards/" + id);
      console.log("data from axios (patch)", data);
      setDataFromServer((cDataFromServer) => {
        let cardIndex = cDataFromServer.findIndex((card) => card._id === id);
        if (cardIndex >= 0) {
          cDataFromServer[cardIndex] = data;
        }
        return [...cDataFromServer];
      });
      //update cards from server
    } catch (err) {
      console.log("error from axios (like)", err);
    }
  };
  
  return (
    <Grid container spacing={2}>
      {(filteredData.length > 0 ? filteredData : dataFromServer).map((item, index) => (
        <Grid item lg={3} md={6} xs={12} key={"carsCard" + index}>
          <CardComponent
            id={item._id}
            title={item.title}
            subtitle={item.subtitle}
            img={item.image.url}
            phone={item.phone}
            address={item.address}
            cardNumber={item.bizNumber}
            liked={login?._id && item.likes.includes(login._id)}
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}
            onLike={handleLikeCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;