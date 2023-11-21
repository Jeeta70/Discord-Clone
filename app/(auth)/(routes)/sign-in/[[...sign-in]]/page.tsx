import { SignIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <SignIn/>
    </div>
  );
}
