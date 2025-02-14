const RightArrow = ({ className, circleStrokeColor }) => {
    return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#444" className={className} xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="29.9996" r="29.5" fill="" className={circleStrokeColor} stroke=""/>
            <path d="M36 19.4998C36 20.6128 37.0995 22.2748 38.2125 23.6698C39.6435 25.4698 41.3535 27.0403 43.314 28.2388C44.784 29.1373 46.566 29.9998 48 29.9998M48 29.9998C46.566 29.9998 44.7825 30.8623 43.314 31.7608C41.3535 32.9608 39.6435 34.5313 38.2125 36.3283C37.0995 37.7248 36 39.3898 36 40.4998M48 29.9998L12 29.9998" stroke="" strokeWidth={2.5}/>
        </svg>
    );
};
  
export default RightArrow;