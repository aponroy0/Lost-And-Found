import { X, Mail } from 'lucide-react';

function ItemModal({ item, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 ">
      <div
        className="rounded-xl shadow-2xl w-[55%] h-45vh overflow-hidden flex flex-col"
        style={{ backgroundColor: 'oklch(27.8% 0.033 256.848)' }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white truncate">{item.Title}</h2>
          <button onClick={onClose} className="text-gray-300 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1" >
          {/* Left Side - Image */}
          <div className="w-1/2 h-full px-2 py-2" >
            <img
              src={item.ImageURL}
              alt={item.ItemName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Details */}
          <div className="w-1/2 p-2 text-gray-200 space-y-3 overflow-y-auto p-8">
            <p><strong>Item Name:</strong> {item.ItemName}</p>
            <p><strong>Location:</strong> {item.LocationName}</p>
            <p><strong>Description:</strong> {item.Description}</p>
            <p>
              <strong>Status:</strong>{' '}
              <span
                className={`px-2 py-1 rounded-sm text-xs font-semibold ${
                  item.Status?.toLowerCase() === 'lost'
                    ? 'bg-red-900 text-red-200'
                    : 'bg-green-900 text-green-200'
                }`}
              >
                {item.Status}
              </span>
            </p>
            <p><strong>Posted At:</strong> {new Date(item.PostedAt).toLocaleString()}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 flex justify-end gap-3">
          {/* Contact Button */}
          <a
            href={`mailto:owner@example.com?subject=Inquiry about ${encodeURIComponent(item.ItemName)}`}
            className="flex items-center gap-2 px-5 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-semibold transition"
          >
            <Mail size={18} />
            Contact
          </a>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-semibold transition"
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
