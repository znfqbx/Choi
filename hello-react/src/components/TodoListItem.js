import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCheckCircle,
  faSquare,
  faSquareMinus,
} from '@fortawesome/free-regular-svg-icons';
import cn from 'classnames';
import './TodoListItem.css';
import React from 'react';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? (
          <FontAwesomeIcon icon={faCheckCircle} />
        ) : (
          <FontAwesomeIcon icon={faSquare} />
        )}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <FontAwesomeIcon icon={faSquareMinus} />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
