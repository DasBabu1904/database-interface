import React from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecordEntry = () => {
    const newRecord = {
        record_num: '',
        readerID: '',
        bookId: '',
        borrowDate: '',
        returnDate: '',
        borrowStatus: '',
        returnStatus: '',
    }
    const handleRecord = (event) => {
        event.preventDefault()
        console.log(newRecord)
    }
    const handleRecordNumber = (event) => {
        newRecord.record_num = event.target.value
        console.log(event.target.value)
    }
    const handleReaderID = (event) => {
        newRecord.readerID = event.target.value
        console.log(event.target.value)
    }
    const handleBookID = (event) => {
        newRecord.bookId = event.target.value
        console.log(event.target.value)
    }
    const handleBorrowDate = (event) => {
        newRecord.borrowDate = event.target.value
        console.log(event.target.value)
    }
    const handleReturnDate = (event) => {
        newRecord.returnDate = event.target.value
        console.log(event.target.value)
    }
    const handleBorrowStatus = (event) => {
        newRecord.borrowStatus = event.target.textContent
        console.log(event.target.textContent)
    }
    const handleReturnStatus = (event) => {
        newRecord.returnStatus = event.target.textContent
        console.log(event.target.textContent)
    }

    return (
        <div className='container'>
            <Form onSubmit={handleRecord}>
                <Form.Group onBlur={handleRecordNumber} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Record Number</Form.Label>
                    <Form.Control type="text" placeholder="Record number" />
                </Form.Group>

                <Form.Group onBlur={handleReaderID} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Reader ID</Form.Label>
                    <Form.Control type="text" placeholder="Reader ID" />
                </Form.Group>

                <Form.Group onBlur={handleBookID} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Book ID</Form.Label>
                    <Form.Control type="text" placeholder="Book ID" />
                </Form.Group>

                <Dropdown  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Borrow Status
                    </Dropdown.Toggle>

                    <Dropdown.Menu  >
                        <Dropdown.Item onClick={handleBorrowStatus} href="#/action-1">True</Dropdown.Item>
                        <Dropdown.Item onClick={handleBorrowStatus} href="#/action-2">False</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Group onBlur={handleBorrowDate} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Borrow Date</Form.Label>
                    <Form.Control type="date" placeholder="Borrow Date" />
                </Form.Group>

                <Dropdown  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Return Status
                    </Dropdown.Toggle>

                    <Dropdown.Menu  >
                        <Dropdown.Item onClick={handleReturnStatus} href="#/action-1">True</Dropdown.Item>
                        <Dropdown.Item onClick={handleReturnStatus} href="#/action-2">False</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Group onBlur={handleReturnDate} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Return Date</Form.Label>
                    <Form.Control type="date" placeholder="Return Date" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default RecordEntry;