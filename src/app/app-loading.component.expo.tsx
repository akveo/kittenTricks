import React from 'react';
import ExpoAppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Task, TaskResult} from './app-loading.component';

export interface ApplicationLoaderProps<LoadableConfiguration = any> {
  tasks?: Task[];
  initialConfig?: LoadableConfiguration;
  placeholder?: (props: { loading: boolean }) => React.ReactElement;
  children: (config: LoadableConfiguration) => React.ReactElement;
}

export const LoadFontsTask = (fonts: { [key: string]: number }): Promise<TaskResult> => {
  return Font.loadAsync(fonts).then(() => null);
};

export const LoadAssetsTask = (assets: number[]): Promise<TaskResult> => {
  const tasks: Promise<void>[] = assets.map((source: number): Promise<void> => {
    return Asset.fromModule(source).downloadAsync().then();
  });

  return Promise.all(tasks).then(() => null);
};

/**
 * Loads application configuration and returns content of the application when done.
 *
 * @property {Task[]} tasks - Array of tasks to prepare application before it's loaded.
 * A single task should return a Promise with value and a by which this value is accessible.
 *
 * @property {LoadableConfiguration} initialConfig - Configuration to use by default.
 * May be useful at first run.
 *
 * @property {(props: { loaded: boolean }) => React.ReactElement} placeholder - Element to render
 * while application is loading.
 *
 * @property {(config: LoadableConfiguration) => React.ReactElement} children - Should return Application component
 */
export const AppLoading: React.FC<ApplicationLoaderProps> = (props) => {

  const [loading, setLoading] = React.useState<boolean>(true);
  const loadingResult = React.useRef(props.initialConfig || {});

  const onTasksFinish = (): void => {
    setLoading(false);
    SplashScreen.hideAsync();
  };

  const saveTaskResult = (result: TaskResult | null): void => {
    if (result) {
      loadingResult.current[result[0]] = result[1];
    }
  };

  const startTasks = (): Promise<void> => {
    return Promise.all(props.tasks.map(task => task().then(saveTaskResult)))
    .then();
  };

  const renderLoadingElement = (): React.ReactElement => (
    <ExpoAppLoading
      autoHideSplash={false}
      startAsync={startTasks}
      onFinish={onTasksFinish}
      onError={console.error}
    />
  );

  return (
    <>
      {loading ? renderLoadingElement() : props.children(loadingResult.current)}
      {props.placeholder && props.placeholder({ loading })}
    </>
  );
};

AppLoading.defaultProps = {
  tasks: [],
  initialConfig: {},
};
