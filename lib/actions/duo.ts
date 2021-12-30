import {HyperDispatch} from '../hyper';
import {OPEN_DUO} from '../constants/duo';
import rpc from '../rpc';

export function openDuo() {
  return (dispatch: HyperDispatch) => {
    dispatch({
      type: OPEN_DUO,
      effect() {
        rpc.emit('open duo', null);
      }
    });
  };
}
