import React from "react";
import EditorJs from 'react-editor-js'
import Header from "@editorjs/header"

export default function Document() {

    const tools = {
        header: Header,
    }

    return (
        <>
            <div className="w-full h-96 p-8 border border-gray-400 rounded">
                <EditorJs tools={tools} data={{
                    blocks: [
                        {
                            type: "paragraph",
                            data: {
                                text: "Doloribus vitae sit eligendi. Magnam eos totam animi optio doloribus. Et impedit pariatur aut voluptatem cumque iste. Dicta fugit labore ipsum ut iusto. Sunt minima blanditiis quia error.",
                            }
                        }
                    ]
                }} />
            </div>
        </>
    )
}