function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  download = false
}) {
  const variants = {
    primary:
      'bg-accent text-white hover:bg-text hover:text-background border-accent',
    secondary:
      'bg-surface text-text hover:bg-elevated border-border',
    ghost:
      'bg-transparent text-secondary hover:bg-elevated hover:text-text border-transparent'
  };

  const sharedClassName = `inline-flex w-full items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition duration-200 sm:w-auto ${variants[variant]} ${className}`;

  if (href) {
    const openInNewTab = href.startsWith('http');

    return (
      <a
        href={href}
        className={sharedClassName}
        {...(download ? { download: true } : {})}
        {...(openInNewTab ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={sharedClassName}>
      {children}
    </button>
  );
}

export default Button;
