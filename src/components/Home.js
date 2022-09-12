import {NavLink} from 'react-router-dom';
import Beers from '../assets/beers.png';
import RandomBeer from '../assets/random-beer.png';
import NewBeer from '../assets/new-beer.png';



function Home () {


  return (
    <div>

      <NavLink to="/beer"><img src={Beers} alt="beers" /> SingleBeer </NavLink>
      <NavLink to="/random-beer"><img src={RandomBeer} alt="randomBeers" /> RandomBeer </NavLink>
      <NavLink to="/new-beer"><img src={NewBeer} alt="newBeers" /> NewBeer </NavLink> 

    </div>
  )
}

export default Home;