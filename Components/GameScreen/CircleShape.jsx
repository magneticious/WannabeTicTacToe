import React from 'react';
import {Svg, Circle as C} from 'react-native-svg';

const CircleShape = ({color}) => {
  return (
    <Svg height={60} width={60}>
      <C
        cx={30}
        cy={30}
        r={20}
        stroke={color}
        strokeWidth={6}
        fill="transparent"
      />
    </Svg>
  );
};

export default CircleShape;
