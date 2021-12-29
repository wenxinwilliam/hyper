import {combineReducers, Reducer} from 'redux';
import ui from './ui';
import sessions from './sessions';
import termGroups from './term-groups';
import {HyperActions, HyperState} from '../hyper';
import duo from '../../duo/duoSlice';

export default combineReducers({
  ui,
  sessions,
  termGroups,
  duo
}) as Reducer<HyperState, HyperActions>;
