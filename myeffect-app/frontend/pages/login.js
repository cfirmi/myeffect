
import styled from 'styled-components'
import Login from '../components/useractions/logincomp'
import Register from '../components/useractions/registercomp'


const Outerbox = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  width: 100%;
`;

const login = () => (
  <Outerbox>
    <Login />
    <Register />
  </Outerbox>
)

export default login
