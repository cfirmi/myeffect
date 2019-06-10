import styled from 'styled-components'
import Profile from '../components/userprofile/userprofile';

 const Outerbox = styled.div`
<<<<<<< HEAD
    display: grid;
    grid-template-columns: 250px 1fr;
=======
  display: grid;
  grid-template-columns: 250px 1fr;
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a
    width: 100%;
 `;

const index = () => (
  <Outerbox>
    <Profile />
  </Outerbox>
);
export default index
