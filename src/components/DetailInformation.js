import React, { useEffect, useState } from 'react';
import ReviewsBar from './reviews/ReviewsBar';

const DetailInformation = (props) => {
  // extract language from props
  const lang = props.lang;
  // use state for variables coming from an api
  const [rank, setRank] = useState('');
  const [year, setYear] = useState('');
  const [inventor, setInventor] = useState('');
  const [reviewScore, setReviewScore] = useState(10);

  // simulate an api call
  const fetchContent = () => {
    switch (lang.toLowerCase()) {
      case 'javascript':
      case 'js':
        setRank('3');
        setYear('1995');
        setInventor('Brendan Eich');
        setReviewScore(70);
        break;
      case 'java':
        setRank('1');
        setYear('1995');
        setInventor('James Gosling');
        setReviewScore(75);
        break;
      case 'python':
        setRank('2');
        setYear('1990');
        setInventor('Guido van Rossum');
        setReviewScore(80);
        break;
      default:
        setRank('n/a');
        setYear('n/a');
        setInventor('n/a');
        setReviewScore(10);
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
      <h3>Reviews</h3>
      <div className='row mt-3'>
        <div className='col-md-2'>
          <ReviewsBar score={reviewScore} />
        </div>
        <div className='col-md-10 d-flex align-items-center'>
          of programmers love working with {lang}.
        </div>
      </div>
    </>
  );
};

export default DetailInformation;
