export interface Projects {
    docs:          Project[];
    totalDocs:     number;
    limit:         number;
    totalPages:    number;
    page:          number;
    pagingCounter: number;
    hasPrevPage:   boolean;
    hasNextPage:   boolean;
    prevPage:      null;
    nextPage:      null;
}

export interface Project {
    id:          string;
    title:       string;
    slug:        string;
    images:      ImageElement[];
    model:       Model;
    createdAt:   Date;
    updatedAt:   Date;
    description: string;
}

export interface ImageElement {
    image: ImageImage;
    id:    string;
}

export interface ImageImage {
    id:        string;
    alt:       string;
    filename:  string;
    mimeType:  string;
    filesize:  number;
    width:     number;
    height:    number;
    focalX:    number;
    focalY:    number;
    createdAt: Date;
    updatedAt: Date;
    url:       string;
}

export interface Model {
    id:        string;
    alt:       string;
    filename:  string;
    mimeType:  string;
    filesize:  number;
    createdAt: Date;
    updatedAt: Date;
    url:       string;
}
