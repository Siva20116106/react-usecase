import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';

export default function App() {
  
    const counter = useSelector((state) => state);
    const dispatch = useDispatch();
  
    return (
      <>
        <div>
          Increment:{' '}
          <Button func={() => dispatch({ type: 'INCREMENT' })} sign="+" />
        </div>
        <br />
        <div>
          Increment after 1 Sec:{' '}
          <Button func={() => dispatch({ type: 'INCREMENT-AFTER-A-SECOND' })} sign="+" />
        </div>
        <br />
        <div>
          Decrement:{' '}
          <Button func={() => dispatch({ type: 'DECREMENT' })} sign="-" />
        </div>
        <br />
        <div>
          Reset:{' '}
          <Button func={() => dispatch({ type: 'RESET' })} sign="Reset" />
        </div>
        <br />
        The counter value is: {counter}
      </>
    );
  }