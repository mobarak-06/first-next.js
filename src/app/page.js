import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Hello World</h1>
      <h2>home</h2>
      <LoginButton />
      <p>from client component</p>
      <UserInfo />
      <p>from server component</p>
      {JSON.stringify(session)}
    </div>
  );
}
