import { Container, Hero, HeroHeader, HeroBody, Section, Tile } from 'bloomer'
import About from '../components/landing/About'
import LandingFooter from '../components/landing/Footer'
import LandingNavbar from '../components/landing/Navbar'
import Layout from '../components/Layout'
import Link from 'next/link'
import NicknameLogo from '../components/landing/NicknameLogo'
import ShamelessPlug from '../components/landing/ShamelessPlug'

export default () => (
  <Layout className='has-background-warning'>
    <Hero isColor='warning' isFullHeight='true'>
      <HeroHeader>
        <LandingNavbar />
      </HeroHeader>
      <HeroBody>
        <Container isFluid hasTextAlign='centered'>
          <NicknameLogo />
          <p className='subtitle'>
            Hello there! I'm a software developer from Surabaya, ID.
          </p>
        </Container>
      </HeroBody>
    </Hero>
    <About />
    <Hero isColor='dark' style={{ paddingTop: '12rem', marginTop: '-12rem' }}>
      <HeroBody style={{ paddingBottom: 0 }}>
        <Container isFluid hasTextAlign='centered'>
          <h1 className='title'>Shameless plug <i className='e1a-electric_plug' /></h1>
          <p>
            Here are the things I've made on my spare time.
          </p>
          <br />
        </Container>
      </HeroBody>
    </Hero>
    <ShamelessPlug />
    <Section className='has-background-dark' style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Container isFluid hasTextAlign='centered'>
        <Tile isAncestor style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <Tile isParent>
            <Tile className='box' style={{ padding: '4rem 2rem' }} isChild>
              <h1 className='title'>Interested in working together? Let's talk.</h1>
              <p>
                Contact me via email for business inquiries,
                <Link href='/socials'>
                  <a> or say hello via social medias. </a>
                </Link>
              </p>
              <br />
              <div className='buttons' style={{ justifyContent: 'center' }}>
                <a href='mailto:hello@griko.id' className='button is-info is-outlined'>
                  <i className='e1a-wave_tone1' /> &nbsp; hello@griko.id
                </a>
                <a href='mailto:griko@protonmail.com' className='button is-warning is-outlined'>
                  <i className='e1a-eyes' /> &nbsp; griko@protonmail.com
                </a>
              </div>
            </Tile>
          </Tile>
        </Tile>
      </Container>
    </Section>
    <LandingFooter />
  </Layout>
)
