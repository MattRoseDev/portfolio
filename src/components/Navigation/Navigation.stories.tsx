import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Navigation } from ".";
import { StoryContainer } from "@/stories/StoryContainer";

export default {
  title: "components/Navigation",
  component: Navigation,
} as Meta<typeof Navigation>;

const Template: StoryFn<typeof Navigation> = () => (
  <StoryContainer>
    <Navigation />
  </StoryContainer>
);

export const Main = Template.bind({});
