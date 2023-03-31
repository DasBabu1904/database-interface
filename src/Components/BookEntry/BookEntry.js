import React from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const BookEntry = () => {

    const newBook = {
        title: '',
        A_ID: '',
        year: '',
        price: '',
        bookID: '',
        V_ID: '',
        genre: ''
    };

    const handleBookEntry = (event) => {
        event.preventDefault()
        console.log(newBook)
    }
    const handleTitle = (event) => {
        newBook.title = event.target.value
        console.log(event.target.value)
    }
    const handleAutID = (event) => {
        newBook.A_ID = event.target.value
        console.log(event.target.value)
    }
    const handleYear = (event) => {
        newBook.year = event.target.value
        console.log(event.target.value)
    }
    const handlePrice = (event) => {
        newBook.price = event.target.value
        console.log(event.target.value)
    }
    const handleBookID = (event) => {
        newBook.bookID = event.target.value
        console.log(event.target.value)
    }
    const handleVID = (event) => {
        newBook.V_ID = event.target.value
        console.log(event.target.value)
    }
    const handleGenre = (event) => {
        newBook.genre = event.target.textContent
        console.log(event.target.textContent)
    }

    return (
        <div className='container'>
            <h1>Book entry</h1>
            <Form onSubmit={handleBookEntry}>
                <Form.Group onBlur={handleTitle} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Book Title" />
                </Form.Group>

                <Form.Group onBlur={handleAutID} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Author ID</Form.Label>
                    <Form.Control type="text" placeholder="Author ID" />
                </Form.Group>

                <Form.Group onBlur={handleYear} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Release Year</Form.Label>
                    <Form.Control type="number" placeholder="Release Year" />
                </Form.Group>

                <Form.Group onBlur={handlePrice} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price(BDT)</Form.Label>
                    <Form.Control type="number" placeholder="Price(BDT)" />
                </Form.Group>

                <Form.Group onBlur={handleBookID} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Book ID</Form.Label>
                    <Form.Control type="text" placeholder="BOOK ID" />
                </Form.Group>

                <Form.Group onBlur={handleVID} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Vehicle ID</Form.Label>
                    <Form.Control type="text" placeholder="Vehicle ID" />
                </Form.Group>

                <Dropdown  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Genre
                    </Dropdown.Toggle>

                    <Dropdown.Menu  >
                        <Dropdown.Item onClick={handleGenre} href="#/action-1">Fiction</Dropdown.Item>
                        <Dropdown.Item onClick={handleGenre} href="#/action-2">1</Dropdown.Item>
                        <Dropdown.Item onClick={handleGenre} href="#/action-3">3</Dropdown.Item>
                        <Dropdown.Item onClick={handleGenre} href="#/action-4">4</Dropdown.Item>
                        <Dropdown.Item onClick={handleGenre} href="#/action-5">5</Dropdown.Item>
                        <Dropdown.Item onClick={handleGenre} href="#/action-6">6</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default BookEntry;