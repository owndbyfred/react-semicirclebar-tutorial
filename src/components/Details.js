import React from 'react';
import { Link } from 'react-router-dom';
import DetailInformation from './DetailInformation';
const Details = ({ match }) => {
  //get language from URL parameter
  const lang = match.params.language;

  return (
    <>
      <Link to='/' className='btn btn-success mb-5'>
        &#11207; Back to Home
      </Link>
      <h1>{lang}</h1>
      <p className='lead'>Detailed information about the {lang} language.</p>
      <DetailInformation lang={lang} />
    </>
  );
};

export default Details;
