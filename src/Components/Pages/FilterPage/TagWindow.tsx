import React from 'react';
import { CATEGORIES_COLOR_MAP } from '../../../utils/variables'

interface TagWindowProps {
  tags: Record<string, string[]>;
  removeTag: (tag: string) => void;
}

const TagWindow: React.FC<TagWindowProps> = ({ tags, removeTag }) => {

  return (
    <div>
      {/* Flex Window */}
      <div className="flex flex-col w-full min-h-[150px] rounded-md p-5 bg-yellow-100 shadow-lg overflow-y-auto">
        {Object.entries(tags).map(([category, tagList]) =>
          tagList.map((tag) => (
            <div key={`${category}-${tag}`} className="p-1">
              <button
                onClick={() => removeTag(tag)}
                className="w-full px-3 py-1 rounded hover:bg-red-500 hover:text-white transition text-white"
                style={{ backgroundColor: CATEGORIES_COLOR_MAP[category as keyof typeof CATEGORIES_COLOR_MAP] }}
              >
                {tag}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TagWindow;