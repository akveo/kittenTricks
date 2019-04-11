import React from 'react';
import { ThemedComponentProps } from '@kitten/theme';
import {
  Input,
  InputProps,
} from '../common/input.component';

interface ComponentProps {
  formatter: (value: string, stateValue: string) => string;
  validator: (value: string) => boolean;
}

interface State {
  value: string;
}

export type EcommerceInputProps = ThemedComponentProps & InputProps & ComponentProps;

export class EcommerceInput extends React.Component<EcommerceInputProps, State> {

  public state: State = {
    value: this.props.value,
  };

  private isValid = (text: string): boolean => {
    const { validator } = this.props;

    return validator(text);
  };

  private onSubmit = (text: string): void => {
    if (this.isValid(text)) {
      this.props.onChangeText(text);
    }
  };

  private onChangeText = (value: string) => {
    const { formatter } = this.props;
    const formatted: string = formatter(value, this.state.value);

    this.setState({
      value: formatted,
    }, () => this.onSubmit(this.state.value));
  };

  private getStatus = (): string => {
    return this.isValid(this.state.value) ? 'success' : 'danger';
  };

  public render(): React.ReactNode {
    const { style, ...restProps } = this.props;

    return (
      <Input
        {...restProps}
        value={this.state.value}
        status={this.getStatus()}
        style={style}
        onChangeText={this.onChangeText}
      />
    );
  }
}
