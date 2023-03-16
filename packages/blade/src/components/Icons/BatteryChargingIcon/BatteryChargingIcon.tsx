import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const BatteryChargingIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8321 6.55481C12.1384 6.09528 12.0142 5.47441 11.5547 5.16806C11.0952 4.8617 10.4743 4.98588 10.168 5.44541L6.16795 11.4454C5.96338 11.7523 5.94431 12.1468 6.11833 12.472C6.29235 12.7971 6.63121 13.0001 7 13.0001H11.1315L8.16795 17.4454C7.8616 17.9049 7.98577 18.5258 8.4453 18.8322C8.90483 19.1385 9.5257 19.0143 9.83205 18.5548L13.8321 12.5548C14.0366 12.248 14.0557 11.8534 13.8817 11.5282C13.7077 11.2031 13.3688 11.0001 13 11.0001H8.86852L11.8321 6.55481ZM3 7.00009C2.44772 7.00009 2 7.44781 2 8.00009V16.0001C2 16.5524 2.44772 17.0001 3 17.0001H5C5.55228 17.0001 6 17.4478 6 18.0001C6 18.5524 5.55228 19.0001 5 19.0001H3C1.34315 19.0001 0 17.6569 0 16.0001V8.00009C0 6.34324 1.34315 5.00009 3 5.00009H6.19C6.74228 5.00009 7.19 5.44781 7.19 6.00009C7.19 6.55238 6.74228 7.00009 6.19 7.00009H3ZM14.0001 6.00009C14.0001 5.44781 14.4478 5.00009 15.0001 5.00009H17.0001C18.6569 5.00009 20.0001 6.34324 20.0001 8.00009V16.0001C20.0001 17.6569 18.6569 19.0001 17.0001 19.0001H13.8101C13.2578 19.0001 12.8101 18.5524 12.8101 18.0001C12.8101 17.4478 13.2578 17.0001 13.8101 17.0001H17.0001C17.5523 17.0001 18.0001 16.5524 18.0001 16.0001V8.00009C18.0001 7.44781 17.5523 7.00009 17.0001 7.00009H15.0001C14.4478 7.00009 14.0001 6.55238 14.0001 6.00009ZM23 10.0001C23.5523 10.0001 24 10.4478 24 11.0001V13.0001C24 13.5524 23.5523 14.0001 23 14.0001C22.4477 14.0001 22 13.5524 22 13.0001V11.0001C22 10.4478 22.4477 10.0001 23 10.0001Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default BatteryChargingIcon;
