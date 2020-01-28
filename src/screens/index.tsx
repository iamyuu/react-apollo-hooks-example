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
  const { data } = useQuery(GET_SINGLE_POST);

  const { title, body } = data.post;

  return (
    <section>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  )
}

export default Screen
