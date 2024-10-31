import Link from "next/link";

const LearnLink = () => {
  const id = 2;
  return (
    <>
      <Link href="/admin/dashboard/">Go To Admin Dashboard</Link>
      <Link href={`/user/profile/${id}`}>Go To user profile</Link>
    </>
  );
};
export default LearnLink;
