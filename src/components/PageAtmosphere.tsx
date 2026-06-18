"use client";

export default function PageAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <div className="absolute inset-0 grid-bg opacity-[0.28]" />
      <div className="absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] max-w-[720px] max-h-[720px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.07)_0%,transparent_68%)]" />
      <div className="absolute -bottom-[15%] -right-[8%] w-[50vw] h-[50vw] max-w-[640px] max-h-[640px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.06)_0%,transparent_70%)]" />
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] rounded-full bg-[radial-gradient(ellipse,rgba(59,130,246,0.03)_0%,transparent_72%)]" />
    </div>
  );
}
