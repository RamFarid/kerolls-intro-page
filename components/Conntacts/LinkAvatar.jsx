import { Avatar } from '@mui/material'

function LinkAvatar({ children }) {
  return (
    <Avatar sx={{ bgcolor: 'transparent', justifyContent: 'flex-start' }}>
      {children}
    </Avatar>
  )
}

export default LinkAvatar
