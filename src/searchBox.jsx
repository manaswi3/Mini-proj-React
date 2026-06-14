import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './searchBox.css';

export default function({upd}){
    let [city,setCity] = useState("");
    let [err,setErr]= useState();
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = import.meta.env.VITE_WEATHER_KEY;
    const City_API = `https://api.unsplash.com/search/photos?query=${city}&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`;

    let getWeatherInfo = async()=>{
        setErr(false);
        try{
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRes = await res.json();
        console.log(jsonRes);

        let ires = await fetch(City_API);
        let jsonIMGRes = await ires.json();
        console.log(jsonIMGRes.results[0].urls.full);
        let result = {
            have:true,
            img: jsonIMGRes.results[0].urls.full,
            city:jsonRes.name,
            temp: jsonRes.main.temp,
            min: jsonRes.main.temp_min,
            max: jsonRes.main.temp_max,
            humidity: jsonRes.main.humidity,
            feelsLike: jsonRes.main.feels_like,
            weather: jsonRes.weather[0].description
        };

        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }
        
    };

    

    let handleChange = (event) =>{
        // console.log(event.target.value);
        setCity(event.target.value);
    };

    let handleSubmit = async(event) =>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let data = await getWeatherInfo();
        upd(data);
        }
        catch(err){
            setErr(true);
        }
    };



    return(
        <div className='sb'>
            <form onSubmit={handleSubmit}>
                <TextField 
                id='city' 
                label='search city' 
                variant='outlined' 
                required
                value={city}
                onChange={handleChange}
                />
                <br /><br />
                <Button variant='contained' type='submit' id='city'>Search</Button>
                {err && <h3 style={{color:'red',padding:'0px',fontFamily: "Verdana"}}>No such place exists!</h3>}
            </form>
        </div>
    );
}