type Props = {
  kicker?: string;
  title: string;
};

const SectionTitle = ({ kicker, title }: Props) => (
  <header>
    {kicker && <p data-reveal="title" className="text-sm uppercase tracking-[0.3em] text-accent">{kicker}</p>}
    <h2 data-reveal="title" className="mt-3 text-3xl font-display font-semibold sm:text-4xl">
      {title}
    </h2>
  </header>
);

export default SectionTitle;

