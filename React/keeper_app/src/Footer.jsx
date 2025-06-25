import React from "react";
import "./../public/styles.css";

const year = new Date().getFullYear();

function Footer () {
    return (
    <footer>
        <p>Copyright © {year}</p>
    </footer>
        );
}

export default Footer;