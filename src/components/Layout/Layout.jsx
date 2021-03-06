/*!

=========================================================
* Layout
=========================================================
* Principal Layout of site, contains 
*  - Header (navbar)
*  - Main (only container with children from props)
*  - Footer 

*/
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import ReactGA from "react-ga";

class Layout extends React.Component {
  render() {
    if (process.env.NODE_ENV !== "development") {
      ReactGA.initialize("UA-99005820-2");
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

    return (
      <>
        <IndexNavbar />
        <main>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
