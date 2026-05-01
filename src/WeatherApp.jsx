import Box from './searchBox.jsx';
import Info from './infoBox.jsx'
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './weatherApp.css'
export default function(){

    let [box,setBox]=useState(false);

    const [wInfo, setWInfo]=useState({
        have:false,
    });

    let updateInfo = (result)=>{
        setWInfo(result);
        setBox(false);
    }
    let handleCh=()=>{
        console.log("btn was clicked")
        setBox(true);
    }

    return (
        <>
        <h1 style={{textAlign:'center'}}>Get Weather Updates</h1>
        <div style={{display:'flex',justifyContent:'center'}}>
        {
            box?
            <Box upd={updateInfo}/>:
            <Button onClick={handleCh} variant="contained" startIcon={<AddIcon />}>
            Add
            </Button>
        }
        </div>
        {/* <Box upd={updateInfo}/> */}
        <Info info={wInfo}/>
        </>
    );
}