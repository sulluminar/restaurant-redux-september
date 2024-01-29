import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResturant } from '../redux/restaurantSlice';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchResturant())
  }, [])
  const allRestaurant = useSelector((state) => state.resturantSlice.allRestuarant.restaurants);
  console.log("1");
  console.log(allRestaurant)
  return (
    <>
      <Row>
        {
          allRestaurant?.length > 0 ?
            allRestaurant.map((restaurant) => (
              <Col className='px-5 py-3' sm={6} md={4} lg={4}>
                <RestCard restaurant={restaurant}/>
              </Col>
            )):
        <p>No Restautant Found</p>
        }

      </Row>
    </>
  )
}

export default Home