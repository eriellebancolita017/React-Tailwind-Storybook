import MenuItem from "./MenuItem";

export default {
  title: 'Components/Atoms/MenuItem',
  component: MenuItem,
}

const Template = args => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  // count:"1",
  content: "Label",
  iconName: "UserIcon",
};

export const ItemWithCount = Template.bind({});
ItemWithCount.args = {
  count:"1",
  content: "Label",
  iconName: "InboxIcon",
};

