import { useEffect, useState } from "react";
import "./App.css";
import CountryList from "./components/CountryList";
import Navbar from "./components/Navbar";
import { getCountryDetail, getCountryList } from "./utils/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import Loader from "./components/Loader";

function App() {
  const [countries, setCountries] = useState([]);
  // const [commonName, setCommonName] = useState("");
  const [countryDetail, setCountryDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const data = await getCountryList();
        // console.log(data);
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleClick = async (commonName) => {
    setCountryDetail([]);
    setLoading(true);
    let newName = commonName.toLowerCase();
    try {
      const data = await getCountryDetail(newName);
      setCountryDetail(data);
      setLoading(false);
      // console.log(data);
      //   setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchCountry = (name) => {
    handleClick(name);
  };

  return (
    <div className="App">
      <Router basename="/">
        <Navbar searchCountry={searchCountry} />
        <Routes>
          <Route
            exact
            index
            path="/"
            element={
              loading ? (
                <Loader />
              ) : (
                <CountryList countries={countries} handleClick={handleClick} />
              )
            }
          />
          <Route
            path="/detail"
            element={
              loading ? (
                <Loader />
              ) : (
                <CountryDetail countryDetail={countryDetail} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
