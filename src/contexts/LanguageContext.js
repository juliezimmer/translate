import React from 'react';

// creates the context object
const Context = React.createContext('english');

// this sets up LanguageStore as a named export.
export class LanguageStore extends React.Component {
   state = {
      language: 'english'
   };

   // will give other components the ability to change the language selection/state property
  onLanguageChange = language => {
      this.setState({ language });
   }; 
   
   render(){
      return (
         <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
           {this.props.children} 
         </Context.Provider>
      );
   }
}
export default Context;