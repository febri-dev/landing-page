import { Content } from 'bloomer'
import '../stylesheets/index.scss'

export default (props) => (
  <Content {...props}>
    {props.children}
  </Content>
)
