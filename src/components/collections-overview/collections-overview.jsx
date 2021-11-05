import React from 'react';
import { selectCollectionsForPreview } from '../../redux/shop-redux/shop.selectors';

import './collections-overview.scss';

import { connect } from 'react-redux';
import PreviewCollection from '../preview-collection/preview-colection';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);