import React from "react";
import EditorJs from 'react-editor-js'

export default function Document() {
    return (
        <>
            <div className="w-full h-96 p-8 border border-gray-400 rounded">
                <EditorJs data={{
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