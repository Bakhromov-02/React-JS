import {useEffect, useState} from 'react';
import axios from "axios";

import Form from "./components/Form";
import Weather from "./components/WeatherData";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
  align-items: center;
  text-align: center;
  background: linear-gradient(to top, #4A00E0, #8E2DE2);
`;

const App = () => {
    const [inputState, setInputState] = useState('');
    const [query, setQuery] = useState('Qarshi');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [location, setLocation] = useState({});
    const [weatherInfo, setWeatherInfo] = useState({});
    const [temperature, setTemperature] = useState({});

    useEffect(() => {
        setLoading(true);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=be058bd5f4da8397dd066852fd31b879`)
            .then(response => {
                setError();
                const data = response.data;
                setLoading(false);

                console.log(data.name);

                setLocation({city: data.name, country: data.sys.country});
                setWeatherInfo({main: data.weather[0].main, sunrise: data.sys.sunrise, sunset: data.sys.sunset});
                setTemperature(data.main)
            })
            .catch(error => {
                setLoading(false);
                setError(error);
            });
    }, [query]);


    const onSubmit = e => {
        e.preventDefault();
        setQuery(inputState);
        setInputState('');
    };

    return (
        <StyledDiv>
            <Form
                inputValue={inputState}
                inputHandler={e => setInputState(e.target.value)}
                onSubmit={onSubmit}
            />
            <Weather
                loading={loading}
                error={error}
                location={location}
                weatherInfo={weatherInfo}
                temperature={temperature}
            />
        </StyledDiv>
    );
};

export default App;
