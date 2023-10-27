import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import './GamePages.css';
import '../../Components/App.css';
import Footer from '../../Components/Footer/Footer.js';
import BlenderDonutVideo from '../../Images/BlenderDonut.mp4'
import { Grid } from "@mui/material"
import Box from '@mui/material/Box';
import BlenderCookies from '../../Images/Cookies2.png';


export default function BlenderProjects() {
  return (
    document.title = "Zach Hubbard | Blender Projects",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Blender Projects</h1>
      <Box sx={{flexGrow: 1}} className="about-content">
        <Grid container spacing={4}>
          <Grid item className='media-item' xs={12} sm={6} md={6} lg={4}>
            <iframe className="responsive-iframe" src={BlenderDonutVideo} width='500px' height='889px'></iframe>
            <h3 className='subheader'>Blender Donut Animation</h3>
          </Grid>
          <Grid item className='media-item' xs={12} sm={6} md={6} lg={4}>
            <iframe className="image" src={BlenderCookies} width='500px' height='889px'></iframe>
            <h3 className='subheader'>Cookies and Milk Render</h3>
          </Grid>
          <Grid item className='info-item' xs={12} sm={12} md={6} lg={4}>
            <h3 className='subheader' style={{justifyContent: "left"}}>Blender Donut Animation</h3>
            <p className="text">This rotating Blender Donut render and animation was created using YouTube creator Blender Guru&apos;s popular Blender Beginner Tutorial Series. The randomly colored sprinkles were rendered using Blender&apos;s Geometry Nodes feature. </p>
            <h3 className='subheader' style={{justifyContent: "left"}}>Milk and Cookies Render</h3>
            <p className="text">I created this render after completing the Blender Donut tutorial to better apply what I had learned from the beginner tutorial in order to create my own render. </p>

          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}