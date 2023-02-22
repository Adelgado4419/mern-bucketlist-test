import Navbar from './navbar.jsx'
import Table from 'react-bootstrap/Table';
import casper from '../assets/leaderBoard/casper.jpeg'
import moaningMyrtle from '../assets/leaderBoard/moaningMyrtle.jpeg'
import hulk from '../assets/leaderBoard/hulk.png'

const React = require('react')

export default function Leaderboard() {
    return(
        <div>
            <main>
             <h1>Leaderboard</h1>
             </main>
        <Navbar></Navbar>
        <br/>
        <br/>
    <Table bordered hover id="formStyle">
      <thead>
        <tr>
          <th>Rank#</th>
          <th>Name </th>
          <th>Completed</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
          <img alt="casper, the ghost"className='img_lead' src={casper}></img><br/>Casper</td>
          <td>486</td>
          <td className='table_length_comment'>This bucket list has changed my life. I used to just hang around with living people and try to make friends, but after discovering this website, it has made me feel alive again! My all time favorite bucket list item has to be sky diving. </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
          <img alt="cartoon of moaning myrtle from harry potter"className='img_lead' src={moaningMyrtle}></img><br/>Moaning Myrtle
          </td>
          <td>394</td>
          <td>This website has stopped me from being sad, and has made me into an adventurous person! </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
          <img alt="cartoon drawing of hulk"className='img_lead' src={hulk}></img><br/>Hulk
          </td>
          <td>332</td>
          <td>Hulk Smash!!!!</td>
        </tr>
      </tbody>
    </Table>
    </div>
    )
}