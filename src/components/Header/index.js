import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase'

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue()

    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <>
            <div className="header">

                <Link to="/">
                    <img alt="logo" className="header_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
                </Link>



                <div className="header_search">
                    {/* <input type="text" className="header_searchInput" /> */}
                    <InputGroup>
                        <FormControl
                            placeholder="Search Products"
                            aria-label="Search Products"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="warning outline-secondary"><SearchIcon fontSize="small" /></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>

                <div className="header_nav">
                    <div onClick={handleAuthentication} className="header_option">
                        <Link className="header_option hover_effect" to={!user && '/login'}>

                            <span className="header_optionLineOne">
                                Hello {user?.email}
                    </span>
                            <span className="header_optionLineTwo">
                                {user ? 'Sign Out' : 'Sign In'}
                    </span>
                        </Link>
                    </div>
                    <div className="header_option">
                        <span className="header_optionLineOne">
                            Returns
                    </span>
                        <span className="header_optionLineTwo">
                            & Orders
                    </span>
                    </div>
                    <div className="header_option">
                        <span className="header_optionLineOne">
                            Your
                    </span>
                        <span className="header_optionLineTwo">
                            Prime
                    </span>
                    </div>
                    <div className="header_optionBasket">
                        <Link style={{ color: 'white' }} to="/checkout">
                            <ShoppingBasketIcon className="hover_effect" />
                        </Link>
                        <span className="header_optionLineTwo header_basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
