import { ViewStyle } from "react-native";

interface ComplaintsProps {
  id: number;
  title: string;
  details: string;
}

interface RNSessionListTabProps {
  testID?: string;
  style?: ViewStyle;
  data: any;
}

export { ComplaintsProps, RNSessionListTabProps };
