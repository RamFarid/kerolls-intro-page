import { Card, CardContent } from '@mui/material'
import WifiIcon from '@mui/icons-material/Wifi'
import { Box, Typography, Chip } from '@mui/material'
import { useTranslation } from 'next-i18next'

const WifiPass = ({ wifiPassword }) => {
  const { t: tWiFi } = useTranslation()
  const handleCopy = () => {
    navigator.clipboard.writeText(wifiPassword)
    alert('Password copied to clipboard!')
  }

  return (
    <Box width='100%' my={2} maxWidth={400} mb={3}>
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Box display='flex' alignItems='center'>
              <WifiIcon sx={{ color: 'primary.main', marginInlineEnd: 1 }} />
              <Typography variant='h6' fontWeight='bold' color='text.primary'>
                {tWiFi('contacts.wifi.title')}
              </Typography>
            </Box>
            <Chip
              label='Tap to copy'
              onClick={handleCopy}
              color='primary'
              variant='outlined'
              sx={{ cursor: 'pointer' }}
            />
          </Box>
          <Box
            mt={2}
            p={2}
            bgcolor='primary.light'
            borderRadius={2}
            textAlign='center'
          >
            <Typography variant='h6' fontFamily='monospace' letterSpacing={1}>
              {wifiPassword}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default WifiPass
