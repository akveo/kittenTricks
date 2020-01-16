import { default as eva } from './app-mapping-eva.json';
import { default as material } from './app-mapping-material.json';
import { Mapping } from '../services/theme.service';

export const appMappings: Record<Mapping, any> = {
  eva: eva,
  material: material,
};
