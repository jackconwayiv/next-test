"use client";
import { Heading } from "@chakra-ui/react";

interface PostsViewProps {
  data:
    | {
        [x: string]: any;
      }[]
    | null;
}

export default async function PostsView({ data }: PostsViewProps) {
  // from tutorial video: https://youtu.be/GniRj1jIhFw (along with utils folder)
  return (
    <div>
      <Heading style={{ padding: "10px", margin: "10px" }}>Posts</Heading>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
