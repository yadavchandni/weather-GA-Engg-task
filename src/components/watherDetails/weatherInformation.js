//npm package
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, List, ListItem, ListItemText } from "@material-ui/core";
//action file 
import WeatherInfomationAction from "../../redux/Action/weatherInformationAction";

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

const WeatherInformation = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const name = (props.match.params.id);
  console.log("capital name there", name);

  useEffect(() => {
    dispatch(WeatherInfomationAction(name));
  }, []);

  
 const results = useSelector(state => state.weather.data.current)
  console.log(
    "Weather Infomation Action --- ",
    WeatherInfomationAction(results)
  );

  return (
    <List className={classes.root}>
      <h2>Weather Information</h2>
      <ListItem>
        {results?.weather_icons.map((weather_icons) => {
          return <Avatar src={weather_icons} key={Math.random()} />;
        })}
      </ListItem>
      <ListItem>
        <ListItemText>Temperature:</ListItemText>
        <ListItemText>{results?.temperature}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Wind Speed :</ListItemText>
        <ListItemText>{results?.wind_speed}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Precip:</ListItemText>
        <ListItemText>{results?.precip}</ListItemText>
      </ListItem>
    </List>
  );
};

export default WeatherInformation;
