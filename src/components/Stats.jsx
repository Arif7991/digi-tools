export default function Stats() {
  return (
    <div className="bg-purple-700 py-10 text-white">
      <div className="max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <h2 className="text-3xl font-bold">50K+</h2>
          <p className="opacity-90">Active Users</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">200+</h2>
          <p className="opacity-90">Premium Tools</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">4.9</h2>
          <p className="opacity-90">User Rating</p>
        </div>
      </div>
    </div>
  );
}