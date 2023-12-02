import { FC, ReactNode } from 'react'

import { MenuContent } from '@/components/ui/dropDownMenu/menuContent/MenuContent'
import { MenuContentWithAvatar } from '@/components/ui/dropDownMenu/menuСontentWithAvatar/MenuContentWichAvatar'
import { EditOutline } from '@/components/ui/icons/edit-outline/EditOutline'
import { PlayCircleOutline } from '@/components/ui/icons/play-circle-outline/PlayCircleOutline'
import { TrashOutline } from '@/components/ui/icons/trash-outline/TrashOutline'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from '@/components/ui/dropDownMenu/DropDownMenu.module.css'

type PropsType = {
  children?: ReactNode
  email: string
  name: string
  trigger?: ReactNode
}
export const DropDownMenu: FC<PropsType> = ({ children, email, name, trigger }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={s.trigger}>
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align={'end'} className={s.DropdownMenuContent} sideOffset={5}>
          <MenuContentWithAvatar
            name={name}
            onClickAvatar={() => alert('click avatar')}
            url={email}
          />
          <MenuContent
            onClick={() => alert('Learn')}
            svgIcon={<PlayCircleOutline />}
            title={'Learn'}
          />
          <MenuContent onClick={() => alert('Edit')} svgIcon={<EditOutline />} title={'Edit'} />
          <MenuContent
            isLine
            onClick={() => alert('Delete')}
            svgIcon={<TrashOutline />}
            title={'Delete'}
          />
          <DropdownMenu.Arrow asChild className={s.DropdownMenuArrow} height={15} width={15}>
            <div className={s.triangle}>{children}</div>
          </DropdownMenu.Arrow>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
