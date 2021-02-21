import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import { ALL_RACES_QUERY } from './Races';

const CREATE_RACE_MUTATION = gql`
  mutation CREATE_RACE_MUTATION(
    # which varialbes  are getting passed in
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createRace(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      status
      description
    }
  }
`;

export default function CreateRace() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'nice race',
    price: 2345,
    description: 'a greate reace for emvyone',
  });
  const [createRace, { error, loading, data }] = useMutation(
    CREATE_RACE_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_RACES_QUERY }],
    }
  );
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        // submit input fields to the backend
        const res = await createRace();
        clearForm();
        // go to that products page
        Router.push({ pathname: `/race/${res.data.createRace.id}` });
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          image
          <input
            required
            onChange={handleChange}
            type="file"
            name="image"
            id="image"
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            onChange={handleChange}
            value={inputs.name}
            type="text"
            name="name"
            id="name"
            placeholder="name"
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            onChange={handleChange}
            value={inputs.price}
            type="number"
            name="price"
            id="price"
            placeholder="price"
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            onChange={handleChange}
            value={inputs.description}
            name="description"
            id="description"
            placeholder="description"
          />
        </label>
        <button type="submit">+ Add Race</button>
      </fieldset>
    </Form>
  );
}
