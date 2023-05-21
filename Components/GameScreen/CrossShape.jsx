import React from 'react';
import {Svg, Line} from 'react-native-svg';
const CrossShape = ({color}) => {
  return (
    <Svg height={60} width={60}>
      <Line x1={10} y1={10} x2={50} y2={50} stroke={color} strokeWidth={10} />
      <Line x1={10} y1={50} x2={50} y2={10} stroke={color} strokeWidth={10} />
    </Svg>
  );
};

export default CrossShape;
