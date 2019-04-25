import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Button } from '@kitten/ui';
import {
  AddPaymentCardForm,
  AddPaymentCardFormType,
} from '@src/components/ecommerce';

interface ComponentProps {
  onAddPress: (value: AddPaymentCardFormType) => void;
}

export type AddNewCardProps = ThemedComponentProps & ComponentProps;

interface State {
  formValue: AddPaymentCardFormType | undefined;
}

class AddNewCardComponent extends React.Component<AddNewCardProps, State> {

  public state: State = {
    formValue: undefined,
  };

  private onFormValueChange = (formValue: AddPaymentCardFormType) => {
    this.setState({ formValue });
  };

  private onAddButtonPress = () => {
    this.props.onAddPress(this.state.formValue);
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.container}>
        <AddPaymentCardForm
          style={themedStyle.formContainer}
          onFormValueChange={this.onFormValueChange}
        />
        <Button
          style={themedStyle.addButton}
          size='giant'
          disabled={!this.state.formValue}
          onPress={this.onAddButtonPress}>
          Add new card
        </Button>
      </View>
    );
  }
}

export const AddNewCard = withStyles(AddNewCardComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-basic-100'],
    paddingHorizontal: 16,
  },
  formContainer: {
    flex: 1,
    marginTop: 40,
  },
  addButton: {
    marginVertical: 24,
    textTransform: 'uppercase',
  },
}));
