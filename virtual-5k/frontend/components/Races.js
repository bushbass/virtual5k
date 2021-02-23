import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Race from './Race';

export const ALL_RACES_QUERY = gql`
  query ALL_RACES_QUERY {
    allRaces {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const RacesListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Races() {
  const { data, loading, error } = useQuery(ALL_RACES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <RacesListStyled>
        {data.allRaces.map((race) => (
          <Race key={race.id} race={race} />
        ))}
      </RacesListStyled>
    </div>
  );
}
