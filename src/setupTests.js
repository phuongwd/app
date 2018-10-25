import 'jsdom-global/register';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-native-navigation', () => ({}));

jest.mock('react-native-analytics-segment-io', () => ({
  track: () => {},
}));
jest.mock('react-native-branch', () => ({
  BranchEvent: {},
}));

jest.mock('react-native', () => require('react-native-mock-render'), {
  virtual: true,
});

jest.mock('@hedviginsurance/react-native-config', () => ({}));
jest.mock('react-native-firebase', () => ({}));
jest.mock('react-native-fs', () => ({}));
jest.mock('react-native-document-picker', () => ({}));
jest.mock('react-native-gesture-handler', () => ({}));

jest.useFakeTimers();
