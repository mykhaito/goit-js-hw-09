document.addEventListener('DOMContentLoaded', () => {
  const localStorageKey = 'feedback-form-state';
  const formData = {
    email: '',
    message: '',
  };
  const form = document.querySelector('.feedback-form');

  form.addEventListener('input', evt => {
    if (evt.target.name === 'email') {
      formData.email = evt.target.value.trim();
    } else if (evt.target.name === 'message') {
      formData.message = evt.target.value.trim();
    }
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });
  form.addEventListener('submit', evt => {
    evt.preventDefault();
    if (!formData.email || !formData.message) {
      alert('fill out all fields');
      return;
    } else {
      console.log(formData);
      form.reset();
      localStorage.removeItem(localStorageKey);
      formData.email = '';
      formData.message = '';
    }
  });
});
