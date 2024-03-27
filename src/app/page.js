"use client"
import CustomModal from "../../components/modal";
import Tasks from "../../components/tasks";
import { RecoilRoot } from "recoil";
import './custom.css';
import Link from "next/link";
export default function Home() {
  return (
    <RecoilRoot>
    <div className="z-10 w-full font-mono text-sm h-screen">
      <div className="flex cstmaround">
        <p className="">
          Get started by <Link href="/statistics">push-ups</Link>
        </p>
        <p >
            By{" "}
            <CustomModal />
        </p>
      </div>

      <div className="flex cstmcenter">
        <Tasks />
      </div>
    </div>
    </RecoilRoot>
  );
}
