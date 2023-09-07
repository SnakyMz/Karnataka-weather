import forward from '../../images/right-arrow.png';
import reload from '../../images/reload.png';
import microphone from '../../images/microphone.png';
import setting from '../../images/settings.png';
import bangalore from '../../images/bangalore.jpg';
import mysore from '../../images/mysore.jpg';
import '../../styles/Home.css';

function Home() {
  const cities = [
    {
      name: 'Bangalore',
      img: bangalore,
      weather: {
        main: {
          temp: 25,
        },
      },
    },
    {
      name: 'Mysore',
      img: mysore,
      weather: {
        main: {
          temp: 30,
        },
      },
    },
  ];

  return (
    <>
      <header>
        <a href="../Home.jsx"><img src={reload} alt="Reload" className="icons links" /></a>
        <h4>Karnataka Weather</h4>
        <div className="navIcons">
          <img src={microphone} alt="Microphone" className="icons" />
          <img src={setting} alt="Settings" className="icons setting" />
        </div>
      </header>

      <section className="titleDiv">
        <h1>Karnataka</h1>
        <p>One State, Many Worlds</p>
      </section>

      <section id="cities">
        <h5 className="citiesHead">Cities</h5>
        <div className="citiesList">
          {cities.map((city) => (
            <a href="../City.jsx" key={city.name} className="links">
              <div className="city" style={{ backgroundImage: `url(${city.img})` }}>
                <img src={forward} alt="Forward" className="icons" />
                <h3 className="cityHead">{city.name}</h3>
                <p>{city.weather.main.temp}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
