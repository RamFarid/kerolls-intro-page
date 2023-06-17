import { Avatar } from '@mui/material'

function LinkAvatar({ children }) {
  return <Avatar sx={{ bgcolor: 'transparent' }}>{children}</Avatar>
}

export default LinkAvatar
