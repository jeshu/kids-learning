import React from 'react';
import DashboardItem from './DashboardItem';

export default { 
    title: "DashboardItem",
    component : DashboardItem
};

const props = {path:"", title:"Alphabets", desc:"Some desc", onPreview:()=>{}, onLaunch:()=>{}, id:"newID"}
export const AlphbetDashboardItem = () => <DashboardItem  {...props}/>
AlphbetDashboardItem.story = {
    name : "Alphabets",
}