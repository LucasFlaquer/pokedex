import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';
import { IconProps } from './iconProps';

export function Normal({ color }: IconProps) {
  return (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <G clip-path="url(#clip0_347_101)">
  <Path fill-rule="evenodd" clip-rule="evenodd" d="M25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5ZM19.6428 12.5C19.6428 16.4449 16.4449 19.6428 12.5 19.6428C8.55511 19.6428 5.35717 16.4449 5.35717 12.5C5.35717 8.55511 8.55511 5.35717 12.5 5.35717C16.4449 5.35717 19.6428 8.55511 19.6428 12.5Z" fill={color}/>
  </G>
  <Defs>
  <ClipPath id="clip0_347_101">
  <Rect width="25" height="25" fill="white"/>
  </ClipPath>
  </Defs>
  </Svg>
  )
}
