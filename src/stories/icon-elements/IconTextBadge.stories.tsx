import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

import { Flex } from 'components';
import IconTextBadge from 'components/icon-elements/IconTextBadge/IconTextBadge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/IconTextBadge',
    component: IconTextBadge,
} as ComponentMeta<typeof IconTextBadge>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof IconTextBadge> = (args) => (
    <Flex>
        <div>Hello</div>
        <IconTextBadge {...args} text={ 'with icon '} Icon={ ArrowUpLineIcon } />
    </Flex>
);
  
export const BadgeXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeXs.args = {
    badgeSize: 'xs'
};

export const BadgeSm = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeSm.args = {
    badgeSize: 'sm'
};

export const BadgeMd = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeMd.args = {
    badgeSize: 'md'
};

export const BadgeLg = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeLg.args = {
    badgeSize: 'lg'
};