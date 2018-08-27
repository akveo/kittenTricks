import React from 'react';
import { RkPicker } from 'react-native-ui-kitten';

export const DatePart = Object.freeze({ YEAR: 1, MONTH: 2, DAY: 3 });

export class DatePicker extends React.Component {
  componentName = 'DatePicker';

  state = {
    data: {
      days: DatePicker.generateArrayFromRange(1, 31),
      years: DatePicker.generateArrayFromRange(2000, 2030),
      months: [
        { key: 1, value: 'Jun' }, { key: 2, value: 'Feb' },
        { key: 3, value: 'Mar' }, { key: 4, value: 'Apr' },
        { key: 5, value: 'May' }, { key: 6, value: 'Jun' },
        { key: 7, value: 'Jul' }, { key: 8, value: 'Aug' },
        { key: 9, value: 'Sep' }, { key: 10, value: 'Oct' },
        { key: 11, value: 'Nov' }, { key: 12, value: 'Dec' },
      ],
    },
  };

  onDatePickerConfirm = (date) => {
    let resultDate = {};
    if (this.props.customDateParts) {
      let i = 0;
      if (this.props.customDateParts.includes(DatePart.MONTH)) {
        resultDate.month = date[i += 1];
      }
      if (this.props.customDateParts.includes(DatePart.DAY)) {
        resultDate.day = date[i += 1];
      }
      if (this.props.customDateParts.includes(DatePart.YEAR)) {
        resultDate.year = date[i];
      }
    } else {
      resultDate = { month: date[0], day: date[1], year: date[2] };
    }
    this.props.onConfirm(resultDate);
  };

  static generateArrayFromRange(start, finish) {
    return Array(...Array((finish - start) + 1)).map((_, i) => start + i);
  }

  findElementByKey(key, array) {
    let element = array[0];
    array.forEach((value) => {
      if (value.key === key) element = value;
    });
    return element;
  }

  render() {
    const {
      onConfirm,
      selectedYear,
      selectedMonth,
      selectedDay,
      customDateParts,
      ...props
    } = this.props;

    let data = [this.state.data.months, this.state.data.days, this.state.data.years];
    let selectedOptions = [
      this.findElementByKey(selectedMonth, this.state.data.months),
      selectedDay || 1,
      selectedYear || 2000,
    ];
    if (customDateParts) {
      selectedOptions = [];
      data = [];
      if (customDateParts.includes(DatePart.MONTH)) {
        data.push(this.state.data.months);
        selectedOptions.push(this.findElementByKey(selectedMonth, this.state.data.months));
      }
      if (customDateParts.includes(DatePart.DAY)) {
        data.push(this.state.data.days);
        selectedOptions.push(selectedDay || 1);
      }
      if (customDateParts.includes(DatePart.YEAR)) {
        data.push(this.state.data.years);
        selectedOptions.push(selectedYear || 2000);
      }
    }
    return (
      <RkPicker
        rkType='highlight'
        title='Set Date'
        data={data}
        onConfirm={this.onDatePickerConfirm}
        selectedOptions={selectedOptions}
        optionRkType='subtitle small'
        selectedOptionRkType='header4'
        titleTextRkType='header4'
        cancelTextRkType='light'
        confirmTextRkType=''
        {...props}
      />
    );
  }
}
