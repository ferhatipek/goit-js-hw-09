
let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form-state');

try {
  const savedData = localStorage.getItem('local-storage');
  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
} catch (error) {
  console.log(error);
}

form.addEventListener('input', onInput);

function onInput(event) {
  try {
    const trimmedValue = event.target.value.trim();
    formData[event.target.name] = trimmedValue;
    localStorage.setItem('local-storage', JSON.stringify(formData));
  } catch (error) {
    console.error('Error:', error);
  }
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, message } = formData;

  if (!email || !message) {
    alert('Boş bırakılamaz!!');
    return;
  } else {
    console.log(formData);
  }

  try {
    form.reset();
    formData = {
      email: '',
      message: '',
    };
    localStorage.removeItem('local-storage');
  } catch (error) {
    console.error(error);
  }
}
