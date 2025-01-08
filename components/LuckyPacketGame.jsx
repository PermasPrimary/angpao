import React, { useState, useEffect } from 'react';

const LuckyPacketGame = () => {
  const [packets, setPackets] = useState([]);
  const [remainingPackets, setRemainingPackets] = useState(50);

  useEffect(() => {
    // 初始化50个红包
    const initialPackets = Array(50).fill(null).map((_, index) => ({
      id: index,
      opened: false
    }));
    setPackets(initialPackets);
  }, []);

  const handlePacketClick = (id) => {
    setPackets(packets.map(packet => 
      packet.id === id ? { ...packet, opened: true } : packet
    ));
    setRemainingPackets(prev => prev - 1);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4">新年抽红包</h1>
        <p className="text-lg">还剩 {remainingPackets} 个红包未开启</p>
      </div>

      <div className="grid grid-cols-5 gap-6 p-4">
        {packets.map((packet) => (
          <button
            key={packet.id}
            onClick={() => handlePacketClick(packet.id)}
            className={`h-20 flex items-center justify-center text-xl ${
              packet.opened 
                ? 'bg-gray-200' 
                : 'bg-red-600 hover:bg-red-700'
            }`}
            disabled={packet.opened}
          >
            {packet.opened ? '开' : '学品'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LuckyPacketGame;
