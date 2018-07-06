import { Container, Section, Tile } from 'bloomer'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from './Avatar'
import RecentWorks from './RecentWorks'
import Skills from './Skills'

export default () => (
  <Section>
    <Container isFluid hasTextAlign='centered'>
      <Avatar />
      <Tile isAncestor style={{ maxWidth: '1024px', margin: '0 auto', zIndex: 90 }}>
        <Tile isParent>
          <Tile className='box' style={{ padding: 'calc(6rem + 60px) 2rem 2rem' }} isChild>
            <h1 className='title'>
              Converting coffee <i className='e1a-coffee' /> to code <FontAwesomeIcon icon={faTerminal} size='sm' /> since 2014
              </h1>
            <p style={{ margin: '0 auto', maxWidth: '800px' }}>
              I started to learn programming when entering college. Since then, I've done various freelance projects
              and collaborate with other skillful people to create and develop websites and information systems.
              </p>
            <hr />
            <Skills />
            <hr />
            <h1 className='title'>Recent works <i className='e1a-construction' /></h1>
            <p>
              Here and the current and past projects, you can
                <a href='mailto:hello@griko.id'> request via email for the full list. </a>
            </p>
            <br />
            <RecentWorks />
          </Tile>
        </Tile>
      </Tile>
    </Container>
  </Section>
)
