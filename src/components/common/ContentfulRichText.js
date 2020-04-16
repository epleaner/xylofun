import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { Image, Box, Flex, Text, Heading } from "rebass/styled-components"
import StyledGatsbyLink from "@common/StyledGatsbyLink"

const ContentfulRichText = props => {
  const { document } = props

  const options = {
    renderMark: {},
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading variant="h1" as="h1">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading variant="h2" as="h2">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading variant="h3" as="h3">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Heading variant="h4" as="h4">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Heading variant="h5" as="h5">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Heading variant="h6" as="h6">
          {children}
        </Heading>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Text lineHeight="body" my={2}>
          {children}
        </Text>
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => {
        let { title, description, file } = node.data.target.fields
        if (!file) return null
        file = file["en-US"] ? file["en-US"] : file

        const mimeType = file.contentType
        const mimeGroup = mimeType.split("/")[0]
        let content

        switch (mimeGroup) {
          case "image":
            content = (
              <Image
                mt={5}
                width={["400px", "600px"]}
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

        return <Flex justifyContent="center">{content}</Flex>
      },
    },
  }

  return documentToReactComponents(document, options)
}

export default ContentfulRichText
