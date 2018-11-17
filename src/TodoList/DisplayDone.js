import React, { Component } from 'react';

export default class DisplayDone extends Component {

    render() {
        if (this.props.done) {
            return (<b>déjà fait</b>);
        }
        return (<b>à faire</b>);
    }

}
