import React, {MouseEventHandler, useCallback} from 'react';
import styles from './Opener.scss';
import {useDispatch, useSelector} from 'react-redux';
import {selectDuo, togglePanel} from '../duoSlice';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleLeft, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

export default function Opener() {
  const dispatch = useDispatch();
  const duo = useSelector(selectDuo);
  const toggleDuoPanel = useCallback<MouseEventHandler<any>>((e) => {
    dispatch(togglePanel());
    e.preventDefault();
    e.stopPropagation();
  }, []);
  return (
    <div className={styles.menu} onClick={toggleDuoPanel}>
      <FontAwesomeIcon icon={duo.isOpen ? faChevronCircleLeft : faChevronCircleRight} size="lg" />
    </div>
  );
}
