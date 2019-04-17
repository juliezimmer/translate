import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
   // this forms a link between the class and context object
   static contextType = LanguageContext;
   
   render() {
      const text = this.context === 'english' ? 'Name' : 'Naam';
      
      return (
         <div className="ui field">
            <label>{text}</label>
            <input type="text"/>
         </div>
      );
   }
}

export default Field;