import {
  Card,
  CardContent,
  Stack,
  Typography,
  Link,
  Avatar,
} from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LinkItem from './LinkItem'
import LinkAvatar from './LinkAvatar'
import LinkText from './LinkText'
import { useTranslation } from 'next-i18next'

function Contacts() {
  const { t } = useTranslation()
  return (
    <Stack gap={3} mt={2}>
      <Stack direction={'row'}>
        <Avatar sx={{ bgcolor: 'transparent' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            style={{
              width: '100%',
              height: '100%',
            }}
            src={
              'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg'
            }
            alt='Google maps'
          />
        </Avatar>
        <Link
          href={'https://goo.gl/maps/35MK7UFuf8V4ZWbu8'}
          target='_blank'
          textAlign={'center'}
          color={'inherit'}
          dangerouslySetInnerHTML={{ __html: t('address') }}
        />
      </Stack>
      <Stack
        direction={'row'}
        gap={2}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Card
          sx={{
            flex: 1,
          }}
        >
          <CardContent>
            <ContactTitle text={t('contacts.salon.title')} />
            <LinkItem>
              <LinkAvatar>
                <FacebookOutlinedIcon sx={{ color: '#3b5998' }} />
              </LinkAvatar>
              <LinkText
                link={'https://www.facebook.com/kerolls.tawfik.videos'}
                text={'kerolls.tawfik'}
              />
            </LinkItem>
            <LinkItem>
              <LinkAvatar>
                <InstagramIcon sx={{ color: '#F56040' }} />
              </LinkAvatar>
              <LinkText
                link={'https://www.instagram.com/kerolls_tawfik_salons'}
                text={'kerolls_tawfik_salons'}
              />
            </LinkItem>
            <LinkItem>
              <LinkAvatar>
                <WhatsAppIcon sx={{ color: '#25D366' }} />
              </LinkAvatar>
              <LinkText
                link={
                  'https://api.whatsapp.com/send?phone=201061628561&text=From%20your%20Website!'
                }
                text={'+20 1061628561'}
              />
            </LinkItem>
          </CardContent>
        </Card>
        <Card
          sx={{
            flex: 1,
          }}
        >
          <CardContent>
            <ContactTitle text={t('contacts.bride.title')} />
            <LinkItem>
              <LinkAvatar>
                <FacebookOutlinedIcon sx={{ color: '#3b5998' }} />
              </LinkAvatar>
              <LinkText
                link={'https://www.facebook.com/kerolls.tawfik'}
                text={'kerolls.tawfik'}
              />
            </LinkItem>
            <LinkItem>
              <LinkAvatar>
                <InstagramIcon sx={{ color: '#F56040' }} />
              </LinkAvatar>
              <LinkText
                link={'https://www.instagram.com/kerolls_tawfik'}
                text={'kerolls_tawfik'}
              />
            </LinkItem>
            <LinkItem>
              <LinkAvatar>
                <WhatsAppIcon sx={{ color: '#25D366' }} />
              </LinkAvatar>
              <LinkText
                link={
                  'https://api.whatsapp.com/send?phone=201010820108&text=From%20your%20Website!'
                }
                text={'+20 1010820108'}
              />
            </LinkItem>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  )
}

const ContactTitle = ({ text }) => {
  return (
    <Typography
      noWrap
      component={'h4'}
      variant='body1'
      fontWeight={700}
      fontSize={'22px'}
      mb={2}
    >
      {text}
    </Typography>
  )
}

export default Contacts
