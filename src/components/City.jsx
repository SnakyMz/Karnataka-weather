import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import back from '../images/left-arrow.png';

function City() {
  const { cityName } = useParams();

  const date = new Date();
  const calender = `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`;

  const cities = useSelector((state) => state.karnataka.weather);
  const cityData = cities.find((data) => data.name === cityName);

  return (
    <>
      <header>
        <Link to="/"><img src={back} alt="Back" /></Link>
        <h2>
          {cityData.name}
          &apos;
          s Weather
        </h2>
        <h4>{calender}</h4>
      </header>
      <section id="cityDetail">
        <h2>Details</h2>
        <div className="weatherDetails">
          <h5>
            Weather:
            &nbsp;
            {cityData.weather.weather[0].description}
          </h5>
          <h5>
            Temperature:
            &nbsp;
            {cityData.weather.main.temp}
          </h5>
          <h5>
            Humidity:
            &nbsp;
            {cityData.weather.main.humidity}
          </h5>
          <h5>
            Wind:
            &nbsp;
            {cityData.weather.wind.speed}
          </h5>
        </div>
      </section>
    </>
  );
}

export default City;