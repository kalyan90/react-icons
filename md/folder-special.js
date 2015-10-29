
var React = require('react');
var IconBase = require('../IconBase');

export default class MdFolderSpecial extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6.42 12L10 15.9 6.42 18l.95-4.07-3.16-2.74 4.16-.36L10 7l1.63 3.84 4.16.36-3.16 2.74.95 4.06z"/></g>
            </IconBase>
        );
    }
}