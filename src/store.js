import { reactive } from 'vue'

export const store = reactive ({
    links:[
        {
            link: 'HOME',
            active: false,
        },
        {
            link: 'MISSION',
            active: true,
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