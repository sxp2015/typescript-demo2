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
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  users: UserProps;
}
