import { ViewStyle } from "react-native";

// Define the type for the dropdown data items
type RNDropdownItemProps = {
  label: string;
  value: string;
};

interface RNDropdownProps {
  testId?: string;
  data: RNDropdownItemProps[];
  style?: ViewStyle;
  placeholder?: string;
}

export { RNDropdownItemProps, RNDropdownProps };
