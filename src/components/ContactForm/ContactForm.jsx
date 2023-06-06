import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Label, Forma, Input, Button } from './ContactForm.styled';
import { HiPlusCircle } from 'react-icons/hi';
import * as Yup from 'yup';

const ContactForm = ({ onSubmit }) => {
  const [name] = useState('');
  const [number] = useState('');

  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').required('Required'),
    number: Yup.number().min(2, 'Too Short!').required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name, number }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Forma>
          <Label>
            <Input type="text" name="name" placeholder="Name" />
          </Label>
          {errors.name && touched.name ? (
            <div>
              {
                "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              }
            </div>
          ) : null}
          <Label>
            <Input type="tel" name="number" placeholder="Number" />
          </Label>
          {errors.number && touched.number ? (
            <div>
              {
                'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
              }
            </div>
          ) : null}
          <Button type="submit" aria-label="add contact">
            <HiPlusCircle />
          </Button>
        </Forma>
      )}
    </Formik>
  );
};
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = (values, { resetForm }) => {
//     this.props.onSubmit(values);
//     resetForm();
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <Formik initialValues={{ name, number }} onSubmit={this.handleSubmit}>
//         <Forma>
//           <Label>
//             <Input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               placeholder="Name"
//             />
//           </Label>
//           <Label>
//             <Input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               placeholder="Number"
//             />
//           </Label>
//           <Button type="submit" aria-label="add contact">
//             <HiPlusCircle />
//           </Button>
//         </Forma>
//       </Formik>
//     );
//   }
// }
