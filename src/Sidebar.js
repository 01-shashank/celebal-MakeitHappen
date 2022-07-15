import React from 'react'
import './Sidebar.css' 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarWorkers from './SidebarWorkers';

function Sidebar() {
  return (
    <div className="sidebar">
         <div className="sidebar__top">
            <h3>Co-Workers</h3>
            <ExpandMoreIcon/>
         </div>
         <div className="sidebar__workers">
            <div className="sidebar__workersheader">
                <div className="sidebar__header">
                    <h4>Fellow Mates</h4>
                    <ExpandMoreIcon/>
                </div>
                <AddIcon className="sidebar__addworkers"/>
            </div>
            <div className="sidebar__workerslist">
            <SidebarWorkers/>
            <SidebarWorkers/>
            <SidebarWorkers/>
            <SidebarWorkers/>
         </div>
         </div>
         
    </div>
  )
}

export default Sidebar;