import {  useState, useEffect } from 'react';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';

const Editor = () => {
    
  const [editor, setEditor] = useState(null);

  useEffect(() => { 
    const grapeEditor =  grapesjs.init({
      container: '#editor',
      plugins: [gjsPresetWebpage],
      pluginsOpts: {
        gjsPresetWebpage: {}
      }
    })
    setEditor(grapeEditor);
    
  }, [])

  return (
    <div className='App'>
      <div id='editor'>
         
      </div>

    </div>
)
}

export default Editor