import React from 'react';
import { useQuery } from '../apollo';
import getSinglePostQuery from '../graphql/get-single-post-query.graphql';

function Screen() {
  const { data } = useQuery(getSinglePostQuery, {
    variables: {
      id: 1
    }
  });

  const { title, body } = data.post;

  return (
    <section>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  )
}

export default Screen
