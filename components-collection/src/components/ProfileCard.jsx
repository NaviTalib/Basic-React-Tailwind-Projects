import React, { useState } from 'react';

const ProfileCard = ({ 
  name = "Developer Name", 
  role = "Software Engineer", 
  initialLike = 0,
  avatarUrl = "https://media.licdn.com/dms/image/v2/D5603AQF6kmScw4-_eA/profile-displayphoto-scale_100_100/B56aAGCdc6IEAY-/0/1786807705440?e=1788998400&v=beta&t=pXUcZHkRORKXqeMXxkSXDzb_HH4EeXI3J1R8NYV376E"
}) => {
  const [likes, setLikes] = useState(initialLike);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Generate fallback initials for the avatar if no avatarUrl is provided
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300">
      {/* Decorative Background Accent */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 transition-all duration-500 group-hover:scale-150 group-hover:opacity-80" />

      <div className="relative flex flex-col items-center text-center">
        {/* Avatar Section */}
        <div className="relative mb-4">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt={name} 
              className="h-20 w-20 rounded-full object-cover ring-4 ring-purple-50 shadow-md"
            />
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-xl font-bold tracking-wider text-white shadow-md ring-4 ring-purple-50">
              {initials}
            </div>
          )}
          <span className="absolute bottom-0.5 right-0.5 h-4 w-4 rounded-full border-2 border-white bg-emerald-500" title="Online" />
        </div>

        {/* User Info */}
        <h2 className="text-xl font-bold tracking-tight text-slate-800">
          {name}
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-500">
          {role}
        </p>

        {/* Interactive Like Button */}
        <button 
          onClick={handleLike}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-purple-700 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer"
        >
          <span className={`text-base transition-transform duration-300 ${isAnimating ? 'scale-125' : 'scale-100'}`}>
            ❤️
          </span>
          <span>Likes</span>
          <span className="ml-1 rounded-full bg-purple-500/40 px-2.5 py-0.5 text-xs font-bold text-white">
            {likes}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;