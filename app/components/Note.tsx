import { CSSProperties, ReactNode } from "react";

interface PostItNoteProps {
  children?: ReactNode;
  color?: string;
  style?: CSSProperties; // Correct type for inline styles
  className?: string;
}

const PostItNote: React.FC<PostItNoteProps> = ({
  children,
  color = 'bg-yellow-100',
  className = '',
  style
}) => {
  return (
    <div
      style={style} // Now correctly typed to accept CSSProperties
      className={`
        ${color} 
        p-4 
        w-64 
        h-64 
        shadow-lg 
        transform 
        transition-all 
        ${className}
        hover:rotate-0 
        hover:scale-105 
        hover:shadow-xl 
        relative 
        overflow-hidden
      `}
    >
      <div className="font-handwritten text-gray-800 h-full overflow-auto">
        {children}
      </div>
    </div>
  );
};
export default PostItNote;

