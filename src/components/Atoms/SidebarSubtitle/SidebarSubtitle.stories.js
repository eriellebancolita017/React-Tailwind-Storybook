import SidebarSubtitle from "./SidebarSubtitle";

export default {
  title: 'Components/Atoms/SidebarSubtitle',
  component: SidebarSubtitle,
}

const Template = args => <SidebarSubtitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  rightIcon:false,
  content: "Label",
  iconName: "UserIcon",
};

export const ItemWithSetting = Template.bind({});
ItemWithSetting.args = {
  rightIcon:true,
  content: "Label",
  iconName: "ChevronDownIcon",
};

