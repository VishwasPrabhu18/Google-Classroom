import React, { useState } from 'react';
import { Profile } from '../../assets/index';
import TextEditor from './TextEditor';

const AnnouncementCard = () => {

  const [commentOpen, setCommentOpen] = useState(false);

  const [content, setContent] = useState('');
  const [isBulletPointMode, setIsBulletPointMode] = useState(false);
  const [isBoldMode, setIsBoldMode] = useState(false);
  const [isItalicMode, setIsItalicMode] = useState(false);
  const [isUnderlineMode, setIsUnderlineMode] = useState(false);

  const [textFormat, setTextFormat] = useState("");

  const applyFormat = (command) => {
    document.execCommand(command, false, null);
  };

  const handleBulletPoints = () => {
    setIsBulletPointMode(!isBulletPointMode);
  };

  const handleBold = () => {
    setTextFormat('bold');
    setIsBoldMode(!isBoldMode);
  };

  const handleItalic = () => {
    setTextFormat('italic');
    setIsItalicMode(!isItalicMode);
  };

  const handleUnderline = () => {
    setTextFormat('underline');
    setIsUnderlineMode(!isUnderlineMode);
  };

  const handleTextFormat = (command) => {
    applyFormat(command);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const lines = value.split('\n');
    const newLines = lines.map((line, index) => {
      if (index > 0 && isBulletPointMode && !line.startsWith('• ')) {
        return `• ${line}`;
      } else {
        handleTextFormat(textFormat);
      }
      return line;
    });
    setContent(newLines.join('\n'));
  };

  const clearFormatting = () => {
    setContent('');
    setIsBulletPointMode(false);
  };


  return (
    <div onClick={() => setCommentOpen(true)} className='flex shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md bg-white px-4 py-3 hover:cursor-pointer'>
      <div className={`${commentOpen ? "hidden" : ""} flex justify-center items-center gap-2`}>
        <img src={Profile} alt="Profile" className='w-10 h-10 rounded-full mx-2' />
        <span className='text-sm hover:text-blue-400'>Announce something to your class</span>
      </div>

      <div className={`${commentOpen ? "" : "hidden"} flex flex-col gap-2 w-full p-2`}>
        {/* <textarea rows={5} className='w-full rounded-md bg-gray-100 p-2' placeholder='Announce something to your class' />
        <button className='bg-blue-600 text-white rounded-md px-4 py-1'>Post</button> */}
        {/* <div className="max-w-lg mx-auto mt-10">
          <div className="border rounded-t-lg p-2">
            <textarea
              value={content}
              onChange={handleChange}
              className="w-full h-60 p-2 border rounded-t-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your text here..."
            />
          </div>
          <div className="flex justify-between bg-gray-100 p-2 rounded-b-lg border-t">
            <button
              className={`px-2 py-1 rounded ${isBoldMode ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={handleBold}
            >
              <strong>B</strong>
            </button>
            <button
              className={`px-2 py-1 rounded ${isItalicMode ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={handleItalic}
            >
              <em>I</em>
            </button>
            <button
              className={`px-2 py-1 rounded ${isUnderlineMode ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={handleUnderline}
            >
              <u>U</u>
            </button>
            <button
              className={`px-2 py-1 rounded ${isBulletPointMode ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={handleBulletPoints}
            >
              &bull;
            </button>
            <button
              className="px-2 py-1 hover:bg-gray-200 rounded"
              onClick={clearFormatting}
            >
              Clear
            </button>
          </div>
        </div> */}

        <TextEditor />
      </div>
    </div>
  )
}

export default AnnouncementCard