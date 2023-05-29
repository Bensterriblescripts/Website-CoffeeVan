import { useState, ChangeEvent, FormEvent } from "react";
import axios from 'axios';

interface FormState {
  name: string;
  phone: string;
  type: string;
  size: number;
  details: string;
  time: string;
}

const MyForm = () => {
  const [formState, setFormState] = useState<FormState>({ name: '', phone: '', type: '', size: 1, details: '', time: '' });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target;
    const name = target.name;
  
    if (name === 'size') {
      setFormState({
        ...formState,
        [name]: parseInt(target.value),
      });
    } else {
      setFormState({
        ...formState,
        [name]: target.value,
      });
    }
  };
  

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState);

    axios.post('http://localhost:3000/formpost', formState)
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-pink-200 rounded-lg p-4 scale-125">
      <div className="mb-2 text-center">
        <label>
          Name
          <input
            className="w-full form-input text-center rounded-md"
            type="text"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="mb-2 text-center">
        <label>
          Mobile
          <input
            className="w-full form-input text-center rounded-md"
            type="text"
            name="phone"
            value={formState.phone}
            onChange={handleInputChange}
            placeholder="021 000 1111"
          />
        </label>
      </div>
      <div className="mb-2 text-center">
        <label>
          Coffee
          <input
            className="w-full form-input text-center rounded-md"
            type="text"
            name="type"
            value={formState.type}
            onChange={handleInputChange}
            placeholder="Long black"
          />
        </label>
      </div>
      <div className="mb-2 text-center">
        <div className="flex items-center">
          <input
            className="form-radio rounded-md"
            type="radio"
            name="size"
            value={1}
            checked={formState.size === 1}
            onChange={handleInputChange}
          />
          <span className="ml-2">Medium</span>
        </div>
        <div className="flex items-center">
          <input
            className="form-radio rounded-md"
            type="radio"
            name="size"
            value={2}
            checked={formState.size === 2}
            onChange={handleInputChange}
          />
          <span className="ml-2">Large</span>
        </div>
      </div>
      <div className="mb-2 text-center">
      <label>
        Extra Details
        <textarea
          className="w-full form-input text-center rounded-md"
          name="details"
          value={formState.details}
          onChange={handleInputChange}
          placeholder="Extra shot, decaf, soy milk, etc."
          rows={3}
        />
      </label>
      </div>
      <div className="mb-2 text-center">
        <label>
            Time - Today
          <input
            className="w-full form-input text-center rounded-md"
            type="time"
            name="time"
            value={formState.time}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="ll that's disapointing
      border-2 border-pink-300 bg-amber-900 text-white rounded-lg p-1 hover:scale-105 w-16 text-center">
        <button><input type="submit" value="Submit"/></button>
      </div>
    </form>
  );
};

export default MyForm;
