import React, { useEffect, useState } from 'react';

const DetailInformation = (props) => {
  // extract language from props
  const lang = props.lang;
  // use state for variables coming from an api
  const [rank, setRank] = useState('');
  const [year, setYear] = useState('');
  const [inventor, setInventor] = useState('');

  // simulate an api call
  const fetchContent = () => {
    switch (lang.toLowerCase()) {
      case 'javascript':
      case 'js':
        setRank('3');
        setYear('1995');
        setInventor('Brendan Eich');
        break;
      case 'java':
        setRank('1');
        setYear('1995');
        setInventor('James Gosling');
        break;
      case 'python':
        setRank('2');
        setYear('1990');
        setInventor('Guido van Rossum');
        break;
      default:
        setRank('n/a');
        setYear('n/a');
        setInventor('n/a');
        break;
    }
  };

  // use to fetch data when component mounts
  useEffect(() => {
    fetchContent();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <ul>
        <li>
          # most used: <b>{rank}</b>
        </li>
        <li>
          Inventor: <b>{inventor}</b>
        </li>
        <li>
          Published in: <b>{year}</b>
        </li>
      </ul>
    </>
  );
};

export default DetailInformation;
