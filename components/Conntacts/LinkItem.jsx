import { FacebookRounded } from '@mui/icons-material'
import { Stack } from '@mui/material'

function LinkItem({ children }) {
  return (
    <Stack direction={'row'} gap={1.2} alignItems={'center'} mb={1}>
      {children}
    </Stack>
  )
}

export default LinkItem
