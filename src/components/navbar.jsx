import { Link } from 'react-router-dom'
import '../styles.css'
import heybucket from '../assets/heybucket.png'
import dontkickbucket from '../assets/dontkickbucket.png'
const React = require('react')


export default function Navbar() {
    return(
        
        <nav className='nav'>
            <img className='img' src={heybucket} alt="Hey bucket logo"/>
            <div className='buttons'>

                <Link to='/'>
                    <br />
                    <button id='homeTableHeaderColor' type="button" className="btn">Intro</button>
                </Link>

                <Link to='/Home'>
                    <br></br>
                    <button id='homeTableHeaderColor' type="button" className="btn">Home</button>
                </Link>
                
                <Link to='/Create'>
                    <br />
                    <button id='homeTableHeaderColor' type="button" className="btn">Create</button>
                </Link>


                <Link to='/Leaderboard'>
                    <br />
                    <button id='homeTableHeaderColor' type="button" className="btn">Leaderboard</button>

                </Link>
            </div>
            <img className='img' src={dontkickbucket} alt="Dont kick bucket" />
        </nav>
        
    )
}