import Head from 'next/head';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const RaceStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: var(--maxWidth);
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_RACE_QUERY = gql`
  query SINGLE_RACE_QUERY($id: ID!) {
    Race(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleRace({ id }) {
  const { data, loading, error } = useQuery(SINGLE_RACE_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Race } = data;

  return (
    <RaceStyles>
      <Head>
        <title>Virtual 5k | {Race.name}</title>
      </Head>
      <img
        src={Race.photo.image.publicUrlTransformed}
        alt={Race.photo.altText}
      />
      <div className="details">
        <h2>{Race.name}</h2>
        <p>{Race.description}</p>
      </div>
    </RaceStyles>
  );
}
