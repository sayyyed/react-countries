import React from 'react'

export const Country = ({country}) => {
  return (
    <div className='country'>
        <h2 style={{textAlign: "center"}}>{country.name.common}</h2>
        <div className='field'>
            <h3 className='label'>Official Name:</h3>
            <h3 className='field-data'>{country.name.official}</h3>
        </div>
        <div className='field'>
            <h3 className='label'>Capital:</h3>
            <h3 className='field-data'>{country.capital}</h3>
        </div>
        <div className='field'>
            <img src={country.flags.png} alt={country.altSpellings[0]} className='flag' />
        </div>
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <a href={country.maps.googleMaps} target='_blank' rel="noreferrer" className='map-link' >Google Maps</a>
        </div>
        <div style={{textAlign: "center", marginTop: "5px"}}>
            <p>{country.timezones[0]}</p>
        </div>
    </div>
  )
}
