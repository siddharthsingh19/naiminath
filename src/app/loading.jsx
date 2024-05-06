 function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-[10000] flex flex-1 items-center justify-center">
      <div className="flex gap-2">
        <div className="w-5 h-5 rounded-full animate-pulse bg-yellow-300"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-yellow-300"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-yellow-300"></div>
      </div>
    </div>
  );
}
 
export default Loading;