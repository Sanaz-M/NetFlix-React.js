import {Link} from 'react-router-dom'

const TvShows = () => (
    <div
      className="d-flex"
      style={{
        color: "whitesmoke",
        "padding-top": "20px",
        "padding-left": "10px",
      }}
    >
      <div className="p-2">
        <h2>TV Shows</h2>
      </div>
      <div className="p-2">
        <div className="dropdown" style={{ color: "whitesmoke" }}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ "background-color": "rgb(20, 20, 20)" }}
          >
            Genres
          </button>
          <div
            className="dropdown-menu"
            style={{ "background-color": "white", color: "rgb(20, 20, 20)" }}
            aria-labelledby="dropdownMenuButton"
          >
              <Link to="#">
            <div className="dropdown-item">
              Action
            </div>
            </Link>
            <Link to="#">
            <div className="dropdown-item">
              Another action
            </div>
            </Link>
            <Link to="#">
            <div className="dropdown-item">
              Something else here
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="ml-auto p-2">
        <div className="d-flex flex-nowrap">
          <div
            className="order-3 p-2"
            style={{
              "border-style": "solid",
              "border-width": "thin",
              width: "40px",
              height: "35px",
            }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="list"
              className="svg-inline--fa fa-list fa-w-16"
              style={{ width: "18px", height: "20px", "padding-right": "4px" }}
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
              ></path>
            </svg>
          </div>
          <div
            className="order-2 p-2"
            style={{
              "border-style": "solid",
              "border-width": "thin",
              width: "40px",
              height: "35px",
            }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="th-large"
              className="svg-inline--fa fa-th-large fa-w-16"
              style={{ width: "18px", height: "20px", "padding-right": "4px" }}
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default TvShows;