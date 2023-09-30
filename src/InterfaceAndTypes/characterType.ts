export interface ItemsDataType {
    available: number;
    collectionURI: string;
    returned: number;
    items:
        | [
              {
                  name: string;
                  resourceURI: string;
              }
          ]
        | [];
}

export interface CharacterRecordType {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        extension: string;
        path: string;
    };
    comics: ItemsDataType | null;
    series: ItemsDataType | null;
}

export interface ProfileRecordType {
    series: [{ title: string }];
    comics: [{ title: string }];
}

export interface CharacterStateType {
    records: CharacterRecordType[];
    profileRecord: ProfileRecordType;
    selectedRecordsIndex: number[];
}
