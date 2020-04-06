import React from "react"
import { Text, Box } from "rebass/styled-components"

import NavLink from "@common/NavLink"

const WideMenu = ({ items }) => (
  <>
    {items.map(item => (
      <Box key={item} mx={2}>
        <NavLink
          to={
            item === "Home"
              ? "/"
              : `/${item
                  .toLowerCase()
                  .split(" ")
                  .join("-")}`
          }
        >
          {item}
        </NavLink>
      </Box>
    ))}
  </>
)

export default WideMenu
