import React, { Component } from 'react';
import Film from '../films/Films.jsx';

export default class Person extends Component {
    constructor(){
        super();

        /* initial state of the component */
        this.state = {
            person: ""
        }
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
        console.log("componentDidMount");
        
        this.fetchData(this.props.url);
    }

    componentWillReceiveProps(updatedProps){
        /* Invoked when a component is receiving new props.
         * Not called for the initial render.
         * The old props can be accessed via this.props
         */

        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate(updatedProps, updatedState){
        /* Invoked before rendering when new props or state are being received.
         * Not called for the initial render.
         * Return false to not trigger component update (rendering).
         * By default, shouldComponentUpdate always returns true.
         * If performance is a bottleneck then use shouldComponentUpdate to speed up your app.
         */
        console.log("shouldComponentUpdate");

        return true;
    }

    componentWillUpdate(updatedProps, updatedState){
        /* Invoked immediately before rendering when new props or state are being received.
         * Not called for the initial render.
         * If you need to update state in response to a prop change, use componentWillReceiveProps instead.
         */

        if(updatedProps.url != this.props.url) {
            this.fetchData(updatedProps.url);
        }

        console.log("componentWillUpdate");


    }

    componentDidUpdate(updatedProps, updatedState){
        /* Invoked immediately after the component's updates are flushed to the DOM.
         * Not called for the initial render.
         * Use it to operate on the DOM when the component has been updated.
         */
        console.log("componentDidUpdate");

    }

    fetchData(personUrl) {

        fetch(personUrl)
            .then(result => result.json())
            .then(person => this.setState({person}));

    }

    render(){
        var filmsContainer = [];
        if (this.state.person.films && this.state.person.films.length) {

            filmsContainer = this.state.person.films.map(function (item) {
                return <Film filmUrl={item} key={item}></Film>
            });

        }

        return <div className="person">
            {this.state.person ?
                    <dl>
                        <dt>Name: </dt>
                        <dd>{this.state.person.name}</dd>

                        <dt>Height:</dt>
                        <dd>{this.state.person.height}</dd>

                        <dt>Mass:</dt>
                        <dd>{this.state.person.mass}</dd>

                        <dt>Gender: </dt>
                        <dd>{this.state.person.gender}</dd>

                        <dt>Hair Color:</dt>
                        <dd> {this.state.person.hair_color}</dd>

                        <dt>Skin Color: </dt>
                        <dd>{this.state.person.skin_color}</dd>

                        <dt>Eye Color:</dt>
                        <dd>{this.state.person.eye_color}</dd>

                        <dt>Birth Year:</dt>
                        <dd>{this.state.person.birth_year}</dd>

                        <dt>Homeworld:</dt>
                        <dd>{this.state.person.homeworld}</dd>

                        <dt>Films:</dt>
                        <dd>{filmsContainer}</dd>
                    </dl>
                    :
                    <div>Loading...</div>
            }

            </div>
    }
}
