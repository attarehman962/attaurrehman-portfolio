function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-28 py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="section-shell">
        {(eyebrow || title || description) && (
          <div className="mb-8 space-y-4 sm:mb-10 lg:mb-12">
            {eyebrow ? <p className="section-heading">{eyebrow}</p> : null}
            {title ? <h2 className="section-title">{title}</h2> : null}
            {description ? <p className="section-copy">{description}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
