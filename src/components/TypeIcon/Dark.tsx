import { Svg, G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { IconProps } from './iconProps'

export function Dark({ color }: IconProps) {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_347_107)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.2169 22.1118C11.6919 22.1845 12.1783 22.2222 12.6736 22.2222C17.9472 22.2222 22.2222 17.9472 22.2222 12.6736C22.2222 7.40005 17.9472 3.125 12.6736 3.125C12.3198 3.125 11.9704 3.14424 11.6266 3.18174C14.2426 5.16362 15.9722 8.59678 15.9722 12.5C15.9722 16.6035 14.0605 20.1875 11.2169 22.1118ZM12.5 25C19.4035 25 25 19.4036 25 12.5C25 5.59644 19.4035 0 12.5 0C5.59642 0 0 5.59644 0 12.5C0 19.4036 5.59642 25 12.5 25Z"
          fill={color} />
      </G>
      <Defs>
        <ClipPath id="clip0_347_107">
          <Rect width="25" height="25" fill="white"/>
        </ClipPath>
      </Defs>
    </Svg>

  )
}