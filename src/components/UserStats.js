import React from 'react';
import UserAvatar from "./UserAvatar";

const UserStats = (props) => {
    return (
        <div className={'user-stats'}>
            <UserAvatar user={props.user}/>
            <div className={'stats'}>
                <div>Followers:</div>
                <div>Subscribe::</div>
            </div>
        </div>
    );
};

export default UserStats;