import styled from 'styled-components'
import Home from '../components/home/home'

 const Outerbox = styled.div`
 position: fixed;
 `;

const index = () => (
  <Outerbox>
    <Home/>
  </Outerbox>
);
export default index
