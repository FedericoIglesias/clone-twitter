import { type Post } from "../types/posts";
import PostCard from "./post-card";

export function PostLists({ posts }: { posts: Post[] }) {
  {
    posts?.map((post) => {
      const { id, content, users } = post;

      const {
        user_name: userName,
        name: userFullName,
        avatar_url: avatarUrl,
      } = users;

      return (
        <PostCard
          content={content}
          key={id}
          userFullName={userFullName}
          userName={userName}
          avatarUrl={avatarUrl}
        />
      );
    });
  }
}
