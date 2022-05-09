// import { MdAdd } from 'react-icons/md';
import { useState, useCallback } from 'react';
import './TodoInsert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import {
//   solid,
//   regular,
//   brands,
// } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faHeart} />
      </button>
    </form>
  );
};

export default TodoInsert;
