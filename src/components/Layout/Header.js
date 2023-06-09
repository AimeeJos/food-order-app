import React from 'react';
import classes from './Header.module.css'
import mealsimage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return ( 
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton></HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img
                 src={mealsimage}
                 alt='A table full of delicious food!'
                 />
            </div>
        </React.Fragment>
     );
}
 
export default Header;