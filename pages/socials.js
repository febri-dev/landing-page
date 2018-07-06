import { Box, Columns, Container, Hero, HeroHeader, HeroBody } from 'bloomer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialMedia as SocialLinks } from '../data/Links'
import Layout from '../components/Layout'
import LandingFooter from '../components/landing/Footer'
import LandingNavbar from '../components/landing/Navbar'

const SocialMediaLinks = () => SocialLinks.map(c => (
  <a href={c.href} target='_blank' key={c.id} className='column is-one-third'>
    <Box style={{ padding: '3rem', backgroundColor: c.color }}>
      <FontAwesomeIcon className='has-text-light' icon={c.classFontAwesome} size='3x' fixedWidth />
      <p className='subtitle' style={{ margin: '2rem 0 0' }}>
        <small>{c.id}</small>
      </p>
    </Box>
  </a>
))

export default () => (
  <Layout>
    <Hero isColor='dark' isFullHeight>
      <HeroHeader>
        <LandingNavbar />
      </HeroHeader>
      <HeroBody>
        <Container hasTextAlign='centered' isFluid>
          <h1 className='title'>Socials</h1>
          <p className='subtitle'>I am available (virtually) anywhere on the interwebs.</p>
          <br />
          <Columns isCentered isMultiline>
            <SocialMediaLinks />
          </Columns>
          <br />
          <p>Note: this list is incomplete and may be expanded in the future.</p>
        </Container>
      </HeroBody>
    </Hero>
    <LandingFooter />
  </Layout>
)
