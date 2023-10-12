import React from 'react'

const DessertsList = (props) => {
    // const arr = props.data.map((item) => {
    //     return item.name;
    // });

    const lessCal = props.data.filter((item) => {
        return item.calories < 500;
    });
    const sorted = lessCal.sort((a, b) => {
        return a.calories - b.calories;
    });
    const mapped = sorted.map((item) => {
        return <li key={item.createdAt}>{item.name} - {item.calories} cal</li>;
    });
    return (
        <ul>
            {mapped}
        </ul>
  )
}

export default DessertsList