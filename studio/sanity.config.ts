import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';

export default defineConfig({
  name: 'harvest-field-studio',
  title: 'Harvest Field Gospel Mission — Blog',
  projectId: '42e9u8zs',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {types: schemaTypes},
});
