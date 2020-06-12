import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';
import { withApollo } from '../lib/apollo';
import { Text } from '../stories/Demo/1-Button.stories';

const GET_TEST_VALUE = gql`
  query MyQuery {
    test {
      value
      id
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_TEST_VALUE);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error Fetching from Hasura</p>;
  if (data && data.test)
    return (
      <div className="home">
        <h1>Data From Hasura</h1>
        <p> ID: {data.test[0].id}</p>
        <p> Value: {data.test[0].value}</p>
        <Text />
      </div>
    );
};

export default withApollo({ ssr: false })(Home);
