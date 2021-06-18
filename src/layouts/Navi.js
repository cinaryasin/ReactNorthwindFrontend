import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navi() {
    
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()
    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
        
    }
    function handleSignIn() {
        setIsAuthenticated(true)
    }
    return (
        <div>
            <Menu inverted fixed="top" size='mini'>
                <Container>
                    <Menu.Item
                        name='home'

                    />
                    <Menu.Item
                        name='messages'

                    />

                    <Menu.Menu position='right'>
                        <CartSummary></CartSummary>
                        {isAuthenticated?<SignedIn signOut={handleSignOut} bişey="1"></SignedIn>:<SignedOut signIn={handleSignIn}></SignedOut>}
                        
                        
                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    )
}
