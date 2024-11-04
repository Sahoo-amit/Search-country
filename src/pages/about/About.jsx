import React, { useEffect, useState } from 'react'
import countryData from '../../api/Countrydata.json'
import './About.css'

const About = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
    setData(countryData)
  },[])

  
  return (
    <div className='about'>
      <h1 className='heading'>Here are the intersting facts of some countries</h1>
      <ul>
        {
          data.map((item)=>{
            const {id, name, capital, population, interestingFact} = item
            return(
              <li key={id}>
                  <h1 className='name'>{name}</h1>
                  <p className='capital'>
                    <span>Capital :</span>
                    {capital}
                  </p>
                  <p className='population'>
                    <span>Population :</span>
                    {population.toLocaleString()}
                  </p>
                  <p className='fact'>
                    <span>Interesting fact :</span>
                    {interestingFact}
                  </p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default About