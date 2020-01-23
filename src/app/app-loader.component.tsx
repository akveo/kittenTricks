import React from 'react';
import { AppLoading as ExpoAppLoading, SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

type TaskResult = [string, any];
type Task = () => Promise<TaskResult | null>;

export interface ApplicationLoaderProps {
  tasks?: Task[];
  initialConfig?: Record<string, any>;
  placeholder?: (props: { loading: boolean }) => React.ReactElement;
  children: (config: any) => React.ReactElement;
}

export const LoadFontsTask = (fonts: { [key: string]: number }): Promise<TaskResult> => {
  return Font.loadAsync(fonts).then(() => null);
};

export const LoadAssetsTask = (assets: number[]): Promise<TaskResult> => {
  const tasks: Promise<void>[] = assets.map((source: number): Promise<void> => {
    return Asset.fromModule(source).downloadAsync();
  });

  return Promise.all(tasks).then(() => null);
};

/*
 * Prevent splash screen from hiding since it is controllable by AppLoading component.
 */
SplashScreen.preventAutoHide();

/**
 * Loads application configuration and returns content of the application when done.
 *
 * @property {Task[]} tasks - Array of tasks to prepare application before it's loaded.
 * A single task should return a Promise with value and a by which this value is accessible.
 *
 * @property {any} fallback - Fallback configuration that is used as default application configuration.
 * May be useful at first run.
 *
 * @property {(props: { loaded: boolean }) => React.ReactElement} placeholder - Element to render
 * while application is loading.
 *
 * @property {(result: any) => React.ReactElement} children - Should return Application component
 */
export const AppLoading = (props: ApplicationLoaderProps): React.ReactElement => {

  const [loading, setLoading] = React.useState<boolean>(true);
  const loadingResult = props.initialConfig || {};

  const onTasksFinish = (): void => {
    setLoading(false);
    SplashScreen.hide();
  };

  const saveTaskResult = (result: [string, any] | null): void => {
    if (result) {
      loadingResult[result[0]] = result[1];
    }
  };

  const createRunnableTask = (task: Task): Promise<void> => {
    return task().then(saveTaskResult);
  };

  const startTasks = (): Promise<any> => {
    if (props.tasks) {
      return Promise.all(props.tasks.map(createRunnableTask));
    }
    return Promise.resolve();
  };

  const renderLoadingElement = (): React.ReactElement => (
    <ExpoAppLoading
      startAsync={startTasks}
      onFinish={onTasksFinish}
      autoHideSplash={false}
    />
  );

  return (
    <React.Fragment>
      {loading ? renderLoadingElement() : props.children(loadingResult)}
      {props.placeholder && props.placeholder({ loading })}
    </React.Fragment>
  );
};
