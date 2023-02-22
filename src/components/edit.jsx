import Navbar from './navbar.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles.css';
const React = require('react')

export default function Edit() {

const {id} = useParams()
useEffect(() => {
   const fetchData = async () => {
    const response = await fetch(`http://localhost:4005/api/` + id)
    const JSON = await response.json()
    console.log(JSON)
    setBuckets(JSON)
    setData(JSON)
  }
  fetchData()
}, [])
const [bucket,setBuckets] = useState('')
const [data, setData] = useState({
    name: "",
    difficulty: 0,
    author: "",
    description: ""
});

const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault()
    navigate('/Home')
        try {
            const response = await fetch(`http://localhost:4005/api/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error(error);
        }
}

const handleDelete = async (e) => {
    e.preventDefault()
    navigate('/Home')
        try {
            const response = await fetch(`http://localhost:4005/api/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error(error);
        }
}


const handleChange = e => {
    setData({...data, [e.target.name]: e.target.value})
}
  return(
    <main>
        <div style={{ display: 'flex', padding: 20, justifyContent: 'center', color: 'white' }}>
             <h1>Edit Bucket Page</h1>
        </div>
        <div>
            <Navbar></Navbar>

       
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="activity">
                    <Form.Label>Bucket List Activity</Form.Label>
                        <Form.Control type='text' name="name" onChange={handleChange} defaultValue={bucket.name} ></Form.Control>

                </Form.Group>

                <Form.Group id='formStyleGroup' className="mb-3" controlId="Difficulty">
                    <Form.Label>Difficulty</Form.Label>

                        <Form.Control type='number' name="difficulty" onChange={handleChange} defaultValue={bucket.difficulty} min={0} max={3}></Form.Control>

                </Form.Group>

                <Form.Group id='formStyleGroup' className="mb-3" controlId="author">
                    <Form.Label>Author</Form.Label>

                        <Form.Control type='text' name="author" onChange={handleChange} defaultValue={bucket.author}></Form.Control>
                </Form.Group>

                <Form.Group id='formStyleGroup' className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>

                        <Form.Control type='text' name="description" onChange={handleChange} defaultValue={bucket.description} ></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Create</Button>
                <Button variant="primary" type="delete" onClick={handleDelete}>Delete</Button>
            </Form>
        </div>
     </main>

    )
    }
