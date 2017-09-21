import React from 'react'
import PropTypes from 'prop-types';

const PudoNewCollectionPointInfoTable = ({point}) => {
  return (
    <div className="pudoCollectionPointInfo__table-select">
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
};

PudoNewCollectionPointInfoTable.propTypes = {

};

export default PudoNewCollectionPointInfoTable;
