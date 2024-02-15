import jsonData from "../../data/headers.json";

export interface HeaderContent {
  id: number;
  title: string;
  content: string;
}

const getHeaderDataById = (id: number) => {
  const foundItem = jsonData.find((item) => item.id === id);

  return foundItem || null;
};

const HeaderComponent: React.FC<HeaderContent> = ({ id, title, content }) => (
  <div key={id}>
    <h1>{title}</h1>
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
