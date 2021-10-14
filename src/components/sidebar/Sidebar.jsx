import './sidebar.css'

import ProfilePic from '../../assets/images/user.png'

import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MedicalServicesIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Medical Services</span>
          </li>
          <li className="sidebarListItem">
            <FitnessCenterIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Fitness Services</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Educational Services</span>
          </li>
          <li className="sidebarListItem">
            <HealthAndSafetyIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Health and Welness</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarUsersList">
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
          <li className="sidebarUserListItem">
            <img src={ProfilePic} alt="profilePic" className="sidebarUserImg" />
            <span className="sidebarUserName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
