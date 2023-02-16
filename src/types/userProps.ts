interface Base {
  val: string;
  error: boolean;
  message: string;
}

export interface IEmail extends Base {}
export interface IPassword extends Base {}

export interface RuleProps {
  type: "required" | "email" | "password";
  message: string;
}

export interface PasswordRuleProps {
  type: "required" | "password";
  message: string;
}
