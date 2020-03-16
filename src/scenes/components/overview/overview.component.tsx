import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  CheckBox,
  Divider,
  IndexPath,
  Input,
  Layout,
  Radio,
  RangeDatepicker,
  Select,
  SelectItem,
  Toggle,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionElement,
} from '@ui-kitten/components';
import { ArrowIosBackIcon, StarIcon } from '../../../components/icons';
import { SafeAreaLayout } from '../../../components/safe-area-layout.component';

const useRadioState = (initial = true) => {
  const [checked, setChecked] = React.useState(initial);
  return { checked, onChange: setChecked };
};

const useCheckBoxState = (initial = true) => {
  const [checked, setChecked] = React.useState(initial);
  return { checked, onChange: setChecked };
};

const useToggleState = (initial = true) => {
  const [checked, setChecked] = React.useState(initial);
  return { checked, onChange: setChecked };
};

const useInputState = (initial = '') => {
  const [value, setValue] = React.useState(initial);
  return { value, onChangeText: setValue };
};

const useSelectState = (initial = null) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initial);
  return { selectedIndex, onSelect: setSelectedIndex };
};

const useRangeDatepickerState = (initial = {}) => {
  const [range, setRange] = React.useState(initial);
  return { range, onSelect: setRange };
};

export const OverviewScreen = ({ navigation }) => {

  const radioState = useRadioState();
  const checkboxState = useCheckBoxState();
  const toggleState = useToggleState();
  const inputState = useInputState();
  const selectState = useSelectState();
  const rangeDatepickerState = useRangeDatepickerState();

  const renderBackAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='Components Overview'
        accessoryLeft={renderBackAction}
      />
      <Divider/>
      <Layout style={styles.container} level='1'>
        <View style={styles.rowContainer}>
          <Button style={styles.component}>
            BUTTON
          </Button>
          <Radio
            style={styles.component}
            {...radioState}>
            Radio
          </Radio>
          <CheckBox
            style={styles.component}
            {...checkboxState}>
            CheckBox
          </CheckBox>
          <Toggle
            style={styles.component}
            {...toggleState}>
            Toggle
          </Toggle>
        </View>
        <View style={styles.inputContainer}>
          <Select
            style={[styles.component, styles.inputComponent]}
            placeholder='Select'
            {...selectState}>
            <SelectItem title='Option 1'/>
            <SelectItem title='Option 2'/>
            <SelectItem title='Option 3'/>
          </Select>
          <Input
            style={[styles.component, styles.inputComponent]}
            placeholder='Input'
            accessoryRight={StarIcon}
            {...inputState}
          />
          <RangeDatepicker
            style={[styles.component, styles.inputComponent]}
            placeholder='Range Datepicker'
            {...rangeDatepickerState}
          />
        </View>
      </Layout>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 4,
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  component: {
    margin: 4,
  },
  inputComponent: {
    width: 160,
  },
});
