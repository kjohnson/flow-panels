import UserPanel from "../components/Panels/User"
import DocumentPanel from "../components/Panels/Document"
import IssuePanel from "../components/Panels/Issue"

const resources = [
    {
        id: 'document',
        title: 'Document',
        component: DocumentPanel
    },
    {
        id: 'user',
        title: 'User',
        component: UserPanel
    },
    {
        id: 'issue',
        title: 'Issue',
        component: IssuePanel
    }
]

export default resources;