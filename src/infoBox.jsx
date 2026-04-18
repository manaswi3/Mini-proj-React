import Card from '@mui/material/Card';
import './info.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function infoBox({info}){

    // const img = "https://images.unsplash.com/photo-1719958805412-046289afa93e?ixid=M3w3OTM1Nzh8MHwxfHNlYXJjaHwxfHxvdmVyY2FzdCUyMGNsb3Vkc3xlbnwwfHx8fDE3NTU1MzUwNzJ8MA&ixlib=rb-4.1.0"


    return (
        <div className="ib"> 
    {info.have && <div className='card-container'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {info.img}
        title="green iguana"
      />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<SunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg; C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Minimum Temp = {info.min}&deg; C</p>
          <p>Maximum Temp = {info.max}&deg; C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>}
        </div>
    );
}