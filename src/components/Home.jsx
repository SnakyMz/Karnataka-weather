import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { karnatakaWeather } from '../redux/karnataka/karnatakaSlice';
import forward from '../images/right-arrow.png';

function Home() {
  const date = new Date();
  const calender = `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`;

  const cities = useSelector((state) => state.karnataka.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(karnatakaWeather());
  }, [dispatch]);
  console.log(cities);
  return (
    <>
      <header>
        <h2>Karnataka Weather</h2>
        <h4>{calender}</h4>
      </header>

      <section id="cities">
        {cities.map((city) => (
          <Link to={`/${city.name}`} key={city.name}>
            <div className="city">
              <img src={forward} alt="Forward" />
              <h3>{city.name}</h3>
              <p>{city.weather.main.temp}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

export default Home;
