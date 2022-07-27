import './sidebar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CSILogo from "../assets/images/csi.png";

const Sidebar = () => {
    return (
        <div className='social-links-panel'>
            <div className='panel-container'>
                <div><a href='https://www.pictcsi.com/' target='_blank' className='csi-logo-social'><img src={CSILogo} alt='' /></a></div>
                <div><a href='http://www.facebook.com/csipict' target='_blank' className='fb-logo'>< i className='fa-brands fa-linkedin fa-lg' /></a></div>
                <div><a href='http://www.instagram.com/csipict' target='_blank' className='ig-logo'><i className="fa-instagram-i" /></a></div>
                <div><a href='http://www.linkedin.com/company/pict-csi' target='_blank' className='in-logo'><i className='fa-brands fa-linkedin fa-lg' /></a></div>
                <div><a href='https://www.youtube.com/channel/UC_lcyqJpGxd7XWBMrcbpgpw/featured' target='_blank' className='yt-logo'><i className='fa fa-youtube fa-lg' /></a></div>
            </div>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
            <link rel='stylesheet' href='https://pro.fontawesome.com/releases/v5.11.2/css/all.css' />


        </div>

    )
}

export default Sidebar;