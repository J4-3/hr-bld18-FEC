/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Breakdown from './Breakdown.jsx';
import ReviewsList from './ReviewsList.jsx';

export default function RatingsAndReviews() {
  const [filters, setFilters] = useState({
    5: false,
    4: false,
    3: false,
    2: false,
    1: false,
  });

  function toggleFilterN(n) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [n]: !prevFilters[n],
    }));
  }

  return (
    <div className="rr-container">
      <h2 id="ratings_and_reviews" className="rr-header">Ratings & Reviews</h2>
      <Breakdown filters={filters} toggleFilterN={toggleFilterN} />
      <ReviewsList filters={filters} />
    </div>
  );
}
