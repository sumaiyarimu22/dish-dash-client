interface SectionTitleProps {
  subtitle: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title }) => {
  return (
    <div className="wrapper text-center pb-10">
      <span className="uppercase font-semibold tracking-widest text-accent">
        {subtitle}
      </span>
      <h2 className="text-3xl">{title}</h2>
    </div>
  );
};

export default SectionTitle;
