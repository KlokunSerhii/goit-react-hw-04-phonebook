import * as Yup from 'yup';

const validName =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;


const validNumber =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .matches(validName, ' Please enter a Name')
      .required('Please enter a Name'),
    number: Yup.string()
      .min(5, 'Too Short!')
      .matches(validNumber, 'Please enter a Number')
      .required('Please enter a Number'),
  });
