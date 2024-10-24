import { IRNTextProps } from "@freakycoder/react-native-custom-text";

export interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
}
