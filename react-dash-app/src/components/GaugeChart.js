import React from 'react';
import Gauge from 'react-svg-gauge';

const GaugeChart = (props) => (
            <div text-align="center">
                <Gauge value={props.value} width={400} height={240} label="" />
            </div>
        );

export default GaugeChart;
