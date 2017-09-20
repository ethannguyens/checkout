import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PudoCollectionPointRow from './PudoCollectionPointRow';

const PudoNewCollectionPointInfo = (({no, point, backFunc}) => {
  return (
    <div className="pudoCollectionPointInfo">
      <div className="pudoCollectionPointInfo__menu" onClick={backFunc}>
        <span className="pudoCollectionPointInfo__menu-back-icon" />
        <button className="pudoCollectionPointInfo__menu-back">Back</button>
      </div>
      <PudoCollectionPointRow point={point}
                              no={no}
      />
      <div className="pudoCollectionPointInfo__hours">
        <div className="pudoCollectionPointInfo__hours-header">Horaires d’ouverture</div>
        <div className="pudoCollectionPointInfo__hours-table">
          <table>
            <tbody>
            {point.workingDays.map((day, key) => (
              <tr key={key}>
                <td>{day.day}</td>
                {day.workingHours.map((hour, key) => (
                  <td key={key}>{`${hour.startTime} - ${hour.endTime}`}</td>
                  ))}
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pudoCollectionPointInfo__select">
        <button className="pudoCollectionPointInfo__select-button">Select</button>
      </div>
    </div>
  )
});

PudoNewCollectionPointInfo.propTypes = {
};

export default PudoNewCollectionPointInfo;




