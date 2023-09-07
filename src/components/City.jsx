import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import back from '../images/left-arrow.png';
import microphone from '../images/microphone.png';
import setting from '../images/settings.png';
import '../styles/City.css';

function City() {
  const { cityName } = useParams();

  const cities = useSelector((state) => state.karnataka.weather);
  const city = cities.find((data) => data.name === cityName);

  return (
    <>
      <header>
        <Link to="/"><img src={back} alt="Back" className="icons links" /></Link>
        <h4>
          {city.name}
          &apos;
          s Weather
        </h4>
        <div className="navIcons">
          <img src={microphone} alt="Microphone" className="icons" />
          <img src={setting} alt="Settings" className="icons setting" />
        </div>
      </header>

      <section className="cityImg" style={{ backgroundImage: `url(${city.img})` }}>
        <h1>{city.name}</h1>
      </section>

      <section className="weatherDetails">
        <h5 className="detailHead">Details</h5>
        <h4>
          Weather:
          &nbsp;
          {city.weather.weather[0].description}
        </h4>
        <h4>
          Temperature:
          &nbsp;
          {city.weather.main.temp}
        </h4>
        <h4>
          Humidity:
          &nbsp;
          {city.weather.main.humidity}
        </h4>
        <h4>
          Wind:
          &nbsp;
          {city.weather.wind.speed}
        </h4>
      </section>
    </>
  );
}

export default City;
