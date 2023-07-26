const PopupIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="52"
            height="52"
            fill="none"
            viewBox="0 0 52 52"
        >
            <mask
                id="mask0_1_148"
                style={{ maskType: 'alpha' }}
                width="52"
                height="52"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
            >
                <path fill="url(#popupIcon)" d="M0 0H52V52H0z"></path>
            </mask>
            <g mask="url(#mask0_1_148)">
                <path fill="currentColor" d="M0 0H52V52H0z"></path>
            </g>
            <defs>
                <pattern id="popupIcon" width="1" height="1" patternContentUnits="objectBoundingBox">
                    <use transform="matrix(.0023 0 0 .0023 -.09 -.09)" xlinkHref="#image0_1_148"></use>
                </pattern>
                <image
                    id="image0_1_148"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,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"
                ></image>
            </defs>
        </svg>
    );
};

export default PopupIcon;
