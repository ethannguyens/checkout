import React from 'react'
import PropTypes from 'prop-types';

import PudoCollectionPointRow from './PudoCollectionPointRow';

const PudoCollectionPointsList = ({list}) => {
  return (
    <div className="pudoCollectionPointsList">
      {list.map((point, key) => <PudoCollectionPointRow
        key={key}
        no={++key}
        point={point}
      />)}
    </div>
  )
};

export default PudoCollectionPointsList;
