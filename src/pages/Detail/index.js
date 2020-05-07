import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../services/api'

const Detail = () => {
  const [ person, setPerson ] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    api.get(`people/${id}`).then(response => setPerson(response.data))
  }, [ id ])

  if (!person)
    return <h2 className='loading'>Loading...</h2>

  return (
  <>
    <h2>{person.name}</h2>
  
    <h4>Height:</h4> 
    {person.height / 100} m 

    <h4>Mass:</h4> 
    {person.mass} Kg 

    <h4>Birth Year:</h4>
    {person.birth_year}

    <h4>Gender:</h4>
    {person.gender}
  </>
  )
}

export default Detail