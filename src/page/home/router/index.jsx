import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

async function getPost() {
  //  const id = params.id -poxancum enq id
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Response("", { status: res.status, statusText: "NotFound" });
  }
  return res.json();
}

export const blog = async ({ request, params }) => {
  return defer({
    posts: getPost(),
  });
};

const RouterTest = () => {
  const { posts } = useLoaderData();
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={posts}>
          {(resolvedPosts) => (
            <>
              {resolvedPosts.map((e, index) => (
                <div key={index}>{e.title}</div>
              ))}
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default RouterTest;
