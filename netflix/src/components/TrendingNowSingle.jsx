const TrendingNowSingle = (props) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-1 mb-4 mb-lg-0">
      <img src={props.src} className="w-100 img-fluid" alt="movie" />
      {console.log(props.src)}
    </div>
  );
  
  export default TrendingNowSingle;