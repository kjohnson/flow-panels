import React from "react";
import EditorJs from 'react-editor-js'
import Header from "@editorjs/header"

export default function Document() {

    const tools = {
        header: Header,
    }

    const i18n = {
        messages: {
            ui: {
                blockTunes: {
                    toggler: {
                        "Click to tune": "Block Settings",
                    }
                }
            }
        }
    }

    return (
        <>
            <EditorJs tools={tools} i18n={i18n} data={{
                blocks: [
                    {
                        type: "header",
                        data: {
                            text: "My Document",
                            level: 1,
                        }
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "Doloribus vitae sit eligendi. Magnam eos totam animi optio doloribus. Et impedit pariatur aut voluptatem cumque iste. Dicta fugit labore ipsum ut iusto. Sunt minima blanditiis quia error.",
                        }
                    }
                ]
            }} />
        </>
    )
}