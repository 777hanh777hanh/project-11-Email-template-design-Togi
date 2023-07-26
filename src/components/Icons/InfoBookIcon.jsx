import React from 'react';

const InfoBookIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="44"
            height="44"
            fill="none"
            viewBox="0 0 44 44"
        >
            <mask
                id="mask0_1_244"
                style={{ maskType: 'alpha' }}
                width="44"
                height="44"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
            >
                <path fill="url(#infoBookIcon)" d="M0 0H44V44H0z"></path>
            </mask>
            <g mask="url(#mask0_1_244)">
                <path fill="currentColor" d="M0 0H44V44H0z"></path>
            </g>
            <defs>
                <pattern id="infoBookIcon" width="1" height="1" patternContentUnits="objectBoundingBox">
                    <use transform="scale(.00195)" xlinkHref="#image0_1_244"></use>
                </pattern>
                <image
                    id="image0_1_244"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,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"
                ></image>
            </defs>
        </svg>
    );
};

export default InfoBookIcon;
