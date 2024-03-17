/*import { useEffect, useState } from 'react';
import Tag from "../ui/Tag";
import axios from 'axios';

const Blogs = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/getBlogs');
        setRecords(response.data);
        alert("Already set");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-[4rem] w-full px-5 py-2">
      <ul className="w-full grid grid-cols-1 px-2 py-1 text-slate-300 font-medium gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {records.map((item) => (
          <li key={item._id}>
            <p className="text-slate-300">{item.author}</p>
            <div className="w-full px-4 py-2 flex flex-col gap-3">
              <p className="text-slate-300">{item.createdAt}</p>
              <h3 className="text-2xl font-bold text-slate-50 "> {item.title} </h3>
              <p className="text-slate-500 font-medium"> {item.subtitle} </p>
              <p className="w-full flex gap-0 mt-0">
                {item.hashtag.map((tag, index) => (
                  <Tag key={index} text={`#${tag}`} color={"text-green-900"} bgColor={"bg-green-400"} />
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
*/

import { useEffect, useState } from 'react';
import Tag from "../ui/Tag";
// Sample data array for blogs
const data = [
  {
    id: 1,
    title: 'Introduction to React Hooks',
    subtitle: 'Learn the basics of React Hooks and how to use them in your projects.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'John Doe',
    image: '/images/coding/react.jpg',
    hashtag: ["react", "coding"],
    createdAt: "07 March 2024",
  },
  {
    id: 2,
    title: 'CSS-in-JS: Styling React Components',
    subtitle: 'Explore different CSS-in-JS libraries and techniques for styling React components.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Jane Smith',
    image: '/images/coding/reactNative.jpg',
    hashtag: ["react", "coding"],
    createdAt: "07 March 2024",
  },
  {
    id: 3,
    title: 'JavaScript ES6: Arrow Functions and Destructuring',
    subtitle: 'Deep dive into Arrow Functions and Destructuring in JavaScript ES6.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Alex Johnson',
    image: '/images/coding/javascript.jpg',
    hashtag: ["react", "coding"],
    createdAt: "07 March 2024",
  },
  {
    id: 4,
    title: 'Responsive Web Design with Flexbox',
    subtitle: 'Master the art of building responsive layouts using CSS Flexbox.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Emily Brown',
    image: '/images/coding/html.jpg',
    hashtag: ["react", "coding"],
    createdAt: "07 March 2024",
  },
  {
    id: 5,
    title: 'Node.js Basics: Getting Started with Server-Side JavaScript',
    subtitle: 'Explore the fundamentals of Node.js and its role in server-side development.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Chris Wilson',
    image: '/images/coding/database.jpg',
    hashtag: ["react", "coding"],
    createdAt: "07 March 2024",
  },
  {
    id: 6,
    title: 'GraphQL: A Query Language for APIs',
    subtitle: 'Introduction to GraphQL and how it revolutionizes API development.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Sophia Carter',
    image: '/images/coding/react.jpg',
    hashtag: ["react", "coding"],
    createdAt: "07 March 2024",
  },
  {
    id: 7,
    title: 'State Management in React: Redux and Context API',
    subtitle: 'Comparing state management options in React, including Redux and Context API.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'David Miller',
    image: '/images/coding/html.jpg',
    hashtag: ["react", "coding"],
    createdAt: "07 March 2024",
  },
  {
    id: 8,
    title: 'Web Accessibility: A Comprehensive Guide',
    subtitle: 'Ensuring your web applications are accessible to all users.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Grace White',
    image: '/images/coding/javascript.jpg',
    hashtag: ["react", "coding"],
    createdAt: "07 March 2024",
  },
  {
    id: 9,
    title: 'Testing JavaScript Applications with Jest',
    subtitle: 'Introduction to Jest for testing JavaScript applications.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Michael Green',
    image: '/images/coding/react.jpg',
    hashtag: ["react", "coding"],
    createdAt: "07 March 2024",
  },
  {
    id: 10,
    title: 'Deploying React Apps: From Development to Production',
    subtitle: 'Guide to deploying React applications on various platforms.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Jessica Adams',
    image: '/images/coding/reactNative.jpg',
    hashtag: ["react", "coding"],
    createdAt: "07 March 2024",
  },
];

const Blogs = () => {
  return (
    <div className="mt-[4rem] w-full px-5 py-2">


      <ul className=" w-full grid grid-cols-1 px-2 py-1  text-slate-300 font-medium gap-x-8 gap-y-16  sm:grid-cols-2 lg:grid-cols-3">
        {
          data.map((item) => {
            return <li className="" key={item.id}>
              <p className=" text-slate-300">{item.author}</p>
              <img className="px-2  py-2 rounded-3xl" src={item.image} alt="" />
              <div className="w-full px-4 py-2 flex flex-col gap-3">
                <p className=" text-slate-300">{item.createdAt}</p>
                <h3 className="text-2xl font-bold text-slate-50 "> {item.title} </h3>
                <p className="text-slate-500 font-medium " > {item.subtitle} </p>
                <p className="w-full flex gap-0 mt-0">
  {item.hashtag.map((tag, index) => (
    <Tag key={index} text={`#${tag}`} color={"text-green-900"} bgColor={"bg-green-400"} />
  ))}
</p>

              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Blogs
