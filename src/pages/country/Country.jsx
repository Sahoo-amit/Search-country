import React, { useEffect, useState } from "react";
import "./Country.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Country = () => {

  const [country, setCountry] = useState([]);
  const [page, setPage] = useState(1);
  const url =
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags";

  const countryData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setCountry(data);
  };

  const countryLength = Math.ceil(country.length / 20);
  const showPage = (val) => {
    if (val >= 1 && val <= countryLength) {
      setPage(val);
    }
  };
  useEffect(() => {
    countryData();
  }, []);

  return (
    <div className="country">
      <ul>
        {country.slice(page * 20 - 20, page * 20).map((item, index) => {
          return (
            <li key={index}>
              <img src={item.flags.png} alt={item.flags.alt} />
              <p className="country-name">
                {item.name.common.length > 15
                  ? item.name.common.slice(0, 15) + "...."
                  : item.name.common}
              </p>
              <p>
                <span>Region :</span>
                {item.region}
              </p>
              <p>
                <span>Population :</span>
                {item.population.toLocaleString()}
              </p>
              <button className="move-btn">
                <Link to={`/country/${item.name.common}`}>Read more</Link>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="show-btn">
        <button
          className="outer-btn"
          onClick={() => showPage(page - 1)}
          disabled={page === 1}
        >
          <FaAngleLeft />
        </button>
        {[...Array(countryLength)].map((_, index) => {
          const pageNumber = index + 1;
          if (
            pageNumber === 1 ||
            pageNumber === 2 ||
            pageNumber === page ||
            pageNumber === countryLength
          ) {
            return (
              <button
                key={index}
                className={`inner-btn ${page === pageNumber ? "active" : ""}`}
                onClick={() => showPage(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          }
          if (pageNumber === page - 1 || pageNumber === page +2) {
            return <span key={index}> ... </span>;
          }
          return null;
        })}
        <button
          className="outer-btn"
          onClick={() => showPage(page + 1)}
          disabled={page === countryLength}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Country;
