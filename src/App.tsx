/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Plus, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Switch = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
        enabled ? 'bg-blue-500' : 'bg-gray-200'
      }`}
    >
      <motion.span
        animate={{ x: enabled ? 22 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="inline-block h-5 w-5 transform rounded-full bg-white shadow-sm"
      />
    </button>
  );
};

export default function App() {
  const [content, setContent] = useState('');
  const [hasSubtitles, setHasSubtitles] = useState(false);
  const [hasDeclaration, setHasDeclaration] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-0 sm:py-8">
      <div className="w-full max-w-[420px] bg-white sm:rounded-3xl shadow-xl overflow-hidden flex flex-col h-[100vh] sm:h-[844px] relative">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-10">
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-800" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">动态</h1>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-1.5 rounded-full font-medium transition-all ${
              content.length > 0
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            发布
          </motion.button>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-4 pb-20">
          <textarea
            className="w-full h-40 mt-4 text-gray-800 placeholder-gray-400 focus:outline-none resize-none text-[17px] leading-relaxed"
            placeholder="1. 用你的母语和学习语言发多语言动态，自我成长的同时也可以帮助其他语伴。&#10;&#10;2. 配上图片或语音，你的动态会更受欢迎。&#10;&#10;3. 加入多个话题，让全球更多语伴看到你。"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          {/* Media Section */}
          <div className="flex flex-wrap gap-2 mt-6">
            <div className="relative group">
              <img
                src="https://picsum.photos/seed/coffee/300/300"
                alt="Post media"
                className="w-32 h-32 object-cover rounded-xl shadow-sm"
                referrerPolicy="no-referrer"
              />
              <button className="absolute -top-1.5 -right-1.5 bg-black/60 text-white p-1 rounded-full backdrop-blur-sm">
                <X className="w-3 h-3" />
              </button>
            </div>
            
            <button className="w-32 h-32 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors group">
              <Plus className="w-8 h-8 text-gray-300 group-hover:text-gray-400 transition-colors" />
            </button>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-indigo-50/50 text-indigo-600 rounded-full text-sm font-medium border border-indigo-100 flex items-center gap-1">
              <span className="text-lg opacity-60">#</span> 吃饭了
            </span>
          </div>
        </div>

        {/* Bottom Options */}
        <div className="bg-white border-t border-gray-100 px-4 py-2 mt-auto">
          {/* Autonomy Declaration Row */}
          <button 
            onClick={() => setHasDeclaration(!hasDeclaration)}
            className="w-full flex items-center justify-between py-4 group"
          >
            <span className="text-[16px] text-gray-800 font-medium tracking-tight">添加自主声明</span>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
          
          <div className="h-[1px] bg-gray-50 w-full" />

          {/* Video Subtitles Row - NEW FEATURE */}
          <div className="flex items-center justify-between py-4">
            <span className="text-[16px] text-gray-800 font-medium tracking-tight">视频字幕</span>
            <Switch 
              enabled={hasSubtitles} 
              onChange={() => setHasSubtitles(!hasSubtitles)} 
            />
          </div>
        </div>

        {/* Bottom Tab Indicator (iOS Style) */}
        <div className="flex justify-center pb-2 pt-4 bg-white">
          <div className="w-32 h-1 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}
