import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, PlusIcon } from "../../../icons/icon";
import { Size } from "../../../utils/theme";
import IconButton from "./IconButton";

export default {
  title: 'Components/Atoms/IconButton',
  component: IconButton,
}

const Template = args => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <PlusIcon />,
  size: Size.icon.lg
};

export const UpIcon = Template.bind({});
UpIcon.args = {
  icon: <ChevronUpIcon />
};

export const DownIcon = Template.bind({});
DownIcon.args = {
  icon: <ChevronDownIcon />
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  icon: <ChevronLeftIcon />
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  icon: <ChevronRightIcon />
};

