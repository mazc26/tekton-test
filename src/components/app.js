import React, { Component } from 'react';

import CalculateDistanceComponent from '../containers/calculate-distance';
import DistanceChart from '../containers/chart'

export default class App extends Component {
  render() {
    return (
      <div>
        <CalculateDistanceComponent />
        <DistanceChart />
      </div>
    );
  }
}
