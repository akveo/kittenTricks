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
  BottomEndPopover,
  BottomPopover,
  BottomStartPopover,
  LeftEndPopover,
  LeftPopover,
  LeftStartPopover,
  RightEndPopover,
  RightPopover,
  RightStartPopover,
  TopEndPopover,
  TopPopover,
  TopStartPopover,
} from './showcase';

type ComponentProps = NavigationStackScreenProps & StyledComponentProps;

class PopoverContainerComponent extends React.Component<ComponentProps> {

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <Showcase style={themedStyle.container}>
        <ShowcaseSection title='Top'>
          <ShowcaseItem style={themedStyle.topItem} title='Top'>
            <TopPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.topItem} title='Top Start'>
            <TopStartPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.topItem} title='Top End'>
            <TopEndPopover/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Right'>
          <ShowcaseItem style={themedStyle.rightItem} title='Right'>
            <RightPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.rightItem} title='Right Start'>
            <RightStartPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.rightItem} title='Right End'>
            <RightEndPopover/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Left'>
          <ShowcaseItem style={themedStyle.leftItem} title='Left'>
            <LeftPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.leftItem} title='Left Start'>
            <LeftStartPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.leftItem} title='Left End'>
            <LeftEndPopover/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Bottom'>
          <ShowcaseItem style={themedStyle.bottomItem} title='Bottom'>
            <BottomPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.bottomItem} title='Bottom Start'>
            <BottomStartPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.bottomItem} title='Bottom End'>
            <BottomEndPopover/>
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}

export const PopoverContainer = withStyles(PopoverContainerComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-2'],
  },
  bottomItem: {
    justifyContent: 'flex-start',
  },
  rightItem: {
    flexDirection: 'row-reverse',
  },
  leftItem: {},
  topItem: {
    justifyContent: 'flex-start',
  },
}));
