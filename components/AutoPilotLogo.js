import React from 'react';
import Svg, { Circle, Rect, Text, Ellipse } from 'react-native-svg';

export default function AutoPilotLogo({ width = 420, height = 120 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 420 120">
      <Rect width="420" height="120" rx="20" fill="#0b1220" />
      <Circle cx="60" cy="60" r="32" stroke="#00d4ff" strokeWidth="4" fill="none" />
      <Circle cx="60" cy="60" r="12" fill="#00d4ff" />
      <Ellipse cx="60" cy="60" rx="42" ry="18" stroke="#7c5cff" strokeWidth="2" fill="none" />
      <Text x="120" y="65" fontSize="28" fill="#ffffff" fontWeight="bold">
        AutoPilot X
      </Text>
      <Text x="122" y="90" fontSize="14" fill="#00d4ff">
        AGI ULTRA
      </Text>
    </Svg>
  );
}
