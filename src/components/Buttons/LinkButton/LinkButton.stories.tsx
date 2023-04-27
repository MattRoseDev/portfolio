import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { LinkButton } from ".";
import { StoryContainer } from "@/stories/StoryContainer";

export default {
  title: "components/LinkButton",
  component: LinkButton,
} as Meta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = args => (
  <StoryContainer>
    <LinkButton {...args} />
  </StoryContainer>
);

export const Main = Template.bind({});
Main.args = {
  className: "bg-primary-400 rounded-full py-1.5 px-3",
  children: "Say hello",
  href: "#",
};
