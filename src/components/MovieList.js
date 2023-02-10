import React from 'react'
import { Col, Row, Container, Card } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';



function MovieList({ filterData }) {
    console.log(filterData);
    return (
        <Container>
            <Row>
                <Col xs={7}>

                    {filterData.map((item, index) => (
                        <Card className='product-list' key={index}>
                            <Row>
                                <Col xs={8} className='title'>
                                    <p>{item.title}</p>
                                    <StarRatings starDimension="20px"
                                        starSpacing="5px" numberOfStars={10} rating={item.rating} />
                                        </Col>
                                <Col>{item.category}</Col>
                            </Row>
                        </Card>
                    ))}

                </Col>

            </Row>
        </Container>
    )
}

export default MovieList;