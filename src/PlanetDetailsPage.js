import React, { Component } from 'react';

class PlanetDetailsPage extends Component {
    constructor(){
        super();
        this.state = { planet: {} };
    }
    componentDidMount() {
        const planetId = this.props.match.params.planetId;
        fetch(`https://swapi.co/api/planets/${planetId}`)
         .then(res => res.json())
         .then(json => this.setState({ planet: json }));
    }
    render() {
        const planetId = this.props.match.params.planetId;
        return (
            <div>
                <h1>Planet details. For planet {this.state.planet.name}</h1>
                <p>Put some details here.</p>
            </div>
        );
    }
}

export default PlanetDetailsPage;