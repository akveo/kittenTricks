import React from 'react';
import { ThemedComponentProps } from '@kitten/theme';
import {
  Input,
  InputProps,
} from './input.component';

interface ComponentProps {
  pattern: RegExp;
  onResult?: (valid: boolean, value: string) => void;
}

export type ValidationInputProps = ThemedComponentProps & InputProps & ComponentProps;

export class ValidationInput extends React.Component<ValidationInputProps> {

  private onChangeText = (value: string) => {
    if (this.props.onResult) {
      const { pattern } = this.props;
      const isValid: boolean = pattern.test(value);

      this.props.onResult(isValid, value);
    }
  };

  private status = (): string => {
    const { value, status } = this.props;

    return value.length === 0 ? undefined : status;
  };

  public render(): React.ReactNode {
    const { pattern, onResult, ...restProps } = this.props;

    return (
      <Input
        {...restProps}
        status={this.status()}
        onChangeText={this.onChangeText}
      />
    );
  }
}
