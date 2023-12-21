import Preferences from "../components/Preferences";
import { getByRole, userEvent, within } from "@storybook/testing-library";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/Preferences",
  component: Preferences,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    preferences: {
      color: "orange",
      listSize: 42,
    },
  },
};

export const Brown = {
  args: {
    preferences: {
      color: "brown",
      listSize: 42,
    },
  },
};

export const Green = {
  args: {
    preferences: {
      color: "green",
      listSize: 42,
    },
  },
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const ChangeColor = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const select = canvas.getByRole("combobox");

    const number = canvas.getByRole("spinbutton");
    await userEvent.type(number, "3");

    await userEvent.selectOptions(select, ["brown"]);
    await sleep(2000);
  },
  args: {
    preferences: {
      color: "orange",
      listSize: 42,
    },
  },
};
