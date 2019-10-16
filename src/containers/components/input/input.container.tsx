import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  CaptionIconInput,
  CaptionInput,
  DangerInput,
  DefaultInput,
  DisabledInput,
  IconInput,
  InfoInput,
  LabelInput,
  PrimaryInput,
  SuccessInput,
  WarningInput,
} from './showcase';
import { textStyle } from '@src/components/common';

type InputContainerProps = ThemedComponentProps & NavigationStackScreenProps;

class InputContainerComponent extends React.Component<InputContainerProps> {

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <Showcase>
        <ShowcaseSection title='State'>
          <ShowcaseItem title='Default'>
            <DefaultInput
              style={themedStyle.component}
              textStyle={themedStyle.componentText}
            />
          </ShowcaseItem>
          <ShowcaseItem title='Disabled'>
            <DisabledInput
              style={themedStyle.component}
              textStyle={themedStyle.componentText}
            />
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Accessories'>
          <ShowcaseItem title='Icon'>
            <IconInput
              style={themedStyle.component}
              textStyle={themedStyle.componentText}
            />
          </ShowcaseItem>
          <ShowcaseItem title='Label'>
            <LabelInput
              style={themedStyle.component}
              textStyle={themedStyle.componentText}
            />
          </ShowcaseItem>
          <ShowcaseItem title='Caption'>
            <CaptionInput
              style={themedStyle.component}
              textStyle={themedStyle.componentText}
            />
          </ShowcaseItem>
          <ShowcaseItem title='Caption Icon'>
            <CaptionIconInput
              style={themedStyle.component}
              textStyle={themedStyle.componentText}
            />
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Status'>
          <ShowcaseItem title='Primary'>
            <PrimaryInput
              style={themedStyle.component}
              textStyle={themedStyle.componentText}
            />
          </ShowcaseItem>
          <ShowcaseItem title='Success'>
            <SuccessInput
              style={themedStyle.component}
              textStyle={themedStyle.componentText}
            />
          </ShowcaseItem>
          <ShowcaseItem title='Info'>
            <InfoInput
              style={themedStyle.component}
              textStyle={themedStyle.componentText}
            />
          </ShowcaseItem>
          <ShowcaseItem title='Warning'>
            <WarningInput
              style={themedStyle.component}
              textStyle={themedStyle.componentText}
            />
          </ShowcaseItem>
          <ShowcaseItem title='Danger'>
            <DangerInput
              style={themedStyle.component}
              textStyle={themedStyle.componentText}
            />
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}

export const InputContainer = withStyles(InputContainerComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-1'],
  },
  component: {
    flex: 1,
  },
  componentText: textStyle.paragraph,
}));
