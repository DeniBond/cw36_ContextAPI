import React from 'react';
import UserStats from "./UserStats";

const SideBar = (props) => {
    return (
        <div className={'sidebar'}>
            <UserStats user={props.user}/>
        </div>
    );
};

export default SideBar;