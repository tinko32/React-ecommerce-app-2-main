import React from 'react';
//import CollectionsOverview from '../../components/collections-overview/collections-overview';
import '../../components/preview-collection/preview-colection';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-Spinner/with-spinner-comp';

import CollectionPage from '../collection/collectionPage-comp';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop-redux/shop.actions';
import collectionsOverview from '../../components/collections-overview/collections-overview';

const CollectionsOverviewWithSpinner = WithSpinner(collectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component  {
  state = {
    loading: true
  }
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapShot => {
     const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
     updateCollections(collectionsMap);
     this.setState({ loading: false });
    })

  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} /> 
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} /> } />
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);