// export const blogs = [
//     {
//         titlt:
//     }
// ]

export interface Blogs {
    id: number;
    college: string;
    district: string;
    affiliated_by: string;
    state: string;
    address: string;
    established: number;
    content: string;
    // facilities: [];
    course_offered: {
        conts: string;
        id: number;
    }
    admission: string;
    counselling_process: string;
}

export const postData: Blogs[] =
    [

        {
            id: 1,
            college: "Naiminath Ayurvedic Medical College",
            district: "Etmadpur, Agra – 283202",
            affiliated_by: "It is affiliated with Dr Bhimrao Ambedkar University and authorised by the National Commission for Indian System or Medicine ",
            state: "Uttar Pradesh",
            address: "N.H. 19, Nawalpur, Kuberpur, Behind Maruti TrueValue Showroom, Etmadpur, Agra – 283202, Uttar Pradesh, India.",
            established: 2016,

            content: "Naiminath Ayurvedic Medical College is driven by a profound mission: to enhance the well-being of our local and global communities by setting a benchmark of excellence in patient care. We aim to establish ourselves as the foremost Ayurvedic healthcare institution worldwide. We are committed to nurturing future healthcare professionals and engaging in meaningful clinical research At the heart of our institution is a culture built on trust, integrity, mutual respect, and compassion.We believe in holistic training and guidance, aiming to shape the next generation of doctors into highly skilled professionals in the field of Ayurvedic System of Medicine Our vision is to emerge as an innovative global leader in Ayurvedic Medical education, healthcare, and research.Through rigorous training and a holistic approach, we aspire to equip our students with the highest levels of professional and clinical competence.We are dedicated to transforming youth into competent doctors who will contribute significantly to the advancement of Ayurvedic medicine ",
            course_offered: {
                conts: "Naiminath Ayurvedic Medical College Agra offers a quality medical program under the supervision of highly qualified faculty and state-of-the-art infrastructure",
                id: 1,
            },
            admission: "To secure admission to Naiminath Ayurvedic Medical College in Agra, prospective students must adhere to the college's specific admission protocol. In this section, we offer comprehensive details regarding the undergraduate admission process at Naiminath Ayurvedic Medical College, Agra",

            counselling_process: "After qualifying for the NEET entrance exam, candidates must participate in the Uttar Pradesh Ayush NEET Counseling, conducted by the Uttar Pradesh State Ayush Society, Govt of Uttar Pradesh. The next step is Seat allotment, document verification, and fee payment is the last step to confirm admission"
        },

    ]



