import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { } from 'react-router-dom';

const SearchBookTitle = () => {
    const title = {
        Title_name: ''
    };

    const handleTitleSearh = (event) => {
        event.preventDefault();
        console.log(title)
    }

    const handleTitle = (event) => {
        title.Title_name = event.target.value;
    }
    return (
        <div className='container'>
            <h1>Book Title</h1>
            <Form onSubmit={handleTitleSearh}>
                <Form.Group onBlur={handleTitle} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" placeholder="Book Title" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SearchBookTitle;