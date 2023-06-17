import { Link, Typography } from '@mui/material'

function LinkText({ text, link }) {
  return (
    <Link
      href={link}
      target='_blank'
      color={'text.primary'}
      sx={{ direction: 'ltr' }}
    >
      <Typography fontSize={'12px'}>{text}</Typography>
    </Link>
  )
}

export default LinkText
