import React from 'react';
import SideBar from "./SideBar";
import Content from "./Content";

const Body = (props) => {
    return (
        <div className={'body'}>
            <SideBar user={props.user} stats={props.stats}/>
            <Content/>
        </div>
    );
};

export default Body;