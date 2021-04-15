import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./style.css";
import { Link } from "react-router-dom";
import CountryInfomationAction from "../../redux/Action/countryInfomationAction";
import { useDispatch } from "react-redux";

const CountryInfomation = () => {
  // Declare multiple state variables!
  const [title] = useState("Nasa Assignment 02 ( Weather Information )");
  const [countryname, setCountryname] = useState("");

  const dispatch = useDispatch();
  
  const CountryChange = (e) => {
    setCountryname(e.target.value);
  };

  // const submittingId = (e) => {
  //   console.log("click submitting ");
  // };

  const getInfo = () => {
    dispatch(CountryInfomationAction(countryname));
  };

  return (
    <div style={{ paddingTop: "155px" }}>
      <div className="frame">
        <ul className="links">
          <li className="signin-active">
            <h5 className="btn headingTitle">{title}</h5>
          </li>
        </ul>
        <div className="form-signin">
          <label htmlFor="username">Enter Country Name</label>
          <input
            className="form-styling"
            type="text"
            value={countryname}
            name={countryname}
            onChange={CountryChange}
            
            // onChange={(e) => console.log(e.target.value)}
          />
          <div className="btn-animate">
            <Link to="/country-details">
              <Button
                type="submit"
                color="primary"
                disabled={countryname === ""}
                onClick={getInfo}
                
                // onClick={() => setTitle("Weather information")}
              >
                Submit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfomation;
