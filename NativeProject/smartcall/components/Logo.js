import * as React from 'react';
import Svg, {Defs, RadialGradient, Stop, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 256 190"
      preserveAspectRatio="xMidYMid"
      {...props}>
      <Defs>
        <RadialGradient
          cx="38.697%"
          cy="52.909%"
          fx="38.697%"
          fy="52.909%"
          r="43.779%"
          id="prefix__a">
          <Stop stopColor="#20A4C1" offset="0%" />
          <Stop stopColor="#008490" offset="48.88%" />
          <Stop stopColor="#1FA4BF" offset="100%" />
        </RadialGradient>
      </Defs>
      <Path
        d="M112.532 92.56L71.17 62.307l38.999 65.233L255.999 7 112.532 92.56zM94.788 172.56c-42.952 0-77.771-34.819-77.771-77.771 0-42.951 34.819-77.771 77.771-77.771 19.019 0 36.435 6.837 49.948 18.174l10.902-13.008C139.16 8.351 117.935 0 94.788 0 42.521 0 0 42.522 0 94.788c0 52.267 42.521 94.789 94.788 94.789 27.105 0 51.571-11.454 68.863-29.755l-12.337-11.651c-14.178 15.008-34.251 24.388-56.526 24.388zm0-22.542c-30.502 0-55.228-24.727-55.228-55.228 0-30.502 24.726-55.23 55.228-55.23 13.506 0 25.867 4.864 35.463 12.916l8.184-9.767c-11.819-9.922-27.044-15.911-43.647-15.911-37.491 0-67.992 30.5-67.992 67.991 0 37.49 30.501 67.992 67.992 67.992 19.442 0 36.992-8.216 49.395-21.344l-9.281-8.763c-10.068 10.656-24.295 17.344-40.114 17.344z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;
