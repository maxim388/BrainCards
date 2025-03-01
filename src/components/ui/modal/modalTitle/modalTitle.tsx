import { FC } from 'react'

import { Close } from '@/components/ui/icons/close/Close'
import { Typography } from '@/components/ui/typography'

import s from './modalTitle.module.scss'

type ModalTitleProps = {
  className?: string
  setOpen: (isOpen: boolean) => void
  title: string
}
const ModalTitle: FC<ModalTitleProps> = ({ className, setOpen, title }) => {
  return (
    <div className={`${s.DialogTitle} ${className}`}>
      <Typography as={'h2'} variant={'h2'}>
        {title}
      </Typography>

      <button aria-label={'Close'} className={`${s.IconButton}`} onClick={() => setOpen(false)}>
        <Close width={'30'} />
      </button>
    </div>
  )
}

export default ModalTitle
