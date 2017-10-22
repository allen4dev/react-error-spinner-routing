import React from 'react';

const FetchError = ({ message, onRetry }) => {
  return (
    <div className="FetchError">
      <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>
      <div className="Button">
        <button className="btn" onClick={onRetry}>
          Try again
        </button>
      </div>
    </div>
  );
};

export default FetchError;
