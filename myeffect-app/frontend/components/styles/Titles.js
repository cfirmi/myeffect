import styled from 'styled-components'

const Title = styled.p`
  font-weight: 200;
  color: ${props => props.theme.darkGrey};
  font-size: 28px;
  text-align: left;
  line-height: 23px;
 `;

const About = styled.p`
  font-weight: 200;
  font-size: 17px;
  text-align: left;
  line-height: 20px;
  color: ${props => props.theme.darkGrey};
  margin-top: -20px;
  `;
export { Title, About } 