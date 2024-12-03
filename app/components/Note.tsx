import { ReactNode } from "react";

interface PostItNoteProps {
  children?: ReactNode;
  color?: string;
  rotation?: string;
  className?: string;
}


const PostItNote: React.FC<PostItNoteProps> = ({
  children,
  color = 'bg-yellow-100',
  rotation = '-rotate-6',
  className = ''
}) => {
  return (
    <div
      className={`
        ${color} 
        ${rotation}
        p-4 
        w-64 
        h-64 
        shadow-lg 
        transform 
        transition-all 
        hover:rotate-0 
        hover:scale-105 
        hover:shadow-xl 
        relative 
        overflow-hidden
        ${className}
      `}
    >
      <div className="font-handwritten text-gray-800 h-full overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default PostItNote;

