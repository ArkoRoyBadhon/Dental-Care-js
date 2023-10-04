import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material'
import img1 from "../../assets/man1.jpeg"
import img2 from "../../assets/man2.jpeg"
import img3 from "../../assets/man3.jpeg"

function SliderCustomer(props)
{
    var items = [
        {
            name: "Antony",
            img: img1,
            review: "Probably the most trusted Dental care center you have ever seen!"
        },
        {
            name: "Kevin",
            img: img2,
            review: "I treatment so many places. but this dental care is too much caring"
        },
        {
            name: "Kevin",
            img: img3,
            review: "I am fully satisfied on their services and they are very cost effective than others."
        },
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Box height={350} display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" bgcolor="#dee3e0">
            <img src={props.item.img} alt="img" style={{
                width: "100px",
                height: "100px",
                borderRadius: "100%",
                marginBottom: "10px"
            }} />
            <h2>{props.item.name}</h2>
            <p>{props.item.review}</p>
        </Box>
    )
}

export default SliderCustomer