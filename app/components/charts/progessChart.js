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
} from "victory-native";

import {Svg, Text as SvgText} from 'react-native-svg';
import {scale} from '../../utils/scale';

export class ProgressChart extends RkComponent {


  constructor(props) {
    super(props);
    this.size = 120;
    this.fontSize = 25;
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
          <Svg width={scale(this.size)} height={scale(this.size)}>
            <VictoryPie
              labels={[]}
              padding={0}
              standalone={false}
              width={scale(this.size)} height={scale(this.size)}
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
            <SvgText
              textAnchor="middle" verticalAnchor="middle"
              x={scale(this.size / 2)}
              y={scale(this.size / 2 - this.fontSize / 2)}
              dy={scale(this.fontSize * -0.25)}
              height={scale(this.fontSize)}
              fontSize={scale(this.fontSize)}
              fontFamily={RkTheme.current.fonts.family.regular}
              stroke={RkTheme.current.colors.text.base}
              fill={RkTheme.current.colors.text.base}>
              {`${this.state.percents}%`}
            </SvgText>
          </Svg>
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
