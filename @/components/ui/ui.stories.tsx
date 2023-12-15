/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type Meta, type StoryObj } from '@storybook/react';
import { TableDemo } from './ui';
const meta = {
  component: TableDemo,
} satisfies Meta<typeof TableDemo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const searchItemHasDate: Story = {
  render: (args) => {
    return (
      <div className={'u-m-auto u-max-w-[634px]'}>
        <TableDemo />
      </div>
    );
  },
};