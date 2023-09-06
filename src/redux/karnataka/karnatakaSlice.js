import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bangalore from '../../images/bangalore.jpg';
import bidar from '../../images/bidar.jpg';
import kalburgi from '../../images/kalburgi.jpg';
import kolar from '../../images/kolar.jpg';
import mandya from '../../images/mandya.jpg';
import mangalore from '../../images/mangalore.jpg';
import mysore from '../../images/mysore.jpg';
import shimoga from '../../images/shimoga.png';
import tumkur from '../../images/tumkur.jpg';

const apiKey = 'adf059698fbebe496a37541762d23025';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const karnatakaCities = [
  { name: 'Bangalore', img: bangalore, lat: 12.9716, lon: 77.5946 },
  { name: 'Bidar', img: bidar, lat: 17.9104, lon: 77.5199 },
  { name: 'Kalburgi', img: kalburgi, lat: 17.3297, lon: 76.8343 },
  { name: 'Kolar', img: kolar, lat: 12.1362, lon: 78.1291 },
  { name: 'Mandya', img: mandya, lat: 12.5218, lon: 76.8951 },
  { name: 'Mangalore', img: mangalore, lat: 12.9141, lon: 74.8560 },
  { name: 'Mysore', img: mysore, lat: 12.2958, lon: 76.6394 },
  { name: 'Shimoga', img: shimoga, lat: 13.9299, lon: 75.5681 },
  { name: 'Tumkur', img: tumkur, lat: 13.3379, lon: 77.1173 },
];

export const karnatakaWeather = createAsyncThunk('karnataka/karnatakaWeather', async () => {
  try {
    const dataPromises = karnatakaCities.map(async (city) => {
      const responce = await fetch(`${baseUrl}?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=metric`);
      const data = await responce.json();
      return { city: city.name, img: city.img, weather: data };
    });

    const weatherData = await Promise.all(dataPromises);
    return weatherData;
  } catch (error) {
    return error;
  }
});

export const karnatakaSlice = createSlice({
  name: 'karnataka',
  initialState: { weather: [], isLoading: false, hasError: false },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(karnatakaWeather.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(karnatakaWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.weather = action.payload;
      })
      .addCase(karnatakaWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = action.error;
      })
  }
});

export default karnatakaSlice.reducer;
