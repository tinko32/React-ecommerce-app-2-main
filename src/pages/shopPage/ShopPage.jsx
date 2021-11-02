import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import '../../components/preview-collection/preview-colection';

import { Route } from 'react-router-dom';

import CollectionPage from '../category/collectionPage-comp';

const ShopPage = ({ match }) => (  
        <div className="shop-page">
       <Route exact path={`${match.path}`} component={CollectionsOverview } /> 
       <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
        </div>
      );

      

  
  export default  ShopPage;