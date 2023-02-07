import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Login.module.scss';
const cx = classNames.bind(styles);
function PwdInput({ props }) {
   const [typeInput, setTypeInput] = useState(true);
   const handleChangeType = () => {
      setTypeInput(!typeInput);
   };
   return (
      <div className={cx('input-block')}>
         <input
            name="password"
            type={typeInput ? 'password' : 'text'}
            placeholder="Enter your password"
            pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,10}$"
            className={cx('form-control')}
            value={props.dataSubmit?.password||''}
            onChange={props.handleOnChange}
            onBlur={props.handleValidate}
            onInput={props.handleOnInput}
         />
         <p className={cx('btn-show')} onClick={handleChangeType}>
            {typeInput ? 'Show' : 'Hide'}
         </p>
      </div>
   );
}

export default PwdInput;
