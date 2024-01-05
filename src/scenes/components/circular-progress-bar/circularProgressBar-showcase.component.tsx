import React from 'react';
import { CircularProgressBar, ProgressBarElement, ProgressBarProps } from '@ui-kitten/components';
import { useProgress } from '../progress-bar/progress.hook';

export const CircularProgressBarShowcase = (props?: ProgressBarProps): ProgressBarElement => {
  return (
    <CircularProgressBar {...props} progress={useProgress(props.status)} />
  );
};
