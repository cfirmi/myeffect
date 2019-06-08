import styled from 'styled-components'
import Profile from '../components/userprofile/userprofile';

 const Outerbox = styled.div`
    /* background: red; */
    width: 100%;
 `;

const index = () => (
  <Outerbox>
    <Profile />
  </Outerbox>
);
export default index
