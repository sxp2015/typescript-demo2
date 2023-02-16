export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}

export interface UserProps {
  isLogin: boolean;
  userName?: string;
  userID?: number;
  columnId?: number;
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

export interface Base {
  val: string;
  error: boolean;
  message: string;
}

export interface RuleProps {
  type: "required" | "email" | "password";
  message: string;
}

export interface PasswordRuleProps {
  type: "required" | "password";
  message: string;
}

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}
