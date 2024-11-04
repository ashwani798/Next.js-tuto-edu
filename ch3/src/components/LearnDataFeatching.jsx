async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
const LearnDataFeatching = async () => {
  const data = await getData();
  console.log("Data:", data);
  return (
    <>
      {data.map((post, i) => (
        <div key={i}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};
export default LearnDataFeatching;
