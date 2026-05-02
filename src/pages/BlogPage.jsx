import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageCommon.css';
import '../components/Blog.css';

const posts = [
  { id:1, title:'Pellentesque dignissim enim sit amet consectetur Adipiscing elit, sed do', date:'11, July, 2024', comments:'No Comments', image:'https://ordainit.com/wp-theme/edunity/wp-content/uploads/2024/07/blog-1-1.jpg', path:'/blog/post-1', category:'Education', excerpt:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id:2, title:'How to Build a Successful Online Course from Scratch', date:'12, July, 2024', comments:'1 Comment', image:'https://ordainit.com/wp-theme/edunity/wp-content/uploads/2024/07/blog-1-2.jpg', path:'/blog/post-2', category:'Learning', excerpt:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id:3, title:'Top 10 Digital Marketing Strategies for 2024', date:'13, July, 2024', comments:'2 Comments', image:'https://ordainit.com/wp-theme/edunity/wp-content/uploads/2024/07/blog-1-3.jpg', path:'/blog/post-3', category:'Marketing', excerpt:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { id:4, title:'The Future of AI in Education and E-Learning', date:'14, July, 2024', comments:'3 Comments', image:'https://ordainit.com/wp-theme/edunity/wp-content/uploads/2024/07/blog-1-1.jpg', path:'/blog/post-4', category:'Technology', excerpt:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id:5, title:'Why UX Design is Critical for Online Learning Platforms', date:'15, July, 2024', comments:'No Comments', image:'https://ordainit.com/wp-theme/edunity/wp-content/uploads/2024/07/blog-1-2.jpg', path:'/blog/post-5', category:'Design', excerpt:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' },
  { id:6, title:'Complete Guide to Web Development in 2024', date:'16, July, 2024', comments:'5 Comments', image:'https://ordainit.com/wp-theme/edunity/wp-content/uploads/2024/07/blog-1-3.jpg', path:'/blog/post-6', category:'Development', excerpt:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo.' },
];

const blogCategories = ['Education', 'Learning', 'Marketing', 'Technology', 'Design', 'Development'];

const BlogPage = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="page-banner">
        <div className="page-banner-overlay"></div>
        <div className="container">
          <div className="page-banner-content">
            <h1>Our Blog</h1>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span><i className="fas fa-chevron-right"></i></span>
              <span>Blog</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="blog-page-area">
        <div className="container">
          <div className="blog-page-grid">
            {/* Main Posts */}
            <div className="blog-main">
              <div className="blog-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {posts.map(post => (
                  <div key={post.id} className="blog-card">
                    <div className="blog-thumb">
                      <Link to={post.path}>
                        <img src={post.image} alt={post.title} onError={e => { e.target.src = 'https://via.placeholder.com/400x250/3D6CE7/fff?text=Blog'; }} />
                      </Link>
                      <span className="blog-cat">{post.category}</span>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span><i className="fas fa-calendar-days"></i> {post.date}</span>
                        <span><i className="fas fa-comment"></i> {post.comments}</span>
                      </div>
                      <h4 className="blog-title"><Link to={post.path}>{post.title}</Link></h4>
                      <p style={{ fontSize: '13px', color: '#777', marginBottom: '15px', lineHeight: 1.7 }}>{post.excerpt}</p>
                      <Link to={post.path} className="blog-read-more">read more <i className="fas fa-arrow-right"></i></Link>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="pagination-wrap">
                {[1,2,3].map(n => <button key={n} className={`page-btn ${n===1?'active':''}`}>{n}</button>)}
              </div>
            </div>

            {/* Sidebar */}
            <div className="blog-sidebar">
              <div className="sidebar-widget">
                <h4>Search</h4>
                <div className="search-widget">
                  <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search posts..." />
                  <button><i className="fas fa-search"></i></button>
                </div>
              </div>
              <div className="sidebar-widget">
                <h4>Categories</h4>
                <ul className="category-list">
                  {blogCategories.map((cat, i) => (
                    <li key={i}>{cat} <span>{Math.floor(Math.random()*10)+1}</span></li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-widget">
                <h4>Recent Posts</h4>
                {posts.slice(0,3).map(p => (
                  <div key={p.id} style={{ display:'flex', gap:'12px', marginBottom:'15px', paddingBottom:'15px', borderBottom:'1px solid #eee' }}>
                    <img src={p.image} alt="" style={{ width:70, height:55, objectFit:'cover', borderRadius:8 }} onError={e => { e.target.src='https://via.placeholder.com/70x55/3D6CE7/fff?text=Blog'; }} />
                    <div>
                      <Link to={p.path} style={{ fontSize:'13px', fontWeight:600, color:'var(--ed-dark)', display:'block', lineHeight:1.4 }}>{p.title.substring(0,50)}...</Link>
                      <span style={{ fontSize:'12px', color:'#999', marginTop:4, display:'block' }}>{p.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
