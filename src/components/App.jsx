import { Component } from "react";
import Filter from "./Filter/Filter";

import ContactForm from "./ContactForm/ContactForm";
import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

class App extends Component {
    state = {
  contacts: [],
      name: '',
      
}

  
  componentDidMount() {


  }

  componentDidUpdate = (prevProps, prevState) => {
  
  }
  componentWillUnmount = () => {

    
  }
  
   render() {
     return (<div>Hello!
       
       <Filter />
       <ContactForm />
     </div>)
    
  }
}
export default App;