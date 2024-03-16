import { Stack } from '@mui/material'

function LinkItem({ children }) {
  return (
    <Stack direction={'row'} alignItems={'center'} mb={1}>
      {children}
    </Stack>
  )
}

export default LinkItem
