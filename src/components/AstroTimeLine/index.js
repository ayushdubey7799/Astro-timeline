import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { motion } from 'framer-motion';

import "./style.css";
import { PredictionContent } from './PredictionContent';

const predictions = [
    {
        "id": "1",
        "title": "Delhi CM Kapil Mishra",
        "description": "As per Kapil Mishra's chart, it is clear that he will become CM of Delhi, he will work on the ground level and keep his word",
        "date": "28-Aug-22"
    },
    {
        "id": "2",
        "title": "Attack on State Leader",
        "description": "As per planets, a leader who is ruling a state and who I could not identify by prashna chakra, the enemy of his is planning a brutal attack on him with foreign powers. Till Diwali, this period is not right.",
        "date": "27-Aug-22"
    },
    {
        "id": "3",
        "title": "2024 India General Election",
        "description": "Opposition and many people think Narendra Modi will be electorally defeated in 2024. I am telling this from his birth chart that there is Raj Yog till his last breath and he will step down only as per his will. Any alliance, however large, will not be able to defeat him.",
        "date": "24-Aug-22"
    },
    {
        "id": "4",
        "title": "Pakistan to be Taken over by India",
        "description": "Pakistan will make its first nuclear use towards Delhi which will be neutralized mid-air. After it, India will not give any chance to Pak and will destroy Pakistan by nuclear use. Pakistan will surrender and accept the dominance of India.",
        "date": "26-Aug-22"
    },
    {
        "id": "5",
        "title": "POK will be taken by India",
        "description": "In 2030 PoK will be taken over by India",
        "date": "Dec-18"
    },
    {
        "id": "6",
        "title": "India will be Hindu nation",
        "description": "Those dreaming of Gazwa -e- hind must know that stars favor India and in 2029 it will become a Hindu Rastra! Under no condition, India will change!",
        "date": "18-Aug-22"
    },
    {
        "id": "7",
        "title": "India Energy",
        "description": "After analyzing India's chart and prashna chakra, I have found that India will find oil reserves in India itself after 7 years, making India energy sufficient.",
        "date": "29-Aug-22"
    },
    {
        "id": "8",
        "title": "Civilization on another Planet",
        "description": "From Satyuga to now, we are about to reach a place in the galaxy where we will find a living civilization from another planet, this will be wonderful! However, we will lose Rahu and Ketu who will deviate from their path.",
        "date": "28-Aug-22"
    },
    {
        "id": "9",
        "title": "UN Dissolution",
        "description": "India by the end of 2026 with its allies will be included in the decision-making and will form a union after the third world war (2038-39) after which organizations like UNO will be dissolved. And India will have a grip over countries as it will be a permanent member of the new organization.",
        "date": "28-Aug-22"
    },
    {
        "id": "10",
        "title": "Pakistan & Taliban War",
        "description": "In 2 years and 11 months, a war will start between Pakistan and Taliban in which China will provide help to Pakistan while Taliban will receive help from India and Russia. Pakistan will eventually be divided into two parts.",
        "date": "29-Aug-22"
    },
    {
        "id": "11",
        "title": "Floods in India",
        "description": "In 2024, 3/4th of India will be affected by floods and will result in severe destruction and loss of life. People are advised to take precautions in these areas.",
        "date": "29-Aug-22"
    },
    {
        "id": "12",
        "title": "Jammu & Kashmir Separation",
        "description": "In 2023, Jammu & Kashmir will be declared a separate nation from India, and there will be a celebration of freedom in the valley.",
        "date": "30-Aug-22"
    }
    ,
    {
        "id": "13",
        "title": "Space Tourism",
        "description": "By 2025, space tourism will become a reality, allowing ordinary people to travel to space and experience the wonders of the universe.",
        "date": "1-Sep-22"
    },
    {
        "id": "14",
        "title": "Artificial Intelligence Advancements",
        "description": "In the next decade, artificial intelligence will advance rapidly, leading to significant breakthroughs in various fields such as healthcare, transportation, and automation.",
        "date": "2-Sep-22"
    },
    {
        "id": "15",
        "title": "Climate Change Mitigation Efforts",
        "description": "Countries worldwide will intensify their efforts to mitigate the effects of climate change, implementing sustainable practices and adopting renewable energy sources.",
        "date": "3-Sep-22"
    },
    {
        "id": "16",
        "title": "Technological Singularity",
        "description": "Experts predict that by 2040, technological singularity will occur, where artificial intelligence surpasses human intelligence, leading to rapid advancements and potential societal transformations.",
        "date": "4-Sep-22"
    },
    {
        "id": "17",
        "title": "Medical Breakthroughs",
        "description": "In the coming years, there will be significant breakthroughs in medical research, leading to improved treatments, cures for diseases, and increased life expectancy.",
        "date": "5-Sep-22"
    },
    {
        "id": "18",
        "title": "Renewable Energy Dominance",
        "description": "Renewable energy sources such as solar, wind, and hydro power will dominate the global energy landscape, reducing reliance on fossil fuels and combating climate change.",
        "date": "6-Sep-22"
    },
    {
        "id": "19",
        "title": "Genetic Engineering Advancements",
        "description": "Advancements in genetic engineering will revolutionize healthcare, agriculture, and other industries, offering potential solutions to genetic diseases and enhancing crop yields.",
        "date": "7-Sep-22"
    },
    {
        "id": "20",
        "title": "Rise of Electric Vehicles",
        "description": "In the coming years, there will be a significant rise in electric vehicles, leading to a shift away from traditional fossil fuel-powered cars and reducing carbon emissions.",
        "date": "8-Sep-22"
    },
    {
        "id": "21",
        "title": "Exploration of Mars",
        "description": "Humanity's exploration of Mars will continue, with plans for manned missions and establishing research colonies on the red planet in the next few decades.",
        "date": "9-Sep-22"
    },
    {
        "id": "22",
        "title": "Advances in Virtual Reality",
        "description": "Virtual reality technology will advance rapidly, transforming various industries such as gaming, entertainment, education, and training.",
        "date": "10-Sep-22"
    },
    {
        "id": "23",
        "title": "Cybersecurity Importance",
        "description": "With the increasing reliance on technology, cybersecurity will become even more critical, with greater emphasis on protecting data and preventing cyber threats.",
        "date": "11-Sep-22"
    }
    ,
    {
        "id": "24",
        "title": "Advancements in Quantum Computing",
        "description": "Quantum computing will make significant advancements, revolutionizing fields such as cryptography, optimization, and scientific simulations.",
        "date": "12-Sep-22"
    },
    {
        "id": "25",
        "title": "Smart Cities and Internet of Things",
        "description": "Cities around the world will adopt smart technologies and IoT devices to improve efficiency, sustainability, and quality of life for residents.",
        "date": "13-Sep-22"
    },
    {
        "id": "26",
        "title": "Renewable Energy Storage Breakthroughs",
        "description": "Breakthroughs in energy storage technologies, such as advanced batteries and hydrogen storage, will enhance the reliability and scalability of renewable energy sources.",
        "date": "14-Sep-22"
    },
    {
        "id": "27",
        "title": "Eradication of Infectious Diseases",
        "description": "Global efforts and advancements in healthcare will lead to the eradication of several infectious diseases, improving overall public health worldwide.",
        "date": "15-Sep-22"
    },
    {
        "id": "28",
        "title": "Augmented Reality Revolution",
        "description": "Augmented reality technology will revolutionize industries such as retail, gaming, healthcare, and education, creating immersive and interactive experiences.",
        "date": "16-Sep-22"
    },
    {
        "id": "29",
        "title": "Automation and Job Displacement",
        "description": "Automation and advancements in artificial intelligence will lead to job displacement in certain industries, necessitating the need for upskilling and new job opportunities.",
        "date": "17-Sep-22"
    },
    {
        "id": "30",
        "title": "Biotechnology Breakthroughs",
        "description": "Breakthroughs in biotechnology will revolutionize medicine, agriculture, and environmental conservation, offering innovative solutions to complex challenges.",
        "date": "18-Sep-22"
    },
    {
        "id": "31",
        "title": "Advances in 3D Printing",
        "description": "3D printing technology will advance, enabling the printing of complex objects with a wide range of materials, transforming manufacturing and customization.",
        "date": "19-Sep-22"
    },
    {
        "id": "32",
        "title": "Space Colonization Efforts",
        "description": "Humanity will intensify efforts for space colonization, with plans for establishing permanent settlements on the Moon, Mars, and potentially other celestial bodies.",
        "date": "20-Sep-22"
    },
    {
        "id": "33",
        "title": "Advancements in Robotics",
        "description": "Advancements in robotics will lead to the development of versatile and autonomous robots, transforming industries such as healthcare, manufacturing, and exploration.",
        "date": "21-Sep-22"
    },
    {
        "id": "34",
        "title": "Expansion of Renewable Energy Grids",
        "description": "Renewable energy grids will expand globally, enabling the seamless integration and distribution of clean energy from diverse sources.",
        "date": "22-Sep-22"
    },
    {
        "id": "35",
        "title": "Revolution in Transportation",
        "description": "The transportation industry will undergo a revolution with the rise of autonomous vehicles, high-speed trains, and hyperloop technology, improving efficiency and reducing congestion.",
        "date": "23-Sep-22"
    },
    {
        "id": "36",
        "title": "Advances in Nanotechnology",
        "description": "Nanotechnology will make significant advances, enabling precise manipulation of matter at the atomic and molecular scale, leading to breakthroughs in medicine, electronics, and materials science.",
        "date": "24-Sep-22"
    },
    {
        "id": "37",
        "title": "Cybersecurity Innovations",
        "description": "Innovations in cybersecurity will emerge, including advanced encryption methods, threat detection systems, and secure communication protocols to combat evolving cyber threats.",
        "date": "25-Sep-22"
    },
    {
        "id": "38",
        "title": "Future of Work",
        "description": "The future of work will be shaped by remote work, flexible schedules, and the gig economy, offering new opportunities for individuals and transforming traditional work structures.",
        "date": "26-Sep-22"
    },
    {
        "id": "39",
        "title": "Advancements in Brain-Machine Interfaces",
        "description": "Brain-machine interfaces will advance, allowing direct communication between the human brain and external devices, enhancing prosthetics, and enabling new forms of interaction.",
        "date": "27-Sep-22"
    },
    {
        "id": "40",
        "title": "Emerging Technologies in Education",
        "description": "Emerging technologies such as adaptive learning, virtual classrooms, and personalized education platforms will revolutionize the way we learn and acquire knowledge.",
        "date": "28-Sep-22"
    },
    {
        "id": "41",
        "title": "Advances in Quantum Cryptography",
        "description": "Quantum cryptography will advance, providing ultra-secure methods for data encryption and communication, safeguarding sensitive information from potential threats.",
        "date": "29-Sep-22"
    },
    {
        "id": "42",
        "title": "Renewable Energy Policy Reforms",
        "description": "Governments worldwide will implement policy reforms to support renewable energy adoption, including incentives, carbon pricing, and regulations to accelerate the transition to a sustainable energy future.",
        "date": "30-Sep-22"
    },
    {
        "id": "43",
        "title": "Advancements in Virtual Assistants",
        "description": "Virtual assistants powered by artificial intelligence will become increasingly advanced, offering personalized and context-aware assistance in various aspects of our daily lives.",
        "date": "1-Oct-22"
    },
    {
        "id": "44",
        "title": "Genomics and Personalized Medicine",
        "description": "Genomic research and personalized medicine will advance, enabling tailored treatments based on an individual's genetic makeup and improving overall healthcare outcomes.",
        "date": "2-Oct-22"
    }
    ,
    {
        "id": "45",
        "title": "Advancements in Material Science",
        "description": "Material science will make significant advancements, leading to the development of new materials with enhanced properties and applications in various industries.",
        "date": "3-Oct-22"
    },
    {
        "id": "46",
        "title": "Ethical Considerations in Artificial Intelligence",
        "description": "As artificial intelligence continues to advance, there will be increased focus on addressing ethical concerns related to bias, privacy, and autonomous decision-making systems.",
        "date": "4-Oct-22"
    },
    {
        "id": "47",
        "title": "Data Privacy and Protection",
        "description": "With the proliferation of data, there will be a greater emphasis on data privacy and protection, including the implementation of stricter regulations and advanced encryption methods.",
        "date": "5-Oct-22"
    },
    {
        "id": "48",
        "title": "Advances in Agricultural Technology",
        "description": "Agricultural technology will continue to advance, leveraging automation, precision farming, and data analytics to improve crop yields, reduce environmental impact, and ensure food security.",
        "date": "6-Oct-22"
    },
    {
        "id": "49",
        "title": "Emergence of Decentralized Finance",
        "description": "Decentralized finance (DeFi) will gain prominence, offering innovative financial services and products built on blockchain technology, enabling greater financial inclusion and control.",
        "date": "7-Oct-22"
    },
    {
        "id": "50",
        "title": "Advancements in Quantum Sensors",
        "description": "Quantum sensors will advance, providing highly sensitive and precise measurement capabilities for various applications, including navigation, imaging, and environmental monitoring.",
        "date": "8-Oct-22"
    },
    {
        "id": "51",
        "title": "Cyber-Physical Systems and Industry 4.0",
        "description": "The integration of cyber-physical systems, IoT, and advanced automation will lead to the fourth industrial revolution (Industry 4.0), transforming manufacturing, logistics, and supply chains.",
        "date": "9-Oct-22"
    },
    {
        "id": "52",
        "title": "Advances in Natural Language Processing",
        "description": "Natural language processing (NLP) will make significant advances, enabling computers to understand, interpret, and generate human language, improving communication and information processing.",
        "date": "10-Oct-22"
    },
    {
        "id": "53",
        "title": "Future of Space Exploration",
        "description": "Space exploration will continue to expand, with missions to distant planets, asteroid mining, and the search for extraterrestrial life, pushing the boundaries of human knowledge and capabilities.",
        "date": "11-Oct-22"
    },
    {
        "id": "54",
        "title": "Advancements in Virtual Reality",
        "description": "Virtual reality (VR) technology will advance, offering immersive and realistic experiences in gaming, entertainment, training, and therapy, blurring the boundaries between the physical and virtual worlds.",
        "date": "12-Oct-22"
    },
    {
        "id": "55",
        "title": "Innovations in Healthcare Delivery",
        "description": "Innovations in healthcare delivery, such as telemedicine, remote patient monitoring, and AI-powered diagnostics, will improve access to healthcare services and enhance patient outcomes.",
        "date": "13-Oct-22"
    }
]



    ;



export default function AstroTimeLine() {



    let effect = true;


    const timelineItemStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const timelineConnectorStyle = {
        position: 'absolute',
        top: 'calc(50% + 8px)', // Adjust this value if needed
        left: '48.7vw', // Adjust this value if needed
        height: 'calc(100% - 16px)', // Adjust this value if needed
        zIndex: -1,
    };

    return (
        <div className='container'>
            <Timeline position="alternate" >
                {
                    predictions.map((prediction, i) => {
                        effect = !effect;
                        return (

                            <TimelineItem style={timelineItemStyle} key={i}>
                                <TimelineOppositeContent color="text.secondary">
                                    June-2022
                                </TimelineOppositeContent>
                                <TimelineSeparator >
                                    <TimelineDot color="primary"/>
                                    <TimelineConnector color="primary" style={timelineConnectorStyle} />
                                </TimelineSeparator>
                                {/* <TimelineContent
                                    sx={{ m: 'auto 0' }}
                                    component={motion.div}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={effect ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <PredictionContent prediction={prediction} />
                                </TimelineContent> */}
                            </TimelineItem>

                        )
                    })
                }


            </Timeline>
        </div>
    );
}




