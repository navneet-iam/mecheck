"use client"
import { RecoilRoot, useRecoilValue } from "recoil";
import Samp from "./samp";
import Cchart from "./Chart";

export default function Stats(){

    return <RecoilRoot>
    {/* <Samp /> */}
    <Cchart />
    </RecoilRoot>
}