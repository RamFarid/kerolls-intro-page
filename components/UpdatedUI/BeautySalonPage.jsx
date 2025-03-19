import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  alpha,
  Button,
  Stack,
  Container,
} from '@mui/material'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {
  ContentCut,
  Facebook,
  Instagram,
  WhatsApp,
  CreditCard,
} from '@mui/icons-material'
import WhereToVoteIcon from '@mui/icons-material/WhereToVote'
import { pink, purple } from '@mui/material/colors'
import { useTranslation } from 'next-i18next'
import Location from './Location'
import ToggleLang from '../ToggleLang'
import ImageOverlay from './ImageOverlay'
import ToggleTheme from './ToggleTheme'
import WifiPass from './WiFiPass'

export default function BeautySalonPage() {
  const { t } = useTranslation()
  const salonInfo = {
    name: t('card.title'),
    brief: t('card.subtitle'),
  }

  const salonContacts = [
    {
      name: t('contacts.salon.fb'),
      icon: <Facebook />,
      url: 'https://www.facebook.com/kerolls.tawfik.videos',
    },
    {
      name: t('contacts.salon.ig'),
      icon: <Instagram />,
      url: 'https://www.instagram.com/kerolls_tawfik_salons',
    },
    {
      name: t('contacts.salon.wa'),
      icon: <WhatsApp />,
      url: 'https://api.whatsapp.com/send?phone=201061628561&text=From%20your%20Website!\n',
    },
    {
      name: t('contacts.salon.nailOnly'),
      icon: <CreditCard />,
      url: 'https://api.whatsapp.com/send?phone=201096521544&text=From%20your%20Website!',
      special: true,
    },
  ]

  const brideContacts = [
    {
      name: t('contacts.bride.fb'),
      icon: <Facebook />,
      url: 'https://www.facebook.com/kerolls.tawfik/',
    },
    {
      name: t('contacts.bride.ig'),
      icon: <Instagram />,
      url: 'https://www.instagram.com/kerolls_tawfik',
    },
    {
      name: t('contacts.bride.wa'),
      icon: <WhatsApp />,
      url: 'https://api.whatsapp.com/send?phone=201010820108&text=From%20your%20Website!',
    },
  ]

  return (
    <>
      <ImageOverlay src={'/imgs/kerolls-bora.jpg'} alt='Kerolls Tawfik' />
      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography mt={-10} variant='h5' fontWeight='bold'>
          {salonInfo.name}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          align='center'
          mb={'35px'}
          maxWidth={300}
        >
          {salonInfo.brief}
        </Typography>
        <Location />

        <Stack direction={'row'} mt={2}>
          <ToggleLang />
          <ToggleTheme />
        </Stack>
        <Box width='100%' maxWidth={400} mt={3}>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Box display='flex' alignItems='center' mb={1}>
                <ContentCut color='primary' sx={{ marginInlineEnd: 1 }} />
                <Typography variant='h6'>
                  {t('contacts.salon.title')}
                </Typography>
              </Box>
              <List>
                {salonContacts.map((contact, index) => (
                  <ListItemButton
                    key={index}
                    component='a'
                    href={contact.url}
                    target='_blank'
                    sx={(t) => ({
                      backgroundColor: contact.special
                        ? alpha(purple[600], 0.1)
                        : alpha(t.palette.background.default, 0.9),
                      mb: 1,
                      textAlign: 'start',
                      '&:hover': {
                        backgroundColor: contact.special
                          ? alpha(purple[800], 0.7)
                          : alpha(t.palette.background.default, 0.1),
                      },
                    })}
                  >
                    <ListItemIcon>{contact.icon}</ListItemIcon>
                    <ListItemText primary={contact.name} />
                  </ListItemButton>
                ))}
              </List>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Box display='flex' alignItems='center' mb={1}>
                <WhereToVoteIcon color='primary' sx={{ marginInlineEnd: 1 }} />
                <Typography variant='h6'>
                  {t('contacts.bride.title')}
                </Typography>
              </Box>
              <List>
                {brideContacts.map((contact, index) => (
                  <ListItemButton
                    key={index}
                    component='a'
                    href={contact.url}
                    target='_blank'
                    sx={(t) => ({
                      mb: 1,
                      textAlign: 'start',
                      bgcolor: alpha(t.palette.background.default, 0.9),
                      '&:hover': {
                        bgcolor: alpha(t.palette.background.default, 0.1),
                      },
                    })}
                  >
                    <ListItemIcon>{contact.icon}</ListItemIcon>
                    <ListItemText primary={contact.name} />
                  </ListItemButton>
                ))}
              </List>
            </CardContent>
          </Card>
          <WifiPass wifiPassword={'zK7yDsyk'} />
          <Button
            href='https://ipn.eg/S/kerolls_tawfik/instapay/8LCfWW'
            target='_blank'
            rel='noopener noreferrer'
            fullWidth
            sx={{
              my: 2,
              background: 'linear-gradient(to right, #7e22ce, #db2777)',
              color: 'white',
              padding: '12px 16px',
              borderRadius: '8px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              textTransform: 'none',
              transition: 'box-shadow 0.3s ease',
              '&:hover': {
                boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.15)',
                background: 'linear-gradient(to right, #9333ea, #ec4899)',
              },
            }}
            color='inherit'
            endIcon={<ArrowForwardIcon />}
          >
            <Stack
              direction={'row'}
              justifyContent={'flex-start'}
              alignItems={'center'}
              width={'100%'}
              gap={0.5}
            >
              <CreditCardIcon />
              {t('contacts.payments.instaPay')}
            </Stack>
          </Button>
        </Box>
      </Container>
    </>
  )
}
