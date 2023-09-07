import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { karnatakaWeather } from '../redux/karnataka/karnatakaSlice';
import forward from '../images/right-arrow.png';
import reload from '../images/reload.png';
import Nav from './Nav';
import '../styles/Home.css';

function Home() {
  const cities = useSelector((state) => state.karnataka.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(karnatakaWeather());
  }, [dispatch]);

  return (
    <>
      <header>
        <Link to="/"><img src={reload} alt="Reload" className="icons links" /></Link>
        <h4>Karnataka Weather</h4>
        <Nav />
      </header>

      <section className="titleDiv">
        <h1>Karnataka</h1>
        <p>One State, Many Worlds</p>
      </section>

      <section id="cities">
        <h5 className="citiesHead">Cities</h5>
        <div className="citiesList">
          {cities.map((city) => (
            <Link to={`/${city.name}`} key={city.name} className="links">
              <div className="city" style={{ backgroundImage: `url(${city.img})` }}>
                <img src={forward} alt="Forward" className="icons" />
                <h3 className="cityHead">{city.name}</h3>
                <p>{city.weather.main.temp}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
