import React from "react";
import { Link } from "react-router-dom";

const CountryList = ({ countries, handleClick }) => {
  return (
    <div className="container mt-3">
      <h1>All Countries</h1>
      <div className="row">
        {countries.map((country) => {
          return (
            <div key={country.name.official} className="col col-lg-3">
              <div
                className="card mt-4 mx-auto text-black"
                style={{ width: "17rem" }}
              >
                <Link
                  to="/detail"
                  onClick={() => {
                    handleClick(country.name.common);
                  }}
                >
                  <img
                    src={country.flags.png}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "100%", height: "150px" }}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{country.name.common}</h5>
                  <p className="card-text text-start mb-1">
                    <strong>Capital : </strong>
                    {country.capital}
                  </p>
                  <p className="card-text text-start mb-1">
                    <strong>Region : </strong>
                    {country.region}
                  </p>
                  <p className="card-text text-start">
                    <strong>Population : </strong>
                    {country.population}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryList;
