'use strict';

var React = require('react');
var className = require('classnames');

var FaStack = React.createClass({
    render: function() {
        var classSet = className('fa-stack', 'fa-lg', this.props.className);

        return React.createElement(
            'span',
            { className: classSet, style: this.props.style },
            this.props.children
        );
    }
});

module.exports = FaStack;
