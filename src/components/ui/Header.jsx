import { useState, useRef, useEffect } from 'react';

const Header = ({ onAddClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleAddClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCreateModule = () => {
    onAddClick('module');
    setIsDropdownOpen(false);
  };

  const handleAddLink = () => {
    onAddClick('link');
    setIsDropdownOpen(false);
  };

  const handleUpload = () => {
     onAddClick('upload');
    setIsDropdownOpen(false);
  };

  return (
    <div className="header">
      <h1 className="header-title">Course builder</h1>
      <div className="header-right">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="dropdown-container" ref={dropdownRef}>
          <button className="add-button" onClick={handleAddClick}>
           <img src="/src/assets/AddOutlined.svg"></img> Add<img src="/src/assets/CaretUpFilled.svg" className={isDropdownOpen?"":"expanded"}></img>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={handleCreateModule}>
                {/* <span className="item-icon">📄</span> */}
                <img src="/src/assets/SinglePointRubric.svg" alt="" />
                Create module
              </button>
              <button className="dropdown-item" onClick={handleAddLink}>
                {/* <span className="item-icon">🔗</span> */}
                <img src="/src/assets/LinkOutlined.svg" alt="" />
                Add a link
              </button>
              <button className="dropdown-item" onClick={handleUpload}>
                {/* <span className="item-icon">⬆️</span> */}
                <img src="/src/assets/UploadOutlined.svg" alt="" />
                Upload
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
