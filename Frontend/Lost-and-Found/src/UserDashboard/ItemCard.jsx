import { Calendar } from 'lucide-react';

function ItemCard({ item, onView }) {
  return (
    <div
      style={{ backgroundColor: 'oklch(21% 0.006 285.885)' }}
      className="rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
    >
      <div className="h-40 w-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
        <img
          src={item.ImageURL}
          alt={item.ItemName}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-white">{item.ItemName}</h3>
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              item.Status?.toLowerCase() === 'lost'
                ? 'bg-red-900 text-red-200'
                : 'bg-green-900 text-green-200'
            }`}
          >
            {item.Status}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Calendar size={14} />
          <span>{item.PostedAt}</span>
        </div>

        <button
          onClick={onView}
          className="w-full mt-3 bg-sky-400/10 hover:bg-sky-400/20 text-white text-sm font-semibold py-2 rounded-lg transition"
        >
          View
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
