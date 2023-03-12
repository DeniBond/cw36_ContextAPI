import React from 'react';
import UserAvatar from "./UserAvatar";

const Nav = (props) => {
    return (
        <div className={'nav'}>
            <UserAvatar user={props.user}/>
        </div>
    );
};

export default Nav;