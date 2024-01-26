interface HeaderElementProps {
  headline: string;
  copyText: string;
}

const HeaderElement: React.FC<HeaderElementProps> = ({
  headline,
  copyText,
}) => {
  return (
    <header className="header-element">
      <h1>{headline}</h1>
      <p>{copyText}</p>
    </header>
  );
};

export default HeaderElement;
