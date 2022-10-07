import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props);
    const{area, region, name, flags} = props.country;
    return (
        <div className='country'>
            <h1>Countries Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p><small>Region: {region}</small></p>
           
        </div>
    );
};

export default Country;