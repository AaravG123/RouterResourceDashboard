import React from 'react';
//import './index.css';
import { PieChart, Pie, Cell } from 'recharts';
import TestCode from "./testcode";
import axios from 'axios';

class StageOnelbgroup extends React.Component {

  state = {
    NPU0: {
      group: '',
      NPU: '',
      maxEntries: null,
      usedEntries: null,
      percentUsage: null,
      color: ''
    },
    NPU1: {
      group: '',
      NPU: '',
      maxEntries: null,
      usedEntries: null,
      percentUsage: null,
      color: ''
    },
    NPU2: {
      group: '',
      NPU: '',
      maxEntries: null,
      usedEntries: null,
      percentUsage: null,
      color: ''
    },
    NPU3: {
      group: '',
      NPU: '',
      maxEntries: null,
      usedEntries: null,
      percentUsage: null,
      color: ''
    },
    datapoints: []
  }
    
    
  componentDidMount = () => {
    this.getData();
  };


  getData = () => {
    axios.get('//localhost:8080/api')
      .then((response) => {
        const data = response.data;
        this.setState({ datapoints: data });
        console.log('Data retrieved!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  render() {

    let getNPU0Group = this.state.datapoints.map((el) => {return el.NPU0.group});
    let getNPU0NPU = this.state.datapoints.map((el) => {return el.NPU0.NPU});
    let getNPU0MaxEntries = this.state.datapoints.map((el) => {return el.NPU0.maxEntries});
    let getNPU0UsedEntries = this.state.datapoints.map((el) => {return el.NPU0.usedEntries});
    let getNPU0PercentUsage = this.state.datapoints.map((el) => {return el.NPU0.percentUsage});
    let getNPU0Color = this.state.datapoints.map((el) => {return el.NPU0.color});

    let getNPU1Group = this.state.datapoints.map((el) => {return el.NPU1.group});
    let getNPU1NPU = this.state.datapoints.map((el) => {return el.NPU1.NPU});
    let getNPU1MaxEntries = this.state.datapoints.map((el) => {return el.NPU1.maxEntries});
    let getNPU1UsedEntries = this.state.datapoints.map((el) => {return el.NPU1.usedEntries});
    let getNPU1PercentUsage = this.state.datapoints.map((el) => {return el.NPU1.percentUsage});
    let getNPU1Color = this.state.datapoints.map((el) => {return el.NPU1.color});

    let getNPU2Group = this.state.datapoints.map((el) => {return el.NPU2.group});
    let getNPU2NPU = this.state.datapoints.map((el) => {return el.NPU2.NPU});
    let getNPU2MaxEntries = this.state.datapoints.map((el) => {return el.NPU2.maxEntries});
    let getNPU2UsedEntries = this.state.datapoints.map((el) => {return el.NPU2.usedEntries});
    let getNPU2PercentUsage = this.state.datapoints.map((el) => {return el.NPU2.percentUsage});
    let getNPU2Color = this.state.datapoints.map((el) => {return el.NPU2.color});

    let getNPU3Group = this.state.datapoints.map((el) => {return el.NPU3.group});
    let getNPU3NPU = this.state.datapoints.map((el) => {return el.NPU3.NPU});
    let getNPU3MaxEntries = this.state.datapoints.map((el) => {return el.NPU3.maxEntries});
    let getNPU3UsedEntries = this.state.datapoints.map((el) => {return el.NPU3.usedEntries});
    let getNPU3PercentUsage = this.state.datapoints.map((el) => {return el.NPU3.percentUsage});
    let getNPU3Color = this.state.datapoints.map((el) => {return el.NPU3.color});

    const routerInfoList = [
      {
        group: getNPU0Group,
        NPU: getNPU0NPU,
        maxEntries: getNPU0MaxEntries,
        usedEntries: getNPU0UsedEntries,
        percentUsage: getNPU0PercentUsage,
        color: getNPU0Color
      },
      {
        group: getNPU1Group,
        NPU: getNPU1NPU,
        maxEntries: getNPU1MaxEntries,
        usedEntries: getNPU1UsedEntries,
        percentUsage: getNPU1PercentUsage,
        color: getNPU1Color
      },
      {
        group: getNPU2Group,
        NPU: getNPU2NPU,
        maxEntries: getNPU2MaxEntries,
        usedEntries: getNPU2UsedEntries,
        percentUsage: getNPU2PercentUsage,
        color: getNPU2Color
      },
      {
        group: getNPU3Group,
        NPU: getNPU3NPU,
        maxEntries: getNPU3MaxEntries,
        usedEntries: getNPU3UsedEntries,
        percentUsage: getNPU3PercentUsage,
        color: getNPU3Color
      }
    ];

    for (let i = 0; i < routerInfoList.length; i++) {
      routerInfoList[i].percentUsage = (routerInfoList[i].usedEntries/routerInfoList[i].maxEntries)*100;
    }
    

    for (let i = 0; i < routerInfoList.length; i++) {
      if (routerInfoList[i].percentUsage >= 95) {
        routerInfoList[i].color = "Red";
      }
      if (routerInfoList[i].percentUsage >= 80 && routerInfoList[i].percentUsage < 95) {
	      routerInfoList[i].color = "Yellow";
      }
      if (routerInfoList[i].percentUsage >= 0 && routerInfoList[i].percentUsage< 80) {
        routerInfoList[i].color = "Green";
      }
    }


    


    const COLORS = ['red', 'green'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

    const NPU0data = [
      { name: "Used", value: routerInfoList[0].percentUsage },
      { name: "Empty", value: 100-routerInfoList[0].percentUsage}
    ];
    const NPU1data = [
      { name: "Used", value: routerInfoList[1].percentUsage },
      { name: "Empty", value: 100-routerInfoList[1].percentUsage}
    ];
    const NPU2data = [
      { name: "Used", value: routerInfoList[2].percentUsage },
      { name: "Empty", value: 100-routerInfoList[2].percentUsage}
    ];
    const NPU3data = [
      { name: "Used", value: routerInfoList[3].percentUsage },
      { name: "Empty", value: 100-routerInfoList[3].percentUsage}
    ];

    
  
    return (
      <div>
        <TestCode />
        <div style={ { 'textAlign': 'center' } }>
          <h1>stage1_lb_group</h1>
          <h2>NPU-0</h2>
        <PieChart width={window.innerWidth} height={400}>
          <Pie
            data={NPU0data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {NPU0data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
          <p>Usage State: {routerInfoList[0].color}</p>
          <p>There are {routerInfoList[0].usedEntries} out of {routerInfoList[0].maxEntries} items used.</p>
          <h2>NPU-1</h2>
        <PieChart width={window.innerWidth} height={400}>
          <Pie
            data={NPU1data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {NPU1data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
          <p>Usage State: {routerInfoList[1].color}</p>
          <p>There are {routerInfoList[1].usedEntries} out of {routerInfoList[1].maxEntries} items used.</p>
          <h2>NPU-2</h2>
        <PieChart width={window.innerWidth} height={400}>
          <Pie
            data={NPU2data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {NPU2data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
          <p>Usage State: {routerInfoList[2].color}</p>
          <p>There are {routerInfoList[2].usedEntries} out of {routerInfoList[2].maxEntries} items used.</p>
          <h2>NPU-3</h2>
        <PieChart width={window.innerWidth} height={400}>
          <Pie
            data={NPU3data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {NPU2data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
          <p>Usage State: {routerInfoList[3].color}</p>
          <p>There are {routerInfoList[3].usedEntries} out of {routerInfoList[3].maxEntries} items used.</p>
        </div>
      </div>
    )
  }
}

export default StageOnelbgroup;






