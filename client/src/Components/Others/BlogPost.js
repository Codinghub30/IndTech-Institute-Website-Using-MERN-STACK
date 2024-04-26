// components/BlogPost.js

import React from 'react';
import { Button, Card } from "flowbite-react";

const BlogPost = ({ title, content }) => {
    return (
        <Card className="max-w-sm ">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {content}
      </p>

        </Card>
    );
};

export default BlogPost;
