function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-text/5 px-3 py-1.5 text-xs font-medium text-secondary transition duration-200 hover:border-text/20 hover:text-text ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
