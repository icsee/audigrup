// API Backend
export const baseUrl = 'https://api-audigrup.audigrup.com.co/audigrup/public/';
//export const DOMAIN='http://localhost:8000/';

export const API ={
    TOKEN:baseUrl+'token/',
    CONTACTS:baseUrl+'contacts/',
    BOLLETINS:baseUrl+'bolletins/',
    REAL_SECTOR:baseUrl+'real-sectors/',
    SOLIDARITY_SECTOR:baseUrl+'solidarity-sectors/',
}

//FILE
export const FILE={
    TYPE_IMAGE:'jpg',
    TYPE_PDF:'pdf',
    BASE_64:';base64,',
    BASE_64_IMAGE:'data:image/',
    BASE_64_PDF:'data:pdf/',
    NAME_FILE_DOWNLOAD_PDF:'.pdf',
    NAME_FILE_DOWNLOAD_IMAGE:'.jpg'
} 
