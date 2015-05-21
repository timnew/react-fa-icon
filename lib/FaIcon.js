'use strict';

var React = require('react');
var className = require('classnames');

var buildClass = function buildClass(value, prefix) {
    if(value) {
        return prefix + value;
    } else {
        return null;
    }
};

var FaIcon = React.createClass({
    propTypes: {
        icon: React.PropTypes.string.isRequired,
        fixedWidth: React.PropTypes.bool,
        size: React.PropTypes.oneOf(['', 'lg', '2x', '3x', '4x', '5x']),
        listItem: React.PropTypes.bool,
        border: React.PropTypes.bool,
        pull: React.PropTypes.oneOf(['', 'left', 'right']),
        spin: React.PropTypes.bool,
        pulse: React.PropTypes.bool,
        inverse: React.PropTypes.bool,
        rotate: React.PropTypes.oneOf(['', '90', '180', '270']),
        flip: React.PropTypes.oneOf(['', 'horizontal', 'vertical']),
        stack: React.PropTypes.oneOf(['1x', '2x'])
    },
    render: function() {
        var classSet = className(
                'fa',
                'fa-' + this.props.icon,
                { 'fa-fw': this.props.fixedWidth },
                buildClass(this.props.size, 'fa-'),
                { 'fa-li': this.props.listItem },
                { 'fa-border': this.props.border },
                buildClass(this.props.pull, 'pull-'),
                { 'fa-spin': this.props.spin },
                { 'fa-pulse': this.props.pulse },
                { 'fa-inverse': !!this.props.inverse },
                buildClass(this.props.rotate, 'fa-rotate-'),
                buildClass(this.props.flip, 'fa-flip-'),
                buildClass(this.props.stack, 'fa-stack-'),
                this.props.className
            );

        return React.createElement('i', { className: classSet, style: this.props.style });
    }
});

module.exports = FaIcon;
