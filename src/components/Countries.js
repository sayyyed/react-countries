import React, { useState, useEffect } from 'react'
import { Country } from './Country'
import { LoadingSpinner } from './LoadingSpinner';

export const Countries = (props) => {

    const BASE_URL = 'https://restcountries.com/v3.1/';
    let url = BASE_URL;
    if(props.search)
        url += `name/${props.search}`;
    else
        url += 'all';

    const [countriesList, setCountriesList] = useState([])
    const [isLoading, setLoading] = useState(false)

    async function fetchData() {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setLoading(false);

        if(data.status !==  404)
            setCountriesList(data);
        else
            setCountriesList([])
    }

    useEffect(() => {
        
        fetchData();
        
    }, [url]);

  return (
    <>
        <LoadingSpinner isVisible={isLoading}/>

        <div className='countries'>
            {countriesList.length !== 0 && countriesList.map(c => 
                {
                    return <Country key={c.name.common} country={c} />;
                })
            }
        </div>
    </>
  )
}
