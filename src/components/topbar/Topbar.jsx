import './topbar.css';

// Images
// ==========================================================================
import WhiteLogo from '../../assets/images/logo.png';
import UserImg from '../../assets/images/user.png';

// Icons
// ==========================================================================
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
    // Container
    // ======================================================================
    <div className="topbarContainer">
      {/* 
          // Topbar left
          // ================================================================  
      */}
      <div className="topbarLeft">
        <img src={WhiteLogo} alt="logo" className="topbarLogo" />
        <h4 className="logoText">MICard Go</h4>
      </div>
      {/* 
          // Topbar center
          // ================================================================  
      */}
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon"/>
          <input placeholder="Search..." className="searchInput" />
        </div>
      </div>
      {/* 
          // Topbar right
          // =================================================================  
      */}
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <PersonIcon />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIcons">
          <ChatIcon />
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIcons">
          <NotificationsIcon />
          <span className="topbarIconBadge">1</span>
        </div>
        <img src={UserImg} alt="user-img" className="topbarImg" />
      </div>
    </div>
  )
}
