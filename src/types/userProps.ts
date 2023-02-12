export interface IUserProps {
  isLogin: boolean;
  userName?: string;
  userID?: number;
}

export interface IEmail {
  val: string;
  error: boolean;
  message: string;
}

export interface EmailRuleProps {
  type: "required" | "email";
  message: string;
}