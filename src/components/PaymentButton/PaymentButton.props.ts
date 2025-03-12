import { ButtonProps } from "./../ui/Button/Button.props";
export interface PaymentButtonProps extends ButtonProps {
  isProcessing: boolean;
  isDown: boolean;
}
