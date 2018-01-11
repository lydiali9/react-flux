"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorAPi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
	mixins: [
		Router.Navigation
	],
	getInitialState: function() {
		return {
			author: { id: '', firstName: '', lastName: '' }
		};
	},
	setAuthorState: function(event) {
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({author: this.state.author});
	},
	saveAuthor: function(event) {
		event.preventDefault();
		AuthorAPi.saveAuthor(this.state.author);
		toastr.success('Author saved.');
		this.transitionTo('authors');
	},
	render: function() {
		return (
			<AuthorForm 
				author={this.state.author} 
				onChange={this.setAuthorState}
				onSave={this.saveAuthor} 
				errors={this.state.errors} />
		);
	}
});

module.exports = ManageAuthorPage;
