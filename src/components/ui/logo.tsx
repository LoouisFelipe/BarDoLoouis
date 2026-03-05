import React from 'react';
import { KeyRound } from 'lucide-react';

export const Logo = ({ size = 48, className = "" }) => (
  <div className={className} style={{ width: size, height: size }}>
    <div className="bg-primary p-2 rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center w-full h-full">
      <KeyRound className="text-white" size={size * 0.6} />
    </div>
  </div>
);
