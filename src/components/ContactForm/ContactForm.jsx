import { Component } from "react";
import ContactList from "./ContactList/ContactList";

class ContactForm extends Component{
    state = {
        
    }
    render() {
        return (
            <>
                <h2>ContactForm</h2>
                <p>Name</p>
                <div>
                <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                    />
                    <button type="submit" onClick={() => {
                        console.log('onclick')
                    }}>Add contact</button>

                     <ContactList />
                </div>
            </>
           
        )
    }

}
export default ContactForm;