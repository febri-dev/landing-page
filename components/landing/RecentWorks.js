import { CardContent, CardImage, Columns, Column, Content } from 'bloomer'
import Card from './Card'
import Image from './Image'

export default () => (
  <Columns>
    <Column>
      <Card>
        <CardImage>
          <Image src='https://griko.keybase.pub/shared/images/landing-lbp.png' />
        </CardImage>
        <CardContent>
          <Content>
            <h3 className='title'>Laboratorium Management</h3>
            <p className='subtitle is-6'>
              <i className='e1a-school' /> Institut Teknologi Adhi Tama Surabaya
            </p>
            <p>
              An internal website with integrated dashboards for managing practicum participants and other systems.
            </p>
            <a href='http://lbp.itats.ac.id' target='_blank'>Dashboard website</a>
          </Content>
        </CardContent>
      </Card>
    </Column>
    <Column>
      <Card>
        <CardImage>
          <Image src='https://griko.keybase.pub/shared/images/landing-secret.png' />
        </CardImage>
        <CardContent>
          <Content>
            <h3 className='title'>Secret Projects</h3>
            <p className='subtitle is-6'>
              <i className='e1a-shushing_face' /> In collaboration with other developers
            </p>
            <p>
              We're currently working on two secret projects. Hopefully it will be announced right around Q3 2018.
            </p>
            <a className='has-text-grey'>Coming soon</a>
          </Content>
        </CardContent>
      </Card>
    </Column>
  </Columns>
)
