function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-secondary transition duration-200 hover:border-accent/45 hover:text-text ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
