import React from "react"
import { Flex, Box, Button, Text } from "rebass/styled-components"
import { Label, Input, Textarea } from "@rebass/forms"

export default () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <Flex flexWrap="wrap">
        <Box width={1} mb={3}>
          <Label mb={1} htmlFor="name">
            Name (required)
          </Label>
          <Input width={[1]} id="name" required name="name" defaultValue="" />
        </Box>
        <Box width={1} mb={3}>
          <Label mb={1} htmlFor="email">
            Email (required)
          </Label>
          <Input
            width={[1]}
            type="email"
            id="email"
            required
            name="email"
            defaultValue=""
          />
        </Box>
        <Box width={1} mb={3}>
          <Label mb={1} htmlFor="phone">
            Phone Number
          </Label>
          <Input width={[1]} id="phone" name="phone" defaultValue="" />
        </Box>
        <Box width={1} mb={3}>
          <Label mb={1} htmlFor="subject">
            Subject
          </Label>
          <Input width={[1]} id="subject" name="subject" defaultValue="" />
        </Box>
        <Box width={1} mb={3}>
          <Label mb={1} htmlFor="message">
            Message
          </Label>
          <Textarea width={[1]} id="message" name="message" defaultValue="" />
        </Box>
        <Box width={1} mb={3}>
          <Flex justifyContent="center">
            <Button
              mx="auto"
              type="submit"
              sx={{ cursor: "pointer" }}
              variant="primary"
            >
              <Text variant="nav">Submit</Text>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </form>
  )
}
