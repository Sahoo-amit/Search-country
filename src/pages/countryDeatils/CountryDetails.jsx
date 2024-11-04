import React, { useEffect, useState, useTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CountryDetails.css";
import { Loader } from "../loader/Loader";

const CountryDetails = () => {
  const [details, setDetails] = useState([]);
  const [isPending, startTransition] = useTransition();
  const navigation = useNavigate();
  const params = useParams();

  const url = `https://restcountries.com/v3.1/name/${params.id}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`;
  useEffect(() => {
    startTransition(async () => {
      const res = await fetch(url);
      const data = await res.json();
      setDetails(data);
    });
  }, []);

  const handleNavigation = () => {
    navigation(-1);
  };
  if (isPending) return <Loader />


  return (
    <div className="details">
      {details.map((item, index) => {
        const {
          name,
          capital,
          languages,
          subregion,
          currencies,
          flags,
          population,
          region,
          borders,
        } = item;
        return (
          <div key={index} className="country-details">
            <div>
              <img src={flags.svg} alt={flags.alt} />
            </div>
            <div>
              <p className="cont-name">{name.common}</p>
              <p className="description">
                <span className="country-description">Capital: </span>
                {capital}
              </p>
              <p className="description">
                <span className="country-description">Languages: </span>
                {Object.keys(languages)
                  .map((key) => languages[key])
                  .join(", ")}
              </p>
              <p className="description">
                <span className="country-description">Population: </span>
                {population.toLocaleString()}
              </p>
              <p className="description">
                <span className="country-description">Region: </span>
                {region}
              </p>
              <p className="description">
                <span className="country-description">Subregion: </span>
                {subregion}
              </p>
              <p className="description">
                <span className="country-description">Currencies: </span>
                {Object.keys(currencies).map((key) => currencies[key].name)}
              </p>
              <p className="description">
                <span className="country-description">Symbol: </span>
                {Object.keys(currencies).map((key) => currencies[key].symbol)}
              </p>
              <p className="description">
                <span className="country-description">Borders: </span>
                {borders.join(", ")}
              </p>
            </div>
          </div>
        );
      })}
      <div>
        <button className="navigate-btn" onClick={handleNavigation}>
          Go to Back
        </button>
      </div>
    </div>
  );
};

export default CountryDetails;
