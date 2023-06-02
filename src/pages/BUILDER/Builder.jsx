import React from 'react'
import { useParams } from 'react-router-dom'
import { Editor } from '../../components'

const Builder = () => {

    const { pageId } = useParams();
    console.log(pageId)
  return (
    <div>
        <Editor />
    </div>
  )
}

export default Builder