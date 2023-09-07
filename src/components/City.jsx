import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import back from '../images/left-arrow.png';
import Nav from './Nav';
import '../styles/City.css';

function City() {
  const { cityName } = useParams();

  const cities = useSelector((state) => state.karnataka.weather);
  const cityData = cities.find((data) => data.name === cityName);

  return (
    <>
      <header>
        <Link to="/"><img src={back} alt="Back" className="icons links" /></Link>
        <h4>
          {cityData.name}
          &apos;
          s Weather
        </h4>
        <Nav />
      </header>

      <section className="cityImg" style={{ backgroundImage: `url(${cityData.img})` }}>
        <h1>{cityData.name}</h1>
      </section>

      <section className="weatherDetails">
        <h5 className="detailHead">Details</h5>
        <h3>
          Weather:
          &nbsp;
          {cityData.weather.weather[0].description}
        </h3>
        <h3>
          Temperature:
          &nbsp;
          {cityData.weather.main.temp}
        </h3>
        <h3>
          Humidity:
          &nbsp;
          {cityData.weather.main.humidity}
        </h3>
        <h3>
          Wind:
          &nbsp;
          {cityData.weather.wind.speed}
        </h3>
      </section>
    </>
  );
}

export default City;
