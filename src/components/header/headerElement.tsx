import { getHeaderDataById } from "../../data/headers";

export interface HeaderContent {
  id: number;
  title: string;
  content: string;
}

const HeaderComponent: React.FC<HeaderContent> = ({ id, title, content }) => (
  <div key={id}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const HeaderElement: React.FC<{ headerId: number }> = ({ headerId }) => {
  const headerData = getHeaderDataById(headerId);

  if (!headerData) {
    return <div>No data found for the specified ID</div>;
  }

  const { id, title, content } = headerData;

  return (
    <div>
      <HeaderComponent key={id} id={id} title={title} content={content} />
    </div>
  );
};

export default HeaderElement;
