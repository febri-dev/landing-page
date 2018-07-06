import { CardContent, CardImage, Columns, Column, Container, Content, Section } from 'bloomer'
import Card from './Card'
import Image from './Image'

export default () => (
  <Section className='has-background-dark' style={{ paddingTop: 0 }}>
    <Container isFluid hasTextAlign='centered'>
      <Columns style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 2rem' }}>
        <Column>
          <Card>
            <CardImage>
              <Image src='http://griko.keybase.pub/shared/images/landing-walls.png'></Image>
            </CardImage>
            <CardContent>
              <Content>
                <h3 className='title'>Gadget Wallpapers</h3>
                <p className='subtitle is-6'>
                  <i className='e1a-frame_photo' /> Spice up your background
                </p>
                <p>
                  I started making wallpapers as a hobby since 2012 and publish them on DeviantArt. Nowadays it's just
                  for killing time or when I'm on the mood.
                </p>
                <a href='https://grikomsn.deviantart.com/gallery/66550103/Wallpapers' target='_blank'>
                  DeviantArt gallery
                </a>
              </Content>
            </CardContent>
          </Card>
        </Column>
        <Column>
          <Card>
            <CardImage>
              <Image src='http://griko.keybase.pub/shared/images/landing-medium.jpg'></Image>
            </CardImage>
            <CardContent>
              <Content>
                <h3 className='title'>Medium Stories</h3>
                <p className='subtitle is-6'>
                  <i className='e1a-book' /> Tech stuff or sometimes rants
                </p>
                <p>
                  I'll try to post stories on Medium weekly or whenever inspiration strikes, from development tips
                  to thoughts about life. Probably not.
                </p>
                <a href='https://medium.com/@griko' target='_blank'>Medium profile</a>
              </Content>
            </CardContent>
          </Card>
        </Column>
      </Columns>
    </Container>
  </Section>
)
