import React from 'react';
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
import {
  ContainerView,
  textStyle,
} from '@src/components/common';

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
      <ContainerView
        style={themedStyle.container}
        contentContainerStyle={themedStyle.contentContainer}>
        <AddPaymentCardForm
          style={themedStyle.formContainer}
          onFormValueChange={this.onFormValueChange}
        />
        <Button
          style={themedStyle.addButton}
          textStyle={textStyle.button}
          size='giant'
          disabled={!this.state.formValue}
          onPress={this.onAddButtonPress}>
          ADD NEW CARD
        </Button>
      </ContainerView>
    );
  }
}

export const AddNewCard = withStyles(AddNewCardComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-2'],
    paddingHorizontal: 16,
  },
  contentContainer: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    marginTop: 40,
  },
  addButton: {
    marginVertical: 24,
  },
}));
