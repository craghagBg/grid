export default {

    searchType: {video: 'Video', picture:'Picture'},
    video: {
        url: 'https://content.googleapis.com/youtube/v3/search?',
        queryParams: [
            { key: 'key', value : 'AIzaSyCCKLybKJyAthr83ecSAdjEQrlfnG6VMpo'},
            { key: 'maxResults', value : '40'},
            { key: 'part', value : 'snippet'}
        ]
    },
    picture: {
        url: 'https://content.googleapis.com/customsearch/v1?',
        queryParams: [
            { key: 'key', value : 'AIzaSyCCKLybKJyAthr83ecSAdjEQrlfnG6VMpo'},
            { key: 'cx', value: '015877985254590403594:m3qfylt4ozc'},
            { key: 'searchType', value : 'image'}
        ]
    }

}