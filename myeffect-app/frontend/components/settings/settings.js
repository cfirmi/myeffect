import React, { Component } from 'react'
import styled from 'styled-components'
import UserSettings from './usersettings/usersettings'

const Outerbox = styled.div`
    background: red;
`;

export default class settings extends Component {
    render() {
        return (
            <Outerbox>
             <UserSettings />
            </Outerbox>
        )
    }
}
