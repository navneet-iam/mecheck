"use client"

export default function Samp(){
    const data = JSON.parse(localStorage.getItem('sampdata') || '[]');
    return <h1>stats data: {data.map((i)=> i)}</h1>
}