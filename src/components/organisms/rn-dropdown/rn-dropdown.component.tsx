import React, { useState } from "react";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { RNDropdownItemProps, RNDropdownProps } from "./rn-dropdown.interface";
import dropdownStyles from "./rn-dropdown.style";

const RNDropdown: React.FC<RNDropdownProps> = ({
  testId,
  data,
  style,
  placeholder,
}) => {
  const styles = dropdownStyles();
  const [value, setValue] = useState<string | null>(null); // Specify the state type

  // Define the type for the renderItem function
  const renderItem = (item: RNDropdownItemProps) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      testID={`${testId}-dropdown`}
      style={[styles.dropdown, style]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      searchPlaceholder="Search..."
      value={value}
      onChange={(item: RNDropdownItemProps) => {
        setValue(item.value);
      }}
      //   renderLeftIcon={() => (
      //     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      //   )}
      renderItem={renderItem}
    />
  );
};

export default RNDropdown;
