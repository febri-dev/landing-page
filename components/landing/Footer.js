import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Container, Footer } from 'bloomer'
import { SocialMedia } from '../../data/Links'

const SocialLinks = () => SocialMedia.filter(link => link.isPrimary).map(c => (
  <a href={c.href} target='_blank' key={c.id} className='button is-dark is-rounded'>
    <FontAwesomeIcon icon={c.classFontAwesome} fixedWidth />
  </a>
))

export default () => (
  <Footer className='has-background-dark has-text-light'>
    <Container isFluid hasTextAlign='centered'>
      <div className='buttons' style={{ justifyContent: 'center' }}>
        <SocialLinks />
      </div>
      <small>
        Handcrafted with <FontAwesomeIcon icon={faHeart} fixedWidth /> by myself.
        Copyright &copy; {(new Date()).getFullYear()}.
        <br />
        Made with <a href='https://bulma.io/' target='_blank' className='has-text-light'><b>Bulma</b> </a>
        and <a href='https://nextjs.org/' target='_blank' className='has-text-light'><b>Next.js</b></a>.
      </small>
    </Container>
  </Footer>
)
