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

    imageCauses:[
        {
            image: 'avada-charity-fair-trade-featured-400x300',   
        },
        {
            image: 'avada-charity-shelter-featured-400x300',
        },
        {
            image: 'avada-charity-farming-featured-400x300',
        },
        {
            image: 'avada-charity-vaccines-featured-400x300'
        },
    ], 

    articleLatest:[
        {
            image:'photo-1444664597500-035db93e2323-177x142',
            title:'Understanding community complexities',
            article:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo ducimus vitae eos perspiciatis?'
            
        },
        {
            image:'photo-1447430617419-95715602278e-177x142',
            title:'Understanding community complexities',
            article:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo ducimus vitae eos perspiciatis?'
        },
        {
            image:'photo-1460230525622-630fe3294cd7-177x142',
            title:'Understanding community complexities',
            article:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo ducimus vitae eos perspiciatis?'
        },
        {
            image:'photo-1460600421604-5e138c208b9c-177x142',
            title:'Understanding community complexities',
            article:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo ducimus vitae eos perspiciatis?'
        },

    ]
})