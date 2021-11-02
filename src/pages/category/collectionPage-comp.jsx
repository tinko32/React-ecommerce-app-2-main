import React from 'react';

import colectionItem from '../../components/collection-item/colection-item';
import './collectionPage-comp.scss';

const CollectionPage = ({match}) => {
    console.log(match.params.collectionId);
    return(
    <div className='collection-page'>
    <h2>Collection Page</h2>
    </div>
    )
}

export default CollectionPage;