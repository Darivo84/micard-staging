import './feed.css'
import Share from '../share/Share';
import QR from '../qrpost/Qr';

export default function Feed() {
  return (
    <div className="feed">
      <div className="qrWrapper">
        <Share />
        <QR />
      </div>
    </div>
  )
}
