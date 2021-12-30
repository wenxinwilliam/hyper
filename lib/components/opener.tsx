import React, {MouseEventHandler, useCallback} from 'react';
import styles from './opener.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDotCircle} from '@fortawesome/free-solid-svg-icons';
import {openDuo} from '../actions/duo';
import {useDispatch} from 'react-redux';

export default function Opener() {
  const dispatch = useDispatch();
  const onClick = useCallback<MouseEventHandler<any>>((e) => {
    dispatch(openDuo());
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const stopPropagation = useCallback<MouseEventHandler<any>>((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  return (
    <div className={styles.menu} onClick={onClick} onDoubleClick={stopPropagation}>
      <FontAwesomeIcon icon={faDotCircle} size="2x" />
    </div>
  );
}
