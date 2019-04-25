import React from 'react';
import {
  CheckBox,
  CheckBoxProps,
} from '@kitten/ui';

interface CheckBoxShowcaseComponentState {
  checked: boolean;
}

class CheckBoxShowcaseComponent extends React.Component<CheckBoxProps, CheckBoxShowcaseComponentState> {

  public state: CheckBoxShowcaseComponentState = {
    checked: true,
  };

  private onChange = (checked: boolean) => {
    this.setState({ checked });
  };

  public render(): React.ReactElement<CheckBoxProps> {
    return (
      <CheckBox
        {...this.props}
        checked={this.state.checked}
        onChange={this.onChange}
      />
    );
  }
}

export const CheckBoxShowcase = (props?: CheckBoxProps): React.ReactElement<CheckBoxProps> => {
  return (
    <CheckBoxShowcaseComponent {...props}/>
  );
};
