function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  download = false
}) {
  const variants = {
    primary:
      'bg-text text-background hover:bg-secondary hover:text-background border-text',
    secondary:
      'bg-transparent text-text hover:bg-text/5 border-border',
    ghost:
      'bg-transparent text-secondary hover:bg-text/5 hover:text-text border-transparent'
  };

  const sharedClassName = `inline-flex w-full items-center justify-center rounded-full border px-5 py-3 text-sm font-medium transition duration-200 sm:w-auto ${variants[variant]} ${className}`;

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
