import React, { Component } from 'react';
import Person from '../person/Person.jsx';

import css from '../../css.css';


export default class Application extends Component {
    constructor(){
        super();

        /* initial state of the component */
        this.state = {
            index: 1,
            items: {},
            url: 'http://swapi.co/api/people/'
        };

    }

    componentWillMount(){
        /* Invoked once immediately before the initial rendering occurs. */
    }

    componentDidMount(){
        /* Invoked once immediately after the initial rendering occurs.
         * At this point you can access the underlying DOM representation ("refs").
         * The componentDidMount method of child components is invoked before that method of parent component.


         Perform next operations in this method:
         * integrate with other JavaScript frameworks
         * set timers using setTimeout or setInterval
         * send AJAX requests
         */

    }

    getBack() {
        console.log("Going back");

        this.setState({
            index: (this.state.index <= 1) ? 1 : this.state.index - 1
        });
    }

    getNext() {
        console.log("Going back");

        this.setState({
            index: (this.state.index >= 89) ? 1 : this.state.index + 1
        });
    }

    render(){

        return <div>
        
                <button onClick={this.getBack.bind(this)}>Previous</button>
                <button onClick={this.getNext.bind(this)}>Next</button>

                <Person url={this.state.url + this.state.index}></Person>
        </div>;
    }
}