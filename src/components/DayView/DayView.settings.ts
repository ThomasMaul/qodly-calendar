import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';

const commonSettings: TSetting[] = [
  {
    key: 'hours',
    label: 'Day Hours',
    type: ESetting.SELECT,
    options: [
      { value: 'all', label: 'All' },
      { value: 'work', label: 'Work Hours' },
    ],
    defaultValue: 'all',
  },
  {
    key: 'timeFormat',
    label: 'Time Format',
    type: ESetting.SELECT,
    options: [
      { value: '12', label: '12 Hours' },
      { value: '24', label: '24 Hours' },
    ],
    defaultValue: '12',
  },
  {
    key: 'todayButton',
    label: 'Today Button',
    type: ESetting.CHECKBOX,
    defaultValue: true,
  },
  {
    key: 'color',
    label: 'Current Day Color',
    type: ESetting.COLOR_PICKER,
    defaultValue: '#1a73e8',
  },
  {
    key: 'colors',
    name: 'Colors',
    label: 'Colors',
    type: ESetting.DATAGRID,
    titleProperty: 'color',
    data: [
      {
        key: 'color',
        label: 'Color',
        type: ESetting.COLOR_PICKER,
        defaultValue: '',
      },
    ],
  },
];

const dataAccessSettings: TSetting[] = [
  {
    key: 'datasource',
    label: 'Data Source',
    type: ESetting.DS_AUTO_SUGGEST,
  },
  {
    key: 'property',
    label: 'Property',
    type: ESetting.TEXT_FIELD,
    defaultValue: '',
  },
  {
    key: 'eventDate',
    label: 'Date',
    type: ESetting.TEXT_FIELD,
    defaultValue: '',
  },
  {
    key: 'startTime',
    label: 'Start Time',
    type: ESetting.TEXT_FIELD,
    defaultValue: '',
  },
  {
    key: 'endTime',
    label: 'End Time',
    type: ESetting.TEXT_FIELD,
    defaultValue: '',
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  {
    key: 'dataAccess',
    label: 'Data Access',
    type: ESetting.GROUP,
    components: dataAccessSettings,
  },
  ...load(DEFAULT_SETTINGS).filter('dataAccess'),
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow'),
];

export default Settings;
