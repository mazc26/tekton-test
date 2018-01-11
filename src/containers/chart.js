import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line , XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class DistanceChart extends Component{

    constructor(props){
        super(props)
    }
    
    render(){
        const data = [
            {name: '1',  pv: 1,},
            {name: '2',  pv: 2, },
            {name: '3',  pv: 3,},
            {name: '4',  pv: 4,},
            {name: '5',  pv: 5,},
            {name: '6',  pv: 6, },
        ];
        return(
            <div>
                {this.props.coords && 
                    <div className="mainChart">
                    <LineChart width={600} height={300} data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis />
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                    </div>
                }
            </div>
        );
    }
}

const mS = state => {
    return {
      coords: state.calculate.calculate.data  
    };
};

export default connect(mS,null)(DistanceChart)