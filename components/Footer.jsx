import { Container, Link, Stack, Typography } from '@mui/material'

function Footer() {
  return (
    <Container maxWidth='md' sx={{ my: 1.2 }}>
      <Typography fontSize={'12px'} component={'div'} align='center'>
        <Typography fontSize={'inherit'}>
          @ 2023 Kerolls {'Tawfik'} Salon . All rights reserved
          <br />
          Designed and Developed by{' '}
          <Link
            href={
              "https://api.whatsapp.com/send?phone=201553706448&text=From Kerolls Tawfik's Salon Website!"
            }
            rel='noopener noreferrer'
            target='_blank'
            underline='hover'
          >
            Ram Farid
          </Link>
        </Typography>
      </Typography>
    </Container>
  )
}

export default Footer
