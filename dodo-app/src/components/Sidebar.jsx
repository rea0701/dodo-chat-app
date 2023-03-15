import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';


const Sidebar = ({ chatUsers, setActiveChatId }) => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Room members
                    </a>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        {chatUsers && chatUsers.length > 0 && chatUsers.map((activeUser, i) => (
                            <CDBSidebarMenuItem key={i} icon="user" onClick={() => setActiveChatId(activeUser.id)}>{activeUser.user}</CDBSidebarMenuItem>
                        ))}
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Sidebar Footer
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;