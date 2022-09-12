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

    async function fetchData(req) {
        setLoading(true);
        const response = await fetch(req);
        const data = await response.json();
        setLoading(false);

        if(data.message && data.message.includes('Not Found'))
            setCountriesList([]);
        else
            setCountriesList(data)
    }

    useEffect(() => {      
        fetchData(url);
    }, [url]);

  return (
    <>
        <LoadingSpinner isVisible={isLoading}/>
        <h2 className="notfound" style={{display: countriesList.length === 0 ? 'block': 'none'}}>No Data</h2>
        <div className='countries'>
            {countriesList && countriesList.length !== 0 && countriesList.map(c => 
                {
                    return <Country key={c.name.common} country={c} />;
                })
            }
        </div>
    </>
  )
}
