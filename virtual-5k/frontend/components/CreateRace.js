import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateRace() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'nice race',
    price: 2345,
    description: 'a greate reace for emvyone',
  });
  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputs);
        }}
      >
        <fieldset>
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
            name
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
            name
            <input
              onChange={handleChange}
              value={inputs.price}
              type="number"
              name="price"
              id="price"
              placeholder="price"
            />
          </label>{' '}
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
    </div>
  );
}
