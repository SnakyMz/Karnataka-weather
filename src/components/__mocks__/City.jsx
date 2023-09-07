import back from '../../images/left-arrow.png';
import microphone from '../../images/microphone.png';
import setting from '../../images/settings.png';
import bangalore from '../../images/bangalore.jpg';
import '../../styles/City.css';

function City() {
  const cityData = {
    name: 'Bangalore',
    img: bangalore,
    weather: {
      main: {
        temp: 25,
        humidity: 8000,
      },
      weather: [
        {
          description: 'Sunny',
        },
      ],
      wind: {
        speed: 235,
      },
    },
  };

  return (
    <>
      <header>
        <a href="../Home.jsx"><img src={back} alt="Back" className="icons links" /></a>
        <h4>
          {cityData.name}
          &apos;
          s Weather
        </h4>
        <div className="navIcons">
          <img src={microphone} alt="Microphone" className="icons" />
          <img src={setting} alt="Settings" className="icons setting" />
        </div>
      </header>

      <section className="cityImg" style={{ backgroundImage: `url(${cityData.img})` }}>
        <h1>{cityData.name}</h1>
      </section>

      <section className="weatherDetails">
        <h5 className="detailHead">Details</h5>
        <h4>
          Weather:
          &nbsp;
          {cityData.weather.weather[0].description}
        </h4>
        <h4>
          Temperature:
          &nbsp;
          {cityData.weather.main.temp}
        </h4>
        <h4>
          Humidity:
          &nbsp;
          {cityData.weather.main.humidity}
        </h4>
        <h4>
          Wind:
          &nbsp;
          {cityData.weather.wind.speed}
        </h4>
      </section>
    </>
  );
}

export default City;
