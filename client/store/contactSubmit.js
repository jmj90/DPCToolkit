import axios from 'axios';
import history from '../history'
import firebase from '../../server/firebase'

// CONTACT ACTION TYPES
const INIT_CONTACTS = 'INIT_CONTACTS';
const CREATE_CONTACT = 'CREATE_CONTACT';
const EDIT_CONTACT = 'EDIT_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';

// CONTACT ACTION CREATORS
const initContact = contacts => ({ type: INIT_CONTACTS, contacts});
const createContact = contact => ({ type: CREATE_CONTACT, contact });
// const editContact = contact => ({ type: EDIT_CONTACT, contact});
// const deleteContact = id => ({ type: DELETE_CONTACT, id });

// CONTACT REDUCER
export default function reducer(contacts = [], action) {
  switch (action.type) {

    case INIT_CONTACTS:
      return action.contacts;

    case CREATE_CONTACT:
      return [...contacts, action.contact];

    // case EDIT_CONTACT:
    //   return contacts.map(contact => (
    //     contact.id === action.contact.id ? action.contact : contact
    //   ));

    // case DELETE_CONTACT:
    //   return contacts.filter(contact => contact.id !== action.id);

    default:
      return contacts;
  }
}

// CONTACTS THUNK CREATORS
export const fetchContact = () => dispatch => {
  axios.get('/api/contacts')
    .then(res => dispatch(initContact(res.data)))
    .catch(err => console.error('Error fetching contacts!', err));
}

export const addContact = contact => dispatch => {

  let data;
  let form = {
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    city: contact.city,
    state: contact.state,
    company: contact.company,
    comment: contact.comment
    }

  firebase.database().ref(`scholarship-submissions/${contact.name}/submissions`).once('value')
  .then(function(snapshot) {
    data = snapshot.val()
    console.log('data', data)
  })
  .then(()=> {
      var newPostKey = firebase.database().ref().child(`scholarship-submissions/${contact.name}/submissions`).push().key;
      var updates = {};
      updates[`/scholarship-submissions/${contact.name}/submissions/` + newPostKey] = form;
      firebase.database().ref().update(updates);
  })
  .then(() => {
    axios.post('/api/contacts', contact)
      .then(res => {
        dispatch(createContact(res.data))
        window.location.href = `/confirmation`
      })
  })
    .catch(err => {
      console.error(`Submission Error: ${contact}`, err)
      window.location.href = `/error_500`
    });
}



// export const setCurrentQuestionThunk = (qId, pin) => dispatch =>{
//   firebase.database().ref(`gameRooms/${pin}/quiz/${qId}`)
//       .once('value', snapshot => {
//         const currentQuestion = snapshot.val();
//         console.log('currentqfromfb', currentQuestion)
//         dispatch(setCurrentQuestion(currentQuestion))
//         });
//
// }


//
// export const updateContact = contact => dispatch => {
//   axios.put(`/api/contacts/${contact.id}`, contact)
//     .then(res => {
//       dispatch(editContact(res.data))
//       history.push(`/contacts/${contact.id}`)
//     })
//     .catch(err => console.error(`Error updating contact: ${contact}`, err));
// }


// export const removeContact = id => dispatch => {
//   dispatch(deleteContact(id));
//   axios.delete(`/api/contacts/${id}`)
//     .catch(err => console.error(`Error deleting contact: ${id}!`, err));
// }
