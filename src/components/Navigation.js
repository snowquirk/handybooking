import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/base.scss';

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Post Task',
    path: '/post-task',
  },
  {
    title: 'Categories',
    path: '/categories',
  },
  {
    title: 'Login',
    path: '/login',
  },
];

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <span>Handy Booking</span>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
