import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { Image, Video, Box, Grid } from "grommet"

const ContentfulRichText = props => {
  const { document } = props

  const options = {
    renderMark: {},
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { title, description, file } = node.data.target.fields
        const mimeType = file["en-US"].contentType
        const mimeGroup = mimeType.split("/")[0]
        let content

        switch (mimeGroup) {
          case "image":
            content = (
              <Image
                title={title ? title["en-US"] : null}
                alt={description ? description["en-US"] : null}
                src={file["en-US"].url}
              />
            )
            break
          case "video":
            content = (
              <Video controls="below" fit="contain">
                <source key="video" src={file["en-US"].url} type={mimeType} />
              </Video>
            )
            break
          default:
            content = `Unrecognized format ${mimeType}`
            break
        }

        return (
          <Grid>
            <Box>{content}</Box>
          </Grid>
        )
      },
    },
  }

  return documentToReactComponents(document, options)
}

export default ContentfulRichText
