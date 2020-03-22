"use babel"
/* eslint-disable no-unused-vars */

import path from "path"

const aliasImports = {
  "@components": "src/components",
  "@common": "src/components/common",
  "@images": "src/images",
  "@sections": "src/components/sections",
  "@styles": "src/styles/",
  "@static": "static/",
}

export default function customResolver({ basedir, moduleName }) {
  console.log(basedir, moduleName)
  // You can use whatever strategy you want to convert your modules
  const [prefix, ...rest] = moduleName.split("/")

  if (prefix.startsWith("@")) {
    console.log(
      "resolving to:",
      path.join(__dirname, aliasImports[prefix], rest.join("/"))
    )
    return path.join(__dirname, aliasImports[prefix], rest.join("/"))
  }
}
