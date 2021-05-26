import React from 'react';
import { Story, Meta } from '@storybook/react';
import Badge, {BadgeProps, BadgeType} from "./Badge";

export default {
  title: 'atoms/Badge',
  component: Badge
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Success = Template.bind({});
Success.args = {
  variant: BadgeType.SUCCESS,
  children: 'Success Badge'
};

export const Warning = Template.bind({});
Warning.args = {
  variant: BadgeType.WARNING,
  children: 'Warning Badge'
};

export const Error = Template.bind({});
Error.args = {
  variant: BadgeType.ERROR,
  children: 'Error Badge'
};
