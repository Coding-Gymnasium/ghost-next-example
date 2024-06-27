const blogStyles = {
  border: "1px solid white",
  padding: "20px",
  margin: "20px",
};
export default function BlogPost({ title, plainText, excerpt = null }) {
  return (
    <div style={blogStyles}>
      <h3>{title}</h3>
      <p>{excerpt ? excerpt : plainText}</p>
    </div>
  );
}
