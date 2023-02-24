import { Link } from "react-router-dom";
const CountryDetail = ({ countryDetail }) => {
  return (
    <>
      <div className="container">
        <div className="text-center mt-3">
          <Link className="btn btn-primary" to="/">
            Back
          </Link>
        </div>
        {countryDetail.map((detail) => {
          return (
            detail && (
              <div key={detail.name.official} className="container">
                <div className="card mt-4 mx-auto text-black">
                  <img
                    src={detail.flags.png}
                    className="card-img-top mb-3"
                    alt="..."
                  />
                  <div className="card-body">
                    <h2 className="card-title">{detail.name.common}</h2>
                    <p className="card-text text-start mb-1">
                      <strong>Official : </strong>
                      {detail.name.official}
                    </p>
                    <img
                      src={detail.coatOfArms.png}
                      className="card-img-top mt-5 mb-5"
                      alt="..."
                    />
                    <p className="card-text text-start mb-1">
                      <strong>Capital : </strong>
                      {detail.capital}
                    </p>
                    <p className="card-text text-start mb-1">
                      <strong>Region : </strong>
                      {detail.region}
                    </p>
                    <p className="card-text text-start mb-1">
                      <strong>Subregion : </strong>
                      {detail.subregion}
                    </p>
                    <p className="card-text text-start mb-1">
                      <strong>Population : </strong>
                      {detail.population}
                    </p>
                    <p className="card-text text-start mb-1">
                      <strong>Area : </strong>
                      {detail.area}
                    </p>
                    <p className="card-text text-start mb-1">
                      <strong>Status : </strong>
                      {detail.status}
                    </p>
                    <p className="card-text text-start mb-1">
                      <strong>T Official : </strong>
                      {detail.translations.ara.official}
                    </p>
                    <p className="card-text text-start mb-1">
                      <strong>T Common : </strong>
                      {detail.translations.ara.common}
                    </p>
                    <p className="card-text text-start mb-1">
                      <strong>Code : </strong>
                      {detail.idd.root}
                      {detail.idd.suffixes}
                    </p>
                    <p className="card-text text-start mb-1">
                      <strong>Start of Week : </strong>
                      {detail.startOfWeek}
                    </p>
                    <p className="card-text text-start mb-1">
                      <strong>Latitude : </strong>
                      {detail.latlng[0]}
                    </p>
                    <p className="card-text text-start mb-1">
                      <strong>Longitude : </strong>
                      {detail.latlng[1]}
                    </p>
                    <p className="card-text text-start mb-1">
                      <strong>Find on Map : </strong>
                      <a
                        href={detail.maps.googleMaps}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google Map
                      </a>
                    </p>
                    <p className="card-text text-start mb-1">
                      <strong>Find on Map : </strong>
                      <a
                        href={detail.maps.openStreetMaps}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open Street Map
                      </a>
                    </p>
                  </div>
                </div>
                <div className="text-center mt-3 mb-3">
                  <Link className="btn btn-primary" to="/">
                    Back
                  </Link>
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default CountryDetail;
