interface PromoElementProps {
  headline: string;
  text: string;
  imageUrl: string;
  altText: string;
}

const PromoElement: React.FC<PromoElementProps> = ({
  headline,
  text,
  imageUrl,
  altText,
}) => {
  return (
    <div>
      <img src={imageUrl} alt={altText} style={{ maxWidth: "25%" }} />
      <h2>{headline}</h2>
      <p>{text}</p>
    </div>
  );
};

export default PromoElement;
