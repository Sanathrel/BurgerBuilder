import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import axios from '../../../axios-orders.js';

import './ContactData.css';

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		adress: {
			street: '',
			postalCode: ''
		},
		loading: false
	}

	orderHandler = (event) => {
		event.preventDefault();

		this.setState({ loading: true });

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Max',
				address: {
					street: 'Test 1',
					zipCode: '41352',
					country: 'Germany'
				},
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		};

		axios.post('/orders.json', order)
			.then(response => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})
			.catch(error => {
				this.setState({ loading: false });
			});
	}

	render() {
		let form = (
			<form>
				<input type="text" name="name" placeholder="Your Name" />
				<input type="email" name="email" placeholder="Your E-Mail" />
				<input type="text" name="street" placeholder="Street" />
				<input type="text" name="postal" placeholder="Postal Code" />
				<Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
			</form>
		);

		if (this.state.loading) {
			form = <Spinner />;
		}

		return (
			<div className='ContactData'>
				<h4>Enter your Contact Data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;