// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Blog.css';

// const blogPosts = [
//   {
//     id: 1,
//     title: 'Pellentesque dignissim enim sit amet consectetur Adipiscing elit, sed do',
//     date: '11, July, 2024',
//     comments: 'No Comments',
//     image: 'https://ordainit.com/wp-theme/edunity/wp-content/uploads/2024/07/blog-1-1.jpg',
//     path: '/blog/post-1',
//     category: 'Education',
//   },
//   {
//     id: 2,
//     title: 'Pellentesque dignissim enim sit amet consectetur Adipiscing elit, sed do',
//     date: '11, July, 2024',
//     comments: '1 Comment',
//     image: 'https://ordainit.com/wp-theme/edunity/wp-content/uploads/2024/07/blog-1-2.jpg',
//     path: '/blog/post-2',
//     category: 'Learning',
//   },
//   {
//     id: 3,
//     title: 'Pellentesque dignissim enim sit amet consectetur Adipiscing elit, sed do',
//     date: '11, July, 2024',
//     comments: '1 Comment',
//     image: 'https://ordainit.com/wp-theme/edunity/wp-content/uploads/2024/07/blog-1-3.jpg',
//     path: '/blog/post-3',
//     category: 'Technology',
//   },
// ];

// const Blog = () => {
//   return (
//     <div className="blog-area">
//       <div className="container">
//         <div className="blog-header">
//           <div>
//             <span className="ed-section-subtitle">BLOG POST</span>
//             <h4 className="ed-section-title">Post Popular Post.</h4>
//           </div>
//           <Link to="/blog" className="ed-btn-theme">
//             All Blog Post <i className="fas fa-arrow-right"></i>
//           </Link>
//         </div>
//         <div className="blog-grid">
//           {blogPosts.map(post => (
//             <div key={post.id} className="blog-card">
//               <div className="blog-thumb">
//                 <Link to={post.path}>
//                   <img src={post.image} alt={post.title} onError={e => { e.target.src = `https://via.placeholder.com/400x250/3D6CE7/fff?text=Blog`; }} />
//                 </Link>
//                 <span className="blog-cat">{post.category}</span>
//               </div>
//               <div className="blog-content">
//                 <div className="blog-meta">
//                   <span><i className="fas fa-calendar-days"></i> {post.date}</span>
//                   <span><i className="fas fa-comment"></i> {post.comments}</span>
//                 </div>
//                 <h4 className="blog-title">
//                   <Link to={post.path}>{post.title}</Link>
//                 </h4>
//                 <Link to={post.path} className="blog-read-more">
//                   read more <i className="fas fa-arrow-right"></i>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;

import React from 'react';
import './Blog.css';

const Blog = () => {
  return null;
};

export default Blog;