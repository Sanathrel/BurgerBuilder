import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './HOC/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import Orders from './Containers/Orders/Orders';

class App extends Component {	
  render() {
    return (
      <div>
      	<Layout>
      		<Route path='/' exact component={BurgerBuilder} />
          <Route path='/orders' component={Orders} />
      		<Route path='/checkout' component={Checkout} />
      	</Layout>
      </div>
    );
  }
}

export default App;
