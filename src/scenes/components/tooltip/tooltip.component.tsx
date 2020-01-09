import React from 'react';
import { TooltipElement, TooltipProps } from '@ui-kitten/components';
import { TooltipShowcase } from './tooltip-showcase.component';
import { tooltipSettings, tooltipShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const TooltipScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: TooltipProps): TooltipElement => (
    <TooltipShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={tooltipShowcase}
      settings={tooltipSettings}
      renderItem={renderItem}
      onBackPress={() => navigation.goBack()}
    />
  );
};

