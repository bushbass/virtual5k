import useForm from '../lib/useForm';

export default function CreateRace() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'nice race',
    price: 2345,
    description: 'a greate reace for emvyone',
  });
  return (
    <div>
      <form action="">
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
        </label>{' '}
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
        </label>
      </form>
      <button onClick={clearForm}>clear form </button>
      <button onClick={resetForm}>reset form </button>
    </div>
  );
}
