import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import ApplachianSeedCard, { DawnOfAlinaCard, WVQuestCard } from "./Card";
import { Grid } from "@mui/material"
import PortfolioImg from './Images/PortfolioCropped.jpg';
import GDCImg from './Images/GDC.JPG';


function App() {
  return (
    document.title = "Zach Hubbard | Home",
    <div className="Global">
      <Navbar />
      <h1 className="base-header">Featured Projects</h1>
      <div className="CardsGrid">
        <Grid container direction="row" justifyContent="center">
          <Grid item className='Card'>
            <ApplachianSeedCard />
          </Grid>
          <Grid item className='Card'>
            <WVQuestCard />
          </Grid>
          <Grid item className='Card'>
            <DawnOfAlinaCard />
          </Grid>
        </Grid>
      </div>
      <h1 className="base-header">About Me</h1>
      <div className="about-content">
        <Grid container direction="row" justifyContent="center" className='about-grid'>
          <Grid item className='grid-item'>
            <img className='about-item' src={PortfolioImg} alt='Zach Hubbard' width='365px' height='334px'></img>
          </Grid>
          <Grid item className='grid-item'>
            <img className='about-item' src={GDCImg} alt='Zach Hubbard' width='365px' height='334px'></img>
          </Grid>
          <Grid item className='grid-item'>
            <p className="about-item">Hello, my name is Zach Hubbard, and I have a huge passion
              for software and web development, computer science, and video games.
              I primarily focus on the programming side of game and software development.
              I enjoy creating, problem-solving, learning new things, and challenging myself.</p>
            <h3 style={{ fontWeight: 'bold' }} className='about-item'>Email: Zhubbs19@gmail.com </h3>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
export default App;
