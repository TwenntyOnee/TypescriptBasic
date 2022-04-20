

interface ContentProps{
 
    title: string;
    content: string;
    date: string;
  
}

export function Post({ title, content, date }:ContentProps) {
  return (
    <div>
      <h1>Title: {title}</h1>
      <h2>Content: {content}</h2>
       <h3>Date: {date}</h3>
    </div>
  )
}