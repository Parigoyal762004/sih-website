export default function Button({ children, href, type = 'button', variant = 'primary' }) {
    const baseStyle = 'px-4 py-2 font-bold rounded';
    const variants = {
      primary: 'bg-blue-500 text-white hover:bg-blue-700',
      secondary: 'bg-gray-500 text-white hover:bg-gray-700',
      danger: 'bg-red-500 text-white hover:bg-red-700',
    };
  
    return (
      <a href={href} className={`${baseStyle} ${variants[variant]}`} role="button">
        {children}
      </a>
    );
  }
  