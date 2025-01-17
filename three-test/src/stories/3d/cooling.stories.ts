import { Cooling } from '../../app/3d/y70/cooling';
// import { RenderCanvas } from '../../app/3d/render-canvas';
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';


const meta = {
  title: 'Y70/Cooling',
  component: Cooling,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Cooling>;

export default meta;
type Story = StoryObj<typeof meta>;

export const cooling: Story = {};

// // More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };
