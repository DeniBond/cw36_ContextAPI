import React from 'react';
import UserStats from "./UserStats";

const SideBar = (props) => {
    return (
        <div className={'sidebar'}>
            <UserStats user={props.user} stats={props.stats}/>
        </div>
    );
};

export default SideBar;