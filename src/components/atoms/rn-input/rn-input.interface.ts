import {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { palette } from "theme/themes";

/**
 * Props for the RNTextInput component.
 */
export interface RNTextInputProps {
  /**
   * testID for the flatlist to test the element.
   */
  testID?: string;
  /**
   * Unique identifier for the input field.
   */
  text: string;
  /**
   * Style for the text input.
   */
  style?: StyleProp<TextStyle>;
  /**
   * Maximum number of lines to show. If undefined, a single line input is rendered.
   */
  numberOfLines?: number;
  /**
   * if true the input caret no shown
   */
  caretHidden?: boolean;
  /**
   * Placeholder text displayed when the input is empty.
   */
  placeholder?: string;
  /**
   * Color of the placeholder text.
   */
  placeholderTextColor?: string;
  /**
   * If false, the input field is disabled and cannot be edited.
   */
  editable?: boolean;
  /**
   * If false, the input field is disabled and cannot be edited.
   */

  disabled?: boolean;
  /**
   * Determines how the text is capitalized.
   */
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;

  /**
   * If true, the input field is focused on mount.
   */
  autoFocus?: boolean;

  /**
   * Maximum length of the entered text.
   */
  maxLength?: number;
  /**
   * If true, the input field can contain multiple lines of text.
   */
  multiline?: boolean;
  /**
   * The type of keyboard to display.
   */
  keyboardType?: KeyboardTypeOptions;
  /**
   * If true, the input field is read-only and cannot be edited.
   */
  readOnly?: boolean;
  /**
   * Callback function called when the input field loses focus.
   */
  onBlur?: () => void;
  /**
   * Callback function called when the text in the input field changes.
   * @param {string} text - The new text entered in the input field.
   */
  onChangeText?: (text: string) => void;
  /**
   * Callback function called when a touch gesture is initiated on the input field.
   */
  onPressIn?: () => void;
  /**
   * Callback function called when a touch gesture is released on the input field.
   */
  onPressOut?: () => void;
  /**
   * Callback function called when the input field receives focus.
   */
  onFocus?: () => void;
  /**
   * Callback function called when the "submit" button is pressed on the keyboard.
   * @param {string} text - The current text in the input field.
   */
  onSubmitEditing?: (text?: string) => void;

  /**
   * Style for the container of the component.
   */
  containerStyle?: ViewStyle;

  /**
   * Callback function called when the "onfocus" button is pressed on the keyboard.
   * @param {string} text - The current text in the input field.
   */
  handleFocus?: () => void;

  /**
   * Callback function called when the "onblur" button is pressed on the keyboard.
   * @param {string} text - The current text in the input field.
   */
  handleBlur?: () => void;
  /**
props for is focus
  */
  isFocused?: boolean;
  blurOnSubmit?: boolean;
  selectionColor?: typeof palette;
  returnKeyLabel?: string;
}
