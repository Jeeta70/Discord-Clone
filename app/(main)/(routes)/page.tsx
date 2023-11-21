import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const state = true;
  return (
    <div>
      This is a protected route
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
