import React from 'react';
import { ProgressBar, ProgressBarElement, ProgressBarProps } from '@ui-kitten/components';
import { useProgress } from './progress.hook';

export const ProgressBarShowcase = (props?: ProgressBarProps): ProgressBarElement => {
  return (
    <ProgressBar {...props} style={{ flex: 1 }} progress={useProgress(props.status)} />
  );
};
