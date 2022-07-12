interface Note {
    id: string,
    content: string
}

export interface CallItem {
    call_type: string,
    created_at: string,
    direction: string,
    duration: string,
    from: string,
    id: string,
    is_archived: boolean,
    notes: [Note]
    to: string,
    via: string,
    createdAt: string
}

