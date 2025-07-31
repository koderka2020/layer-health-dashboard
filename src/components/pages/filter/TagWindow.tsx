
interface TagWindowProps {
  tags: Record<string, string[]>;
  removeTag: (tag: string) => void;
}

const TagWindow: React.FC<TagWindowProps> = ({ tags, removeTag }) => {
  // const removeTag = (index: number) => {
  //   TODO- update Context state for tags (shared with Sidebar)
  // };

  //get only the keys from tags obj, for rendering filter buttons we don't need the category
  const tagsValues = Object.values(tags).flat()

  return (
    <div>
      {/* Flex Window */}
      <div className="flex flex-col w-full min-h-[150px] rounded-md p-5 bg-yellow-100 shadow-lg overflow-y-auto">
        {tagsValues.map((tag) => (
          <div key={tag} className="p-1">
            <button
              onClick={() => removeTag(tag)}
              className="w-full px-3 py-1 bg-blue-500 rounded hover:bg-red-500 hover:text-white transition"
            >
              {tag}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagWindow;