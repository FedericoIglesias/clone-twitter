import { type Post } from "../types/posts";
import PostCard from "./post-card";

export function PostLists({ posts }: { posts: Post[] }): JSX.Element  {
  return (
    <>
      {posts.map((post) => {
        const { id, content, user } = post;

        const {
          user_name: userName,
          name: userFullName,
          avatar_url: avatarUrl,
        } = user;

        return (
          <PostCard
            content={content}
            key={id}
            userFullName={userFullName}
            userName={userName}
            avatarUrl={avatarUrl}
          />
        );
      })}
    </>
  );
}
