

function Video(src) {
   // eslint-disable-next-line jsx-a11y/iframe-has-title
   return <iframe src={src.src} frameBorder="0" height={'500'} width={'100%'} allowFullScreen></iframe>;
}

export default Video;
