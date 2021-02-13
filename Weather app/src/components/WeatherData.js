import React from "react";
import Loader from "./Loader/Loader";
import styled from 'styled-components';

const Card = styled.div`
  margin: 2rem auto;
  width: 450px;
  height: 60vh;
  background-color: rgba(255, 255, 255, .3);
  box-shadow: 0 5px 5px rgba(0, 0, 0, .4);
  border-radius: 15px;
  display: grid;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 560px) {
    width: 80vw;
  }
`;

const Name = styled.h2`
  color: #fff;
`;

const Temp = styled.p`
  font-size: 50px;
  color: #fff;
  margin: 1rem 0 .5rem 0;
`;

const TempMinMax = styled.p`
  color: #fff;
`;

const Description = styled.h3`
  color: #fff;
`;


const Weather = props => {
    let weatherInfo = <div><Loader/></div>

    const temp = props.temperature.temp - 273;
    const temp_min = props.temperature.temp_min - 273;
    const temp_max = props.temperature.temp_max - 273;
    const feels_like = props.temperature.feels_like - 273;
    const dateNow = Date.now() / 1000;

    // console.log('Weather Component Render');

    let icon = 'fa-sun';

    switch (props.weatherInfo.main) {
        case 'Clear':
            if (dateNow < props.weatherInfo.sunrise || dateNow > props.weatherInfo.sunset) {
                icon = 'fa-moon';
            } else {
                icon = 'fa-sun';
            }
            break;
        case 'Clouds':
            icon = 'fa-cloud';
            break;
        case 'Rain':
            icon = 'fa-cloud-rain';
            break;
        case 'Snow':
            icon = 'fa-snowflake';
            break;
        case 'Fog':
            icon = 'fa-smog';
            break;
        case 'Mist':
            icon = 'fa-smog';
            break;
        case 'Haze':
            icon = 'fa-smog';
            break;
        case 'Drizzle':
            icon = 'fa-cloud-showers-heavy';
            break;
        default:
            icon = 'fa-sun';
            break;
    }

    if (!props.loading) {
        if (!props.error) {
            weatherInfo = (
                <div>
                    <Name>{props.location.city}, {props.location.country}</Name>
                    <Temp style={{}}>
                        <i className={`fas ${icon}`}/> {temp.toFixed(0)}°
                    </Temp>
                    <TempMinMax>{temp_min.toFixed(0)}° / {temp_max.toFixed(0)}° |
                        RealFeel {feels_like.toFixed(0)}°</TempMinMax>
                    <Description>{props.weatherInfo.main}</Description>
                </div>
            )
        } else {
            weatherInfo = <h2 style={{color: '#fff'}}>Oops, something went wrong! Try Again.</h2>
        }
    }

    return (
        <Card>
            {weatherInfo}
        </Card>
    );
};

export default React.memo(Weather);

//  fa-moon, fa-sun, fa-smog, fa-cloud-rain, fa-snowflake