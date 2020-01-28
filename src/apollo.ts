import * as Apollo from 'react-apollo-hooks';
import { DocumentNode } from 'graphql';

export * from 'react-apollo-hooks';

export const useQuery = <IData, IVariables>(
  query: DocumentNode,
  options?: Apollo.QueryHookOptions<IVariables>
) => {
  const defaultOptions = {
    suspend: true,
    ...options
  };

  // use the original hooks to run the query
  const result = Apollo.useQuery<IData, IVariables>(query, defaultOptions);

  // if we have an API error, throw it!
  if (result.error) {
    throw result.error;
  }

  return result;
};
