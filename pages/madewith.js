import { Container, Columns, Column, Hero, HeroBody, HeroHeader } from 'bloomer'
import LandingFooter from '../components/landing/Footer'
import LandingNavbar from '../components/landing/Navbar'
import Layout from '../components/Layout'

const lists = [
  {
    title: 'Deployment Stuff',
    links: [
      {
        href: 'https://m.do.co/c/35fdea126b8f',
        content: 'DigitalOcean'
      },
      {
        href: 'https://hub.docker.com/r/griko/landing-page',
        content: 'Docker'
      },
      {
        href: 'https://github.com/grikomsn/landing-page',
        content: 'GitHub'
      }
    ]
  },
  {
    title: 'Frameworks and Libraries',
    links: [
      {
        href: 'https://bloomer.js.org',
        content: 'Bloomer.js'
      },
      {
        href: 'https://bulma.io',
        content: 'Bulma'
      },
      {
        href: 'https://www.emojione.com',
        content: 'EmojiOne'
      },
      {
        href: 'https://fontawesome.com',
        content: 'Font Awesome'
      },
      {
        href: 'https://nextjs.org',
        content: 'Next.js'
      }
    ]
  },
  {
    title: 'Apps and Tools',
    links: [
      {
        href: 'https://github.com/typicode/hotel',
        content: 'Hotel'
      },
      {
        href: 'https://hyper.is',
        content: 'Hyper'
      },
      {
        href: 'https://code.visualstudio.com',
        content: 'Visual Studio Code'
      }
    ]
  }
]

const Lists = () => lists.map(list => (
  <Column key={list.title}>
    <h6 className='title'>{list.title}</h6>
    <ul className='list-unstyled' style={{ display: 'inline', listStyle: 'none', margin: 0 }}>
      {
        list.links.map(link => (
          <li>
            <a href={link.href} key={link.content} target='_blank'>
              {link.content}
            </a>
          </li>
        ))
      }
    </ul>
  </Column>
))

export default () => (
  <Layout>
    <Hero isColor='info'>
      <HeroHeader>
        <LandingNavbar />
      </HeroHeader>
      <HeroBody>
        <Container isFluid hasTextAlign='centered'>
          <a href='https://github.com/grikomsn/landing-page' target='_blank'>
            <img src='https://griko.keybase.pub/shared/images/landing-next-bts.png' style={{
              width: '100%', maxWidth: '600px', margin: '0 auto', borderRadius: '6px', boxShadow: '0 10px 25px rgba(0,0,0,.3)'
            }} />
          </a>
          <h1 className='title'>Made with <i className='e1a-heart' /> and <i className='e1a-fire' /></h1>
          <p className='subtitle'>Here's a list of the things I use for making this webpage</p>
          <br />
          <Columns>
            <Lists />
          </Columns>
          <br />
          <h1 className='title'>Build Status <i className='e1a-whale' /></h1>
          <p className='subtitle'>Because who doesn't love badges</p>
          <br />
          <a href="https://hub.docker.com/r/griko/landing-page/">
            <img src="https://img.shields.io/docker/automated/griko/landing-page.svg" />
          </a>
          &nbsp;
          <a href="https://hub.docker.com/r/griko/landing-page/">
            <img src="https://img.shields.io/docker/build/griko/landing-page.svg" />
          </a>
          &nbsp;
          <a href="https://hub.docker.com/r/griko/landing-page/">
            <img src="https://images.microbadger.com/badges/image/griko/landing-page.svg" />
          </a>
        </Container>
      </HeroBody>
    </Hero>
    <LandingFooter />
  </Layout>
)
