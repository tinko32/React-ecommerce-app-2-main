import React from 'react';
import { selectCollections } from '../../redux/shop-redux/shop.selectors';

import './collections-overview.scss';

import { connect } from 'react-redux';
import PreviewCollection from '../preview-collection/preview-colection';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => (
    <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
  })

export default connect(mapStateToProps)(CollectionsOverview);