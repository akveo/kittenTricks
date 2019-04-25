import React from 'react';
import {
  Radio,
  RadioProps,
} from '@kitten/ui';

interface RadioShowcaseComponentState {
  checked: boolean;
}

class RadioShowcaseComponent extends React.Component<RadioProps, RadioShowcaseComponentState> {

  public state: RadioShowcaseComponentState = {
    checked: true,
  };

  private onChange = (checked: boolean) => {
    this.setState({ checked });
  };

  public render(): React.ReactElement<RadioProps> {
    return (
      <Radio
        {...this.props}
        checked={this.state.checked}
        onChange={this.onChange}
      />
    );
  }
}

export const RadioShowcase = (props?: RadioProps): React.ReactElement<RadioProps> => {
  return (
    <RadioShowcaseComponent {...props}/>
  );
};
