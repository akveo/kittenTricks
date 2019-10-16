import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  StyledComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  DefaultModal,
  StyledModal,
  StyledBackdropModal,
  CustomPositionModal,
  BackdropCloseModal,
} from './showcase';

type ComponentProps = NavigationStackScreenProps & StyledComponentProps;

class ModalContainerComponent extends React.Component<ComponentProps> {

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <Showcase style={themedStyle.container}>
        <ShowcaseSection title='Default'>
          <ShowcaseItem title='Default'>
            <DefaultModal/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Styled'>
          <ShowcaseItem title='Styled Modal'>
            <StyledModal/>
          </ShowcaseItem>
          <ShowcaseItem title='Styled Backdrop'>
            <StyledBackdropModal/>
          </ShowcaseItem>
          <ShowcaseItem title='Custom Position'>
            <CustomPositionModal/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Backdrop Press'>
          <ShowcaseItem title='Backdrop: Close'>
            <BackdropCloseModal/>
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}

export const ModalContainer = withStyles(ModalContainerComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-2'],
  },
}));
