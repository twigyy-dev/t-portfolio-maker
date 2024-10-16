import React from "react";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <article className="group overflow-hidden rounded-[15px] bg-white shadow-dropdown dark:bg-gray-dark">
      <Link
        href={`#`}
        className="block overflow-hidden"
      >
        <Image
          src={blog?.mainImage}
          alt="blog"
          className="w-full duration-300 ease-in group-hover:rotate-6 group-hover:scale-125"
          width={500}
          height={500}
        />
      </Link>

      <div className="px-6 py-7">
        <div className="mb-3 flex flex-wrap items-center gap-6">
          <Link
            href={`#`}
            className="flex items-center gap-2 font-satoshi text-sm font-medium -tracking-[0.1px] dark:text-gray-5"
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.0001 0.9375C7.03259 0.9375 5.4376 2.53249 5.4376 4.5C5.4376 6.46751 7.03259 8.0625 9.0001 8.0625C10.9676 8.0625 12.5626 6.46751 12.5626 4.5C12.5626 2.53249 10.9676 0.9375 9.0001 0.9375ZM6.5626 4.5C6.5626 3.15381 7.65391 2.0625 9.0001 2.0625C10.3463 2.0625 11.4376 3.15381 11.4376 4.5C11.4376 5.84619 10.3463 6.9375 9.0001 6.9375C7.65391 6.9375 6.5626 5.84619 6.5626 4.5Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.0001 9.1875C7.26494 9.1875 5.66629 9.58191 4.48169 10.2483C3.31471 10.9047 2.4376 11.8995 2.4376 13.125L2.43755 13.2015C2.4367 14.0729 2.43564 15.1665 3.39491 15.9477C3.86701 16.3321 4.52746 16.6055 5.41976 16.7861C6.31455 16.9672 7.48077 17.0625 9.0001 17.0625C10.5194 17.0625 11.6857 16.9672 12.5804 16.7861C13.4727 16.6055 14.1332 16.3321 14.6053 15.9477C15.5646 15.1665 15.5635 14.0729 15.5626 13.2015L15.5626 13.125C15.5626 11.8995 14.6855 10.9047 13.5185 10.2483C12.3339 9.58191 10.7353 9.1875 9.0001 9.1875ZM3.5626 13.125C3.5626 12.4865 4.02863 11.7939 5.03323 11.2288C6.0202 10.6736 7.42156 10.3125 9.0001 10.3125C10.5786 10.3125 11.98 10.6736 12.967 11.2288C13.9716 11.7939 14.4376 12.4865 14.4376 13.125C14.4376 14.1059 14.4074 14.658 13.8949 15.0753C13.617 15.3016 13.1525 15.5225 12.3573 15.6835C11.5645 15.8439 10.4808 15.9375 9.0001 15.9375C7.51943 15.9375 6.43565 15.8439 5.64294 15.6835C4.84774 15.5225 4.38319 15.3016 4.10529 15.0753C3.59284 14.658 3.5626 14.1059 3.5626 13.125Z"
              />
            </svg>
            {blog?.author}
          </Link>

          <a
            href={`#`}
            className="flex items-center gap-2 font-satoshi text-sm font-medium -tracking-[0.1px] dark:text-gray-5"
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.75 10.5C13.1642 10.5 13.5 10.1642 13.5 9.75C13.5 9.33579 13.1642 9 12.75 9C12.3358 9 12 9.33579 12 9.75C12 10.1642 12.3358 10.5 12.75 10.5Z" />
              <path d="M12.75 13.5C13.1642 13.5 13.5 13.1642 13.5 12.75C13.5 12.3358 13.1642 12 12.75 12C12.3358 12 12 12.3358 12 12.75C12 13.1642 12.3358 13.5 12.75 13.5Z" />
              <path d="M9.75 9.75C9.75 10.1642 9.41421 10.5 9 10.5C8.58579 10.5 8.25 10.1642 8.25 9.75C8.25 9.33579 8.58579 9 9 9C9.41421 9 9.75 9.33579 9.75 9.75Z" />
              <path d="M9.75 12.75C9.75 13.1642 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.1642 8.25 12.75C8.25 12.3358 8.58579 12 9 12C9.41421 12 9.75 12.3358 9.75 12.75Z" />
              <path d="M5.25 10.5C5.66421 10.5 6 10.1642 6 9.75C6 9.33579 5.66421 9 5.25 9C4.83579 9 4.5 9.33579 4.5 9.75C4.5 10.1642 4.83579 10.5 5.25 10.5Z" />
              <path d="M5.25 13.5C5.66421 13.5 6 13.1642 6 12.75C6 12.3358 5.66421 12 5.25 12C4.83579 12 4.5 12.3358 4.5 12.75C4.5 13.1642 4.83579 13.5 5.25 13.5Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.25 1.3125C5.56066 1.3125 5.8125 1.56434 5.8125 1.875V2.44704C6.309 2.43749 6.856 2.43749 7.45759 2.4375H10.5423C11.1439 2.43749 11.691 2.43749 12.1875 2.44704V1.875C12.1875 1.56434 12.4393 1.3125 12.75 1.3125C13.0607 1.3125 13.3125 1.56434 13.3125 1.875V2.49532C13.5075 2.51018 13.6921 2.52886 13.8668 2.55235C14.7461 2.67057 15.4578 2.91966 16.0191 3.48093C16.5803 4.0422 16.8294 4.75392 16.9476 5.63323C17.0625 6.48764 17.0625 7.57935 17.0625 8.95766V10.5423C17.0625 11.9206 17.0625 13.0124 16.9476 13.8668C16.8294 14.7461 16.5803 15.4578 16.0191 16.0191C15.4578 16.5803 14.7461 16.8294 13.8668 16.9476C13.0124 17.0625 11.9206 17.0625 10.5423 17.0625H7.45769C6.07939 17.0625 4.98764 17.0625 4.13323 16.9476C3.25392 16.8294 2.5422 16.5803 1.98093 16.0191C1.41966 15.4578 1.17057 14.7461 1.05235 13.8668C0.937479 13.0124 0.937488 11.9206 0.9375 10.5423V8.95769C0.937488 7.57937 0.937479 6.48764 1.05235 5.63323C1.17057 4.75392 1.41966 4.0422 1.98093 3.48093C2.5422 2.91966 3.25392 2.67057 4.13323 2.55235C4.30793 2.52886 4.49254 2.51018 4.6875 2.49532V1.875C4.6875 1.56434 4.93934 1.3125 5.25 1.3125ZM4.28314 3.66732C3.52857 3.76877 3.09383 3.95902 2.77643 4.27643C2.45902 4.59383 2.26877 5.02857 2.16732 5.78314C2.15014 5.91093 2.13577 6.04546 2.12376 6.1875H15.8762C15.8642 6.04546 15.8499 5.91093 15.8327 5.78314C15.7312 5.02857 15.541 4.59383 15.2236 4.27643C14.9062 3.95902 14.4714 3.76877 13.7169 3.66732C12.9461 3.56369 11.9301 3.5625 10.5 3.5625H7.5C6.06989 3.5625 5.05388 3.56369 4.28314 3.66732ZM2.0625 9C2.0625 8.35949 2.06274 7.80205 2.07231 7.3125H15.9277C15.9373 7.80205 15.9375 8.35949 15.9375 9V10.5C15.9375 11.9301 15.9363 12.9461 15.8327 13.7169C15.7312 14.4714 15.541 14.9062 15.2236 15.2236C14.9062 15.541 14.4714 15.7312 13.7169 15.8327C12.9461 15.9363 11.9301 15.9375 10.5 15.9375H7.5C6.06989 15.9375 5.05388 15.9363 4.28314 15.8327C3.52857 15.7312 3.09383 15.541 2.77643 15.2236C2.45902 14.9062 2.26877 14.4714 2.16732 13.7169C2.06369 12.9461 2.0625 11.9301 2.0625 10.5V9Z"
              />
            </svg>
            {new Date(blog?.publishedAt as string)
              .toDateString()
              .split(" ")
              .slice(1)
              .join(" ")}
          </a>
        </div>

        <h3 className="mb-4 font-satoshi text-custom-2xl font-bold -tracking-[0.3px] text-black hover:text-primary dark:text-white">
          <Link href={`#`}>
            {blog?.title.substring(0, 40)}...
          </Link>
        </h3>
        <p className="w-full max-w-[272px] dark:text-gray-5">
          {blog?.metadata.substring(0, 60)}
        </p>
      </div>
    </article>
  );
};

export default BlogItem;
