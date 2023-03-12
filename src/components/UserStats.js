import React from 'react';
import UserAvatar from "./UserAvatar";

const UserStats = () => {
    return (
        <div className={'user-stats'}>
            <UserAvatar/>
            <div className={'stats'}>
                <div>Followers:</div>
                <div>Subscribe::</div>
            </div>
        </div>
    );
};

export default UserStats;