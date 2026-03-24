export default function Card({
  children,
  className = '',
  hover = true,
  ...props
}) {
  const hoverStyles = hover
    ? 'hover:shadow-xl hover:-translate-y-1'
    : '';

  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 transition-all duration-300 ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
