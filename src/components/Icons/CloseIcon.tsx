import React from 'react';
import Svg, {G, Mask, Path, Rect} from "react-native-svg";

const CloseIcon = () => {
    return (
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
            <Mask id="mask0_109_2005"  maskUnits="userSpaceOnUse" x="2" y="1" width="22" height="22">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M2.57899 1.93852C3.16477 1.35273 4.11452 1.35273 4.70031 1.93852L22.7003 19.9385C23.2861 20.5243 23.2861 21.4741 22.7003 22.0598C22.1145 22.6456 21.1648 22.6456 20.579 22.0598L2.57899 4.05984C1.9932 3.47405 1.9932 2.5243 2.57899 1.93852Z" fill="#006FFD"/>
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M22.7003 1.93852C22.1145 1.35273 21.1648 1.35273 20.579 1.93852L2.57899 19.9385C1.9932 20.5243 1.9932 21.4741 2.57899 22.0598C3.16478 22.6456 4.11452 22.6456 4.70031 22.0598L22.7003 4.05984C23.2861 3.47405 23.2861 2.5243 22.7003 1.93852Z" fill="#006FFD"/>
            </Mask>
            <G mask="url(#mask0_109_2005)">
                <Rect x="0.639648" y="-0.000823975" width="24" height="24" fill="#006FFD"/>
            </G>
        </Svg>

    );
};
export default CloseIcon