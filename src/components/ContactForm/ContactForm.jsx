import {useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Label, Forma, Input, Button } from './ContactForm.styled';
import { HiPlusCircle } from 'react-icons/hi';



const ContactForm =({onSubmit})=>{

const [name, setName] = useState('')
const [number, setNumber] = useState('')

useEffect(()=>{
  setName(name);
  setNumber(number)
},[name,number])

  const handleSubmit = (values) => {
    onSubmit(values);
    resetForm();
  };

  const resetForm = () =>{
    setName('');
    setNumber('')
  }



    return (
      <Formik initialValues={{ name, number }} onSubmit={handleSubmit()}>
        <Forma>
          <Label>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Name"
            />
          </Label>
          <Label>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Number"
            />
          </Label>
          <Button type="submit" aria-label="add contact">
            <HiPlusCircle />
          </Button>
        </Forma>
      </Formik>
    );
  
}
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


