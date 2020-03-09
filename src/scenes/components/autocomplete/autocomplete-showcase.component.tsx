import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Autocomplete,
  AutocompleteElement,
  AutocompleteItem,
  AutocompleteItemElement,
  AutocompleteProps,
} from '@ui-kitten/components';

interface Movie {
  id: number;
  title: string;
  releaseYear: number;
}

const movies = [
  { id: 1, title: 'Star Wars', releaseYear: 1977 },
  { id: 2, title: 'Back to the Future', releaseYear: 1985 },
  { id: 3, title: 'The Matrix', releaseYear: 1999 },
  { id: 4, title: 'Inception', releaseYear: 2010 },
  { id: 5, title: 'Interstellar', releaseYear: 2014 },
];

const filter = (item: Movie, query: string) => {
  return item.title.toLowerCase().includes(query.toLowerCase());
};

export const AutocompleteShowcase = (props: AutocompleteProps): AutocompleteElement => {

  const [value, setValue] = React.useState(props.value);
  const [data, setData] = React.useState(movies);

  const onSelect = (index: number): void => {
    setValue(data[index].title);
  };

  const onChangeText = (query: string): void => {
    setValue(query);
    setData(movies.filter(item => filter(item, query)));
  };

  const renderOption = (item: Movie, index: number): AutocompleteItemElement => (
    <AutocompleteItem
      key={index}
      title={item.title}
    />
  );

  return (
    <Autocomplete
      {...props}
      style={styles.autocomplete}
      value={value}
      onChangeText={onChangeText}
      onSelect={onSelect}>
      {data.map(renderOption)}
    </Autocomplete>
  );
};

const styles = StyleSheet.create({
  autocomplete: {
    minWidth: 192,
  },
});
