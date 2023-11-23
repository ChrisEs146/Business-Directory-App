export default function LoadingList() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {new Array(8).fill(0).map((_, i) => (
        <div
          key={i}
          className="bg-gray-400 p-4 rounded-lg shadow-md self-stretch h-64 w-64 animate-pulse"
        >
          <div className="bg-gray-200 w-full rounded-lg h-[50%] mb-4"></div>
          <div className="bg-gray-100 w-full rounded-lg h-6 mb-4"></div>
          <div className="bg-gray-100 w-full rounded-lg h-6"></div>
        </div>
      ))}
    </div>
  );
}
