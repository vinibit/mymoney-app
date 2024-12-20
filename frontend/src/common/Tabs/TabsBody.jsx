import React from 'react';
import PropTypes from 'prop-types';

const TabsBody = ({ children, activeTab }) => {
    return (
        <div className="tab-content">
            {React.Children.map(children, (child, index) => {
                if (index === activeTab) {
                    return React.cloneElement(child, { isActive: true });
                }
                return child;
            })}
        </div>
    );
};

TabsBody.propTypes = {
    children: PropTypes.node.isRequired,
    // activeTab: PropTypes.number.isRequired,
};

export default TabsBody;