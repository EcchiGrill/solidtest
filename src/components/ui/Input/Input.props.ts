export interface InputProps extends React.ComponentProps<"input"> {
  mask?: "card" | "date" | "cvc";
}
