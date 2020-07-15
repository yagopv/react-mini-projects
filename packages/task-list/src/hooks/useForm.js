import { useState } from 'react';

export function useForm(onSubmit) {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleChange = event => {
    // https://medium.com/@brunogarciagonzalez/reactjs-events-exploration-a295505016f1
    event.persist();

    setFormData(currentFormData => ({
      ...currentFormData,
      [event.target.id]: event.target.value
    }));
  };

  const handleSubmit = event => {
    onSubmit(formData);
    setFormData({
      title: '',
      description: ''
    });
    event.preventDefault();
  };

  return {
    formData,
    handleChange,
    handleSubmit
  };
}
