import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, NavbarBrand, NavbarStart, NavbarEnd, NavbarItem } from 'bloomer'
import { SocialMedia as SocialLinks } from '../../data/Links'
import Link from 'next/link'

const NavbarRoute = (props) => (
  <Link href={props.href}>
    <NavbarItem href={props.href} onClick={false}>
      {props.content}
    </NavbarItem>
  </Link>
)

const SocialMediaLinks = () => SocialLinks.filter(link => link.isPrimary).map(c => (
  <NavbarItem href={c.href} target='_blank' key={c.id}>
    <FontAwesomeIcon icon={c.classFontAwesome} fixedWidth />
  </NavbarItem>
))

export default () => (
  <Navbar>
    <NavbarBrand style={{ width: '100%' }} isDisplay='flex'>
      <NavbarStart style={{ display: 'flex' }}>
        <SocialMediaLinks />
      </NavbarStart>
      <NavbarEnd style={{ display: 'flex', marginLeft: 'auto' }}>
        <NavbarRoute href='/' content='About' />
        <NavbarRoute href='/socials' content='Socials' />
        <NavbarItem href='mailto:hello@griko.id' isHidden='mobile'>
          hello@griko.id
        </NavbarItem>
      </NavbarEnd>
    </NavbarBrand>
  </Navbar>
)
