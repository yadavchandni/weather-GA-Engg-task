import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

//css modules
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: "turquoise",
    padding: " 3%",
    margin: "12%",
    marginLeft: "40%",
  },
}));

const CountryDetails = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();

  const details = useSelector((state) => {
    return state.country.data;
  });
  
  console.log(details);

  // if(!details.name){
  //     return(
  //         alert('this is not found ')
  //     )

  // }

  return (
    <List className={classes.root}>
      <ListItem>
        <Avatar src={details.flag}></Avatar>
      </ListItem>
      <ListItem>
        <ListItemText>Country Name:</ListItemText>
        <ListItemText>{details.name}</ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText>Population:</ListItemText>
        <ListItemText>{details.population}</ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText> Latlag :</ListItemText>
        <ListItemText>{details.latlng}</ListItemText>
      </ListItem>

      <Link to={{ pathname: "/weather-details/" + details.capital }}>
        <Button variant="contained" className="check-weather">
          Check Capital Weather
        </Button>
      </Link>
    </List>
  );
};
export default CountryDetails;
