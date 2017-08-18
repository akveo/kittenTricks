import React from 'react';
import {
  RkPicker,
} from 'react-native-ui-kitten';

export class DatePicker extends React.Component {
  componentName = 'DatePicker';

  constructor(props) {
    super(props);
    this.state = {pickerVisible: false};
    this.days = this.generateArrayFromRange(1, 31);
    this.years = this.generateArrayFromRange(2000, 2030);
    this.months = [
      {key: 1, value: 'Jun'}, {key: 2, value: 'Feb'},
      {key: 3, value: 'Mar'}, {key: 4, value: 'Apr'},
      {key: 5, value: 'May'}, {key: 6, value: 'Jun'},
      {key: 7, value: 'Jul'}, {key: 8, value: 'Aug'},
      {key: 9, value: 'Sep'}, {key: 10, value: 'Oct'},
      {key: 11, value: 'Nov'}, {key: 12, value: 'Dec'},
    ];
  }

  handlePickedValue(date) {
    let resultDate = {
      month: date[0],
      day: date[1],
      year: date[2],
    };
    this.props.onConfirm(resultDate);
  };

  generateArrayFromRange(start, finish) {
    return Array.apply(null, Array(finish - start + 1)).map((_, i) => start + i);
  }

  findElementByKey(key, array){
    let element = array[0];
    array.forEach((value) => {
      if (value.key === key) element = value;
    });
    return element;
  }

  render() {
    let {
      onConfirm,
      selectedYear,
      selectedMonth,
      selectedDay,
      ...props
    } = this.props;
    return (
      <RkPicker
        rkType='highlight'
        title='Set Date'
        data={[this.months, this.days, this.years]}
        onConfirm={(date) => this.handlePickedValue(date)}
        selectedOptions={[this.findElementByKey(selectedMonth, this.months), selectedDay || 1, selectedYear||2000]}
        optionRkType='subtitle small'
        selectedOptionRkType='header4'
        titleTextRkType='header4'
        cancelTextRkType='light'
        confirmTextRkType=''
        {...props}/>
    );
  }
}