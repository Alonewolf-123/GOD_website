import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const sidebarNavItems = [
  {
    display: 'Merchants',
    icon: <i className='fa fa-user'></i>,
    to: '/art/merchant',
    section: 'art/merchant'
  },
  {
    display: 'NewYork Clan',
    icon: <i className='fa fa-group'></i>,
    to: '/art/newyorkclan',
    section: 'art/newyorkclan'
  },
  {
    display: 'Tokyo Clan',
    icon: <i className='fa fa-group'></i>,
    to: '/art/tokyoclan',
    section: 'calendar'
  },
  {
    display: 'London Clan',
    icon: <i className='fa fa-group'></i>,
    to: '/art/londonclan',
    section: 'user'
  },
  {
    display: 'Medelline Clan',
    icon: <i className='fa fa-group'></i>,
    to: '/art/medellineclan',
    section: 'order'
  },
  {
    display: 'Moscow Clan',
    icon: <i className='fa fa-group'></i>,
    to: '/art/moscowclan',
    section: 'order'
  },
  {
    display: 'Kingston Clan',
    icon: <i className='fa fa-group'></i>,
    to: '/art/kingstonclan',
    section: 'order'
  },
]

export const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarRef = useRef();
  const location = useLocation();

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname;
    var activeItem = -1;
    if (curPath == "/art") {
      activeItem = 0;
    } else {
      activeItem = sidebarNavItems.findIndex(item => item.to === curPath);
    }
    
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className='col-md-4 col-sm-6'>
      <div className='sidebar'>
        <div className="sidebar_logo">
          GALLERY
        </div>
        <div ref={sidebarRef} className="sidebar_menu">
          {
            sidebarNavItems.map((item, index) => (
              <Link to={item.to} key={index}>
                <div className={`sidebar_menu_item ${activeIndex === index ? 'active' : ''}`}>
                  <div className="sidebar_menu_item_icon">
                    {item.icon}
                  </div>
                  <div className="sidebar_menu_item_text">
                    {item.display}
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;