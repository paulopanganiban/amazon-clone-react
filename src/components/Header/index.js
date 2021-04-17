import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useStateValue } from '../../StateProvider'

const Header = () => {
    const [{basket}, dispatch] = useStateValue()
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
                            <Button variant="warning outline-secondary"><SearchIcon fontSize="small"/></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>

                <div className="header_nav">
                    <div className="header_option">
                        <span className="header_optionLineOne">
                            Hello Pau
                    </span>
                        <span className="header_optionLineTwo">
                            Sign In
                    </span>
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
                    <Link style={{color: 'white'}} to="/checkout">
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
