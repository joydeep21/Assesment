import React from 'react'
import { Row, Col, Form, Container, Dropdown } from 'react-bootstrap'
import Rating from './Rating'


function Search({ data, selectedRating, selectedCategory, searchData }) {

    return (
        <Container>
            <Row className='mt-2'>
                <Col xs={7} >
                    <Form.Control size="lg" type="text" placeholder="Enter movie name" onChange={searchData} />
                </Col>
                <Col> 
                <Dropdown align="lg" >
                    <Dropdown.Toggle  style={{width :'100%'}} align="lg" variant="dark" id="dropdown-basic">
                         Rating
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Rating selectedRating={selectedRating} />
                    </Dropdown.Menu>
                </Dropdown></Col>
                <Col><Form.Select size="lg" onChange={selectedCategory}>
                    <option value=''>Gener</option>
                    {data.map((item,index) => (
                        <option key={index} value={item.category}>{item.category}</option>
                    ))}
                </Form.Select></Col>
            </Row>
        </Container>
    )
}

export default Search