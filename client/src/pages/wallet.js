import React, { useEffect, useState } from 'react';
import EditableFields from './parentComponent';
import ScrollBox from './scrollBox';
import BottomNavbar from './bottomNav';
import Navbar from './navbar';
import ParentComponent from './parentComponent';
import styles from './wallet.module.css'; // Adjust import if using CSS modules
import ChatPopup from './ChatPopup';
import DailyAlerts from './DailyAlerts';

const Wallet = () => {
  const userName = sessionStorage.getItem("username");
  return (
    <div className="wallet-container bg-[#90AEAD] min-h-screen">
      <div className="main-content">
        <div className="editable-fields">
          <ParentComponent />
          <DailyAlerts userName={userName}/>
        </div>
      </div>
      <ChatPopup />
    </div>
  );
};

export default Wallet;
