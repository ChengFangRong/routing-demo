import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {absolute: "Blog",} // ignores the main layout and only returns title blog, no description rom layout.tsx
    

};

export default function Blog() {
    return <h1>My Blog</h1>;
} 