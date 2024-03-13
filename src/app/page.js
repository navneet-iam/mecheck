import CustomModal from "./modal";

export default function Home() {
  return (
      <div className="z-10 max-w-5xl w-full justify-between font-mono text-sm flex h-screen">
        <p className="">
          Get started by sign in
        </p>
        <p >
            By{" "}
            <CustomModal />
        </p>
      </div>
  );
}
