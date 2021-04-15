//ROUNTING
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages file
import CountryDetailsPage from "./pages/countryDetailsPage";
import CountryInformationPage from "./pages/countryInformationPage";

//weather file
import WeatherInformation from "./components/watherDetails/weatherInformation";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <CountryInformationPage />
          </Route>
          <Route path="/country-details">
            <CountryDetailsPage />
          </Route>
          {/*===================== path with id ===================== */}
          <Route path="/weather-details/:id" component={WeatherInformation} />

          {/*==================== This will always be at the end ====================*/}
          {/* <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
