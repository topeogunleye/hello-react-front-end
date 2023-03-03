import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  let greeting = useSelector((state) => state.greeting);

  if (greeting === null || greeting === undefined) {
    greeting = {};
  }

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const postGreeting = () => {
    if (greeting.message) {
      return <h1>{greeting.message}</h1>;
    }
    return <h1>Loading...</h1>;
  };

  return (
    <div>
      {postGreeting()}
    </div>
  );
};

export default Greeting;
