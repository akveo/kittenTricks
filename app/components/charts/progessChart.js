import React from 'react';
import {
  View
} from 'react-native';
import {
  RkComponent,
  RkText,
  RkTheme,
  RkStyleSheet
} from 'react-native-ui-kitten';
import {
  VictoryPie,
  VictoryChart,
  VictoryLabel,
  VictoryAxis
} from 'victory-native';
import {scale, scaleVertical} from '../../utils/scale';

export class ProgressChart extends RkComponent {


  constructor(props) {
    super(props);
    this.state = {
      percents: 72
    }
  }

  componentDidMount() {
    this.setStateInterval = setInterval(() => {
      let positive = Math.random() > 0.5;
      if (this.state.percents > 95) {
        positive = false
      } else if (this.state.percents < 60) {
        positive = true
      }
      this.setState({
        percents: positive ? this.state.percents + 1 : this.state.percents - 1
      });
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.setStateInterval);
  }

  getData() {
    return [{x: 1, y: this.state.percents}, {x: 2, y: 100 - this.state.percents}]
  }

  render() {
    return (
      <View>
        <RkText rkType='header4'>FOLLOWERS</RkText>
        <View style={styles.chartContainer}>
          <VictoryChart animate={400} padding={0} width={scale(120)} height={scale(120)}>
            <VictoryAxis dependentAxis
                         style={{
                           axis: {stroke: 'transparent'},
                           tickLabels: {
                             stroke: 'transparent',
                             fill: 'transparent'
                           }
                         }}
            />
            <VictoryAxis
              style={{
                axis: {stroke: 'transparent'},
                tickLabels: {
                  stroke: 'transparent',
                  fill: 'transparent'
                }
              }}
            />
            <VictoryPie
              labels={[]}
              style={{
                data: {
                  fill: (d) => {
                    const color = RkTheme.current.colors.charts.followersProgress;
                    return d.x === 1 ? color : 'transparent';
                  }
                }
              }}
              data={this.getData()}
              cornerRadius={scale(25)}
              innerRadius={scale(40)}>
            </VictoryPie>
            <VictoryLabel
              textAnchor="middle" verticalAnchor="middle"
              x={scale(60)} y={scale(60)}
              text={`+${this.state.percents}%` }
              style={{
                fontSize: 25,
                fontFamily: RkTheme.current.fonts.family.regular,
                stroke: RkTheme.current.colors.text.base,
                fill: RkTheme.current.colors.text.base,
              }}
            />
          </VictoryChart>
          <View>
            <RkText rkType='header4'>REACH</RkText>
            <RkText rkType='header2'>1 500 356</RkText>
            <RkText rkType='secondary2'>+6 per day in average</RkText>
          </View>
        </View>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10
  }
}));
