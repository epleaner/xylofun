import PropTypes from "prop-types"
import React from "react"
import { Header as GrommetHeader, Heading } from "grommet"

import Link from "./link"

const Header = ({ siteTitle }) => (
  <GrommetHeader background="brand" justify="center">
    <Heading>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </Heading>
  </GrommetHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
