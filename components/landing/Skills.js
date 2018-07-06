import { Columns, Column } from 'bloomer'

export default () => (
  <div>
    <Columns>
      <Column>
        <i className='e1a-paintbrush e1a-lg'></i>
        <i className='e1a-man_artist_tone1 e1a-lg'></i>
        <i className='e1a-crayon e1a-lg'></i>
        <h3>Front-end Developer</h3>
        <p>I design responsive and friendly user interfaces</p>
      </Column>
      <Column>
        <i className='e1a-keyboard e1a-lg'></i>
        <i className='e1a-man_technologist_tone1 e1a-lg'></i>
        <i className='e1a-mouse_three_button e1a-lg'></i>
        <h3>Back-end Developer</h3>
        <p>I develop website logics and information systems</p>
      </Column>
    </Columns>
    <div style={{ height: '2rem' }} />
    <Columns>
      <Column>
        <h6>Known languages</h6>
        <ul className='list-unstyled'>
          <li>CSS3</li>
          <li>HTML</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>PHP</li>
        </ul>
      </Column>
      <Column>
        <h6>Primary weapons</h6>
        <ul className='list-unstyled'>
          <li>GitHub / GitLab</li>
          <li>GitKraken</li>
          <li>Hyper</li>
          <li>Insomnia</li>
          <li>PhpStorm</li>
          <li>Visual Studio Code</li>
        </ul>
      </Column>
      <Column>
        <h6>Things I'm good at</h6>
        <ul className='list-unstyled'>
          <li>Docker</li>
          <li>Hibernate ORM</li>
          <li>Laravel</li>
          <li>Next.js</li>
          <li>Vue.js</li>
        </ul>
      </Column>
    </Columns>
    <style jsx>{`
      ul.list-unstyled {
        display: inline;
        list-style: none;
        margin: 0;
      }
    `}</style>
  </div>
)
