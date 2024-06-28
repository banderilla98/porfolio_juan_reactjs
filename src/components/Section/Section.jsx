export default function Section({ title, id, children, className }) {
  return (
    <section id={id} className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
