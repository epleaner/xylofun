import React from "react"
import { Flex } from "rebass/styled-components"

import NavLink from "@common/NavLink"

const WideMenu = ({ items }) => (
  <>
    {items.map(item => (
      <Flex key={item} mx={2} alignItems="center">
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
      </Flex>
    ))}
  </>
)

export default WideMenu
