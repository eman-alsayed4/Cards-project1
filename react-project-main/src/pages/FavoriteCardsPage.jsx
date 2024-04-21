import { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import CardComponent from "../components/CardComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import axios from "axios";
import LoginContext from "../store/loginContext";
import normalizeHome from "./HomePage/normalizeHome";


const FavoriteCardsPage = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);



  const unlike = async (id) => {
      //axios
      console.log("you unliked card", id);
      try {
        let { data } = await axios.patch("/cards/" + id);
        setFavoriteCards(favoriteCards.filter(c => c._id !== id));
        //update cards from server
      } catch (err) {
        console.log("error from axios (like)", err);
      }
  }
  useEffect(() => {
    if (!login) {
      // Redirect to login page if user is not logged in
      navigate(ROUTES.LOGIN);
      return;
    }
    
    axios
    .get("/cards")
    .then(({ data }) => {
      setFavoriteCards(normalizeHome(data).filter(c => c.likes.includes(login._id)));
    })
    .catch((err) => {
      console.log("error from axios", err);
    });
  }, [login, navigate]);

  const handleDeleteCard = (id) => {
    // Implement logic to delete card from favorites
    console.log("Deleting card with ID:", id);
  };

  // Render favorite cards
  return (
    <Grid container spacing={2}>
      {favoriteCards.map((card) => (
        <Grid item lg={3} md={6} xs={12} key={card._id}>
          <CardComponent
            id={card._id}
            title={card.title}
            subtitle={card.subtitle}
            img={card.image.url}
            phone={card.phone}
            address={card.address}
            cardNumber={card.bizNumber}
            liked={true}
            onLike ={unlike}
            onDelete={handleDeleteCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FavoriteCardsPage;