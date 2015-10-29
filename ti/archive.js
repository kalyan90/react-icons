
var React = require('react');
var IconBase = require('../IconBase');

export default class TiArchive extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><g><path d="M13 12h-3c-.276 0-.5.224-.5.5s.224.5.5.5h3c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zM20 5h-17c-.553 0-1 .448-1 1s.447 1 1 1h17c.553 0 1-.448 1-1s-.447-1-1-1zM18 8h-13c-.553 0-1 .448-1 1v8c0 1.654 1.346 3 3 3h9c1.654 0 3-1.346 3-3v-8c0-.552-.447-1-1-1zm-2 10h-9c-.552 0-1-.449-1-1v-7h11v7c0 .551-.448 1-1 1z"/></g></g>
            </IconBase>
        );
    }
}