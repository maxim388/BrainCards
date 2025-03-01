import { FC } from 'react'

import { determineVersion } from '@/components/ui/icons/settingsIcons'
import { IconProps } from '@/components/ui/icons/typeIcons'

import s from '../Icons.module.scss'

export const EditIcon: FC<IconProps> = ({ color = '', version = 'dark', ...rest }) => {
  return (
    <svg
      {...rest}
      className={`${s.svg} ${rest.className} `}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 20H5C4.73478 20 4.48043 20.1054 4.29289 20.2929C4.10536 20.4804 4 20.7348 4 21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22H19C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21C20 20.7348 19.8946 20.4804 19.7071 20.2929C19.5196 20.1054 19.2652 20 19 20Z"
        fill={color ? color : determineVersion(version)}
      />
      <path
        d="M5.00001 18H5.09001L9.26001 17.62C9.7168 17.5745 10.144 17.3732 10.47 17.05L19.47 8.05C19.8193 7.68097 20.0081 7.18851 19.995 6.68054C19.9819 6.17256 19.7679 5.69051 19.4 5.34L16.66 2.6C16.3024 2.2641 15.8338 2.07136 15.3433 2.05845C14.8529 2.04555 14.3748 2.21337 14 2.53L5.00001 11.53C4.67677 11.856 4.47551 12.2832 4.43001 12.74L4.00001 16.91C3.98654 17.0565 4.00554 17.2041 4.05567 17.3424C4.10579 17.4807 4.18581 17.6062 4.29001 17.71C4.38345 17.8027 4.49426 17.876 4.6161 17.9258C4.73794 17.9755 4.8684 18.0008 5.00001 18ZM15.27 4L18 6.73L16 8.68L13.32 6L15.27 4Z"
        fill={color ? color : determineVersion(version)}
      />
    </svg>
  )
}
