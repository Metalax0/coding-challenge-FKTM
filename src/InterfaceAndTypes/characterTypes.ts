export interface CharacterStateType {
    records: [CharacterRecordType];
}

export interface CharacterRecordType {
    comics: any;
    description: string;
    events: any;
    id: number;
    modified: string;
    name: string;
    resourceURI: string;
    series: any;
    stories: any;
    thumbnail: any;
    urls: any;
}
