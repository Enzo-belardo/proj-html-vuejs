import { reactive } from 'vue'

export const store = reactive ({
    links:[
        {
            link: 'HOME',
            active: true,
        },
        {
            link: 'MISSION',
            active: false,
        },
        {
            link: 'CAUSES',
            active: false,
        },
        {
            link: 'JOURNAL',
            active: false,
        },              
    ],
    
})