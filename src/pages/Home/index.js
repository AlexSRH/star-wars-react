import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import getIdFromURL from '../../utils/getIdfromURL'

const Home = () => {
  const [ peoples, setPeople ] = useState([])

  useEffect(() => {
    api.get('people').then(response => setPeople(response.data.results))
  }, [])
  
  if (!peoples.length) 
    return <h2 className='loading'>Loading...</h2>

  console.log(peoples)

  return (
    <>
      <h2>Characters</h2>
      <ul>
        {peoples.map(person => {
          const id = getIdFromURL(person.url)

          return (
            <ul key={person.url}> 
              <Link to={`/detail/${id}`}>
                {person.name}
              </Link>
            </ul>
          )
        })}
      </ul>
    </>
  )
}

export default Home