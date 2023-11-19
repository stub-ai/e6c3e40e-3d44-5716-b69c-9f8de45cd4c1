import { useState, useEffect } from 'react';
import axios from 'axios';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('/api/counter')
      .then(response => setCount(response.data.count))
      .catch(error => console.error(error));
  }, []);

  const increaseCount = () => {
    axios.post('/api/increase')
      .then(response => setCount(response.data.count))
      .catch(error => console.error(error));
  };

  const decreaseCount = () => {
    axios.post('/api/decrease')
      .then(response => setCount(response.data.count))
      .catch(error => console.error(error));
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={increaseCount}
      >
        Increase
      </button>
      <span className="text-2xl">{count}</span>
      <button
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        onClick={decreaseCount}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;