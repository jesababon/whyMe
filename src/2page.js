import React from 'react'
import {ReactComponent as RightArrow} from './images/next.svg';
// import ChoiceList from '@cmsgov/design-system/dist/components/ChoiceList/ChoiceList'
import Choice from '@cmsgov/design-system/dist/components/ChoiceList/Choice'

class Second extends React.Component{
   constructor(props){
      super(props);
      this.firstBox = this.firstBox.bind(this);
      this.secondBox = this.secondBox.bind(this);
      this.state = {
         details: {first_val:'', second_val:''}
      };
  
      // this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    firstBox(event) {
     const value= event.target.value;
      this.setState(function(state){
         return{
            details: Object.assign({},
               state.details, {
                  first_val: value
               })
               
         }
      })
      console.log(event.target.value);
    }

    secondBox(event) {
     const value= event.target.value;
      this.setState(function(state){
         return{
            details: Object.assign({},
               state.details, {
                  second_val: value
               })
               
         }
      })
    }
   //  handleChange(event) {
   //    // this.setState({value1: event.target.id, value2: event.target.id});
   //    this.setState({value: event.target.value});
   //    console.log(event.target.value);
   //  }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      console.log(this.state)
    }

     
    render(){
      return(
         <div>
            <p className="ds-title">
               What qualities are you looking for in a junior dev?
            </p>
            <br/>
            <fieldset className="ds-c-fieldset ds-u-display--inline-block">
            {/* <ChoiceList
               choices={[
               { label: 'Believes in clean code and follows OOP.', value: 'A', defaultChecked:true},
               { label: 'Strong passion for good design.', value: 'B' },
               { label: 'Eager to learn whatever is required.', value: 'C' },
               { label: 'Strong interest in civic tech.', value: 'D' },
               { label: 'Experience being a team player.', value: 'E' },
               { label: 'Strong interest in civic tech', value: 'F' },
               ]}
               className=" checkbox_choices"
               // name="checkbox_choices"
               label="Choose your requirements."
               hint="Minimum of one requirement."
               type="checkbox"
            /> */}
            <Choice
            className="checkbox_choice"
            type="checkbox"
            label="Loves dogs."
            name='value1' value='1'
            onChange={this.firstBox} 
            />
            <Choice
            //   defaultChecked
            className="checkbox_choice"
            type="checkbox"
            label="Loves flowers."
            name='value2' value='2'
            onChange={this.secondBox} 
            />
            </fieldset>
            <br/>
            {/* <input type="text" className="ds-c-field ds-u-display--inline-block" /> */}
            &nbsp;
            <button onClick={this.handleSubmit} className="ds-c-button ds-c-button--primary ds-u-margin-top--2">
               Submit
               <RightArrow className="ds-u-margin-left--1"/>
            </button>
            <br/>
            {/* <ul className="ds-c-list ds-u-font-size--h5 " >
               <li><strong>Legislative</strong> – Makes laws (Congress)</li>
               <li><strong>Executive</strong> – Carries out laws (President, Vice President, Cabinet)</li>
               <li><strong>Judicial</strong> – Evaluates laws (Supreme Court and other courts)</li>
            </ul> */}
         </div>
      )
      }
}

export default Second;