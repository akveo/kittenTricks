import React from 'react';
import { ThemedComponentProps } from '@kitten/theme';
import { InputProps } from '@kitten/ui';
import { Input } from './input.component';

interface ComponentProps {
  pattern: RegExp;
  onResult?: (valid: boolean, value: string) => void;
}

type Props = ThemedComponentProps & InputProps & ComponentProps;

export class ValidationInput extends React.Component<Props> {

  private onChangeText = (value: string) => {
    if (this.props.onResult) {
      const { pattern } = this.props;
      const isValid: boolean = pattern.test(value);

      this.props.onResult(isValid, value);
    }
  };

  private status = (): string => {
    const { value, status } = this.props;

    return value.length === 0 ? undefined : this.props.status;
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
