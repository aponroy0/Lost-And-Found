


// Stats Component
function Stats({ items }) {
  const lostCount = items.filter(item => item.Status === 'Lost').length;
  const foundCount = items.filter(item => item.Status === 'Found').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div
        style={{ backgroundColor: 'oklch(37.3% 0.034 259.733)' }}
        className="rounded-lg shadow-md p-6 text-center"
      >
        <div className="text-4xl font-bold text-blue-400">{items.length}</div>
        <div className="text-gray-300 mt-2">Total Items</div>
      </div>
      <div
        style={{ backgroundColor: 'oklch(37.3% 0.034 259.733)' }}
        className="rounded-lg shadow-md p-6 text-center"
      >
        <div className="text-4xl font-bold text-red-400">{lostCount}</div>
        <div className="text-gray-300 mt-2">Lost Items</div>
      </div>
      <div
        style={{ backgroundColor: 'oklch(37.3% 0.034 259.733)' }}
        className="rounded-lg shadow-md p-6 text-center"
      >
        <div className="text-4xl font-bold text-green-400">{foundCount}</div>
        <div className="text-gray-300 mt-2">Found Items</div>
      </div>
    </div>
  );
}

export default Stats;