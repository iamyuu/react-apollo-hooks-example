import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const GET_SINGLE_POST = gql`
  {
    post(id: 1) {
      title
      body
    }
  }
`

function Screen() {
  const { data, loading, error } = useQuery(GET_SINGLE_POST);

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  const { title, body } = data.post;

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default Screen
