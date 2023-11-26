import { Dispatch } from "react";

export interface Thread {
  id: string;
  author: User;
  content: string;
  image?: string;
  replies?: Reply[];
  likesCount: number;
  mention?: boolean;
  mentionUser?: User;
  createdAt: string;
  whoLiked?: User[];
}

export interface Reply {
  id: string;
  author: User;
  content: string;
  likes: number;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  verified: boolean;
  photo: string;
  bio: string;
  link?: string;
  followers?: User[];
}

export interface HasLiked {}
