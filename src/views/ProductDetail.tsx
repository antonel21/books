import React from 'react';
import SingleCard from '../components/cards/SingleCard';
import './ProductDetail.scss';

const book = {
  author_name: 'string',
  title: 'string',
  cover_i: 22222,
  first_publish_year: 1999,
  edition_count: 121,
  ratings_average: 4,
};

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="results-container2">
        <SingleCard book={book} class="card-container2" />
      </div>
    );
  }
}

export default ProductDetail;
