import React from 'react';

const UserAvatar = (props) => {
    return (
        <img src={props.user.avatar} alt={props.user.name} className={'user-avatar'}/>
    );
};

export default UserAvatar;