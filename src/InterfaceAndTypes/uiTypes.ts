export interface uiModalType {
    isOpen: boolean;
    content: string;
    type: string;
}

export interface uiStateType {
    isLoaded: boolean;
    modal: uiModalType;
}
