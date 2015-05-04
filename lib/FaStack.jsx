'use strict';

const React = require('react');
const className = require('classnames');

const FaStack = React.createClass({
    render() {
        let classSet = className('fa-stack', 'fa-lg', this.props.className);

        return (
            <span className={classSet} style={this.props.style}>
                {this.props.children}
            </span>
        );
    }
});

module.exports = FaStack;
