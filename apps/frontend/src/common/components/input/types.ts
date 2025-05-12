export interface IProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  id?: string;
  onChange?: (value: string) => void;
}
