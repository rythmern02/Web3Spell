import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="my-24 flex justify-center items-center relative z-20">
      <SignIn />
    </div>
  );
}

