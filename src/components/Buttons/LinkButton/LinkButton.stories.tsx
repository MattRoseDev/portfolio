import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { LinkButton } from ".";
import { StoryContainer } from "@/stories/StoryContainer";

export default {
  title: "components/Buttons/LinkButton",
  component: LinkButton,
} as Meta<typeof LinkButton>;

const Template: StoryFn<typeof LinkButton> = args => (
  <StoryContainer>
    <LinkButton {...args} />
  </StoryContainer>
);

export const Main = Template.bind({});
Main.args = {
  className: "bg-primary-500 rounded-full py-1.5 px-3",
  children: "Say hello",
  href: "#",
};
