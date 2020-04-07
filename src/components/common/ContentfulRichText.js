import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { Image, Box, Grid, Text, Heading } from "rebass/styled-components"
import StyledGatsbyLink from "@common/StyledGatsbyLink"

const ContentfulRichText = props => {
  const { document } = props

  const options = {
    renderMark: {},
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <Heading>{children}</Heading>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading>{children}</Heading>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading>{children}</Heading>,
      [BLOCKS.HEADING_4]: (node, children) => <Heading>{children}</Heading>,
      [BLOCKS.HEADING_5]: (node, children) => <Heading>{children}</Heading>,
      [BLOCKS.HEADING_6]: (node, children) => <Heading>{children}</Heading>,
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Text lineHeight="body">{children}</Text>
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => {
        let { title, description, file } = node.data.target.fields
        file = file["en-US"] ? file["en-US"] : file

        const mimeType = file.contentType
        const mimeGroup = mimeType.split("/")[0]
        let content

        switch (mimeGroup) {
          case "image":
            content = (
              <Image
                my={5}
                title={title ? title["en-US"] : null}
                alt={description ? description["en-US"] : null}
                src={file.url}
              />
            )
            break
          case "video":
            content = (
              <video controls="below" fit="contain">
                <source key="video" src={file.url} type={mimeType} />
              </video>
            )
            break
          default:
            content = `Unrecognized format ${mimeType}`
            break
        }

        return <Box>{content}</Box>
      },
    },
  }

  return documentToReactComponents(document, options)
}

export default ContentfulRichText
