import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '../apollo';

const GET_SINGLE_POST = gql`
  {
    post(id: 1) {
      title
      body
    }
  }
`

function Screen() {
  const { data, loading } = useQuery(GET_SINGLE_POST);

  if (loading) return <div>Loading...</div>;

  const { title, body } = data.post;

  return (
    <section>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  )
}

export default Screen
