import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';
  let barAmount = Math.round(props.value);
  let barAmountWidth = 'MAR'.length + 'rem';
  let barAmountFontSize =
    (props.maxValue * 0.006) / toString(barAmount).length + 'rem';

  if (props.maxValue > 0) {
    if ((props.value / props.maxValue) * 100 > 100) {
      barFillHeight = 100 + '%';
    } else {
      barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div>
        <div className="chart-bar__label">{props.label}</div>
        <div
          className="chart-bar__fillValue"
          style={
            ({ width: barAmountWidth }, { 'font-size': barAmountFontSize })
          }
        >
          R{barAmount}
        </div>
      </div>
    </div>
  );
};

export default ChartBar;
