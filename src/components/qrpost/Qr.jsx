import './qr.css';
import QRCode from 'react-google-qrcode';

export default function QR() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <span className="postUsername">Firstname Lastname</span>
        </div> 
      </div>
      <div className="postWrapper">
        <div className="postTop">
          <QRCode data="https://www.google.com" size={240} />
        </div> 
      </div>
    </div>
  )
}
