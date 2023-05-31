import React from 'react';

const IconSocialMedia = ({icon}) => {
    console.log(icon);
    return (
        <a href={icon.url} target='_blank'>

            {icon.icon}
        </a>
    );
}

export default IconSocialMedia;
