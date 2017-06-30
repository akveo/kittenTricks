import React from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';
import {
  RkComponent,
  RkTheme,
  RkText
} from 'react-native-ui-kitten';

import {
  VictoryChart,
  VictoryAxis,
  VictoryArea,
  VictoryScatter,
  VictoryGroup
} from 'victory-native';


export class AreaChart extends RkComponent {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {x: 1, y: 1},
        {x: 2, y: 2},
        {x: 3, y: 1},
        {x: 4, y: 2},
        {x: 5, y: 3},
        {x: 6, y: 3},
        {x: 7, y: 4},
        {x: 8, y: 3},
        {x: 9, y: 2},
        {x: 10, y: 4},
      ]
    }
  }

  componentWillMount() {
    this.size = Dimensions.get('window').width;
  }

  componentDidMount() {
    this.setStateInterval = setInterval(() => {
      let positive = Math.random() > 0.5;
      let newValue = this.state.data[this.state.data.length - 1].y;
      if (newValue > 3) {
        positive = false
      } else if (newValue < 2) {
        positive = true
      }
      newValue = positive ? newValue + 1 : newValue - 1;
      let newData = this.state.data.map((d, i) => {
        let x = d.x;
        let y = i == this.state.data.length - 1 ? newValue : this.state.data[i + 1].y;
        return {x, y}
      });
      this.setState({
        data: newData
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.setStateInterval);
  }

  render() {
    return (
      <View>
        <RkText rkType='header4'>REAL TIME VISITORS</RkText>
        <VictoryChart padding={{top: 20, left: 40, right: 5, bottom: 5}} width={this.size - 60}>
          <VictoryAxis
            tickValues={[]}
            style={{
              axis: {stroke: 'transparent'}
            }}
          />
          <VictoryAxis
            dependentAxis
            tickValues={['50', '100', '150', '200']}
            style={{
              axis: {stroke: 'transparent'},
              grid: {stroke: RkTheme.current.colors.disabled, strokeWidth: 0.5},
              tickLabels: {
                fontSize: 14,
                stroke: RkTheme.current.colors.text.secondary,
                fill: RkTheme.current.colors.text.secondary,
                fontFamily: RkTheme.current.fonts.family.regular,
                strokeWidth: 0.5
              }
            }}
          />
          <VictoryGroup data={this.state.data}>
            <VictoryArea
              style={{
                data: {
                  fill: RkTheme.current.colors.charts.area.fill,
                  fillOpacity: 0.5,
                  stroke: RkTheme.current.colors.charts.area.stroke,
                  strokeOpacity: 0.8,
                  strokeWidth: 1.5
                }
              }}
            />
            <VictoryScatter
              style={{
                data: {
                  fill: 'white',
                  stroke: RkTheme.current.colors.charts.area.stroke,
                  strokeOpacity: 0.8,
                  strokeWidth: 1.5
                }
              }}
            />
          </VictoryGroup>
        </VictoryChart>
      </View>
    )
  }
}
