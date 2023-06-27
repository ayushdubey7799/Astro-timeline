import React, { useState } from 'react';
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
      "title": "Delhi CM Kapil Mishra",
      "description": "As per Kapil Mishra's chart, it is clear that he will become CM of Dehli, he will work on ground level and keep his word",
      "date": "28-Aug-22",
      "predicted_date": "2025"
    },
    {
      "title": "Attack on State Leader",
      "description": "As per planets, a leader who is ruling a state and who I could not identify by prashna chakra, the enemy of his is planning a brutal attack on him with foreign powers. Till Diwali, this period is not right.",
      "date": "27-Aug-22",
      "predicted_date": "24-Oct-22"
    },
    {
      "title": "2024 India General Election",
      "description": "Opposition and many people think Narendra Modi will be electorally defeated in 2024. I am telling this from his birth chart that there is Raj Yog till his last breath and he will step down only as per his will. Any alliance, however large, will not be able to defeat him.",
      "date": "24-Aug-22",
      "predicted_date": "20-May-24"
    },
    {
      "title": "Pakistan to be Taken over by India",
      "description": "Pakistan will make its first nuclear use towards Delhi, which will be neutralized mid-air. After it, India will not give any chance to Pak and will destroy Pakistan by nuclear use. Pakistan will surrender and accept the dominance of India.",
      "date": "26-Aug-22",
      "predicted_date": "2038-39"
    },
    {
      "title": "POK will be taken by India",
      "description": "In 2030, PoK will be taken over by India.",
      "date": "Dec-18",
      "predicted_date": "Sep-30"
    },
    {
      "title": "India will be Hindu nation",
      "description": "Those dreaming of Gazwa -e- hind must know that stars favor India and in 2029 it will become a Hindu Rastra! Under no condition, India will change!",
      "date": "18-Aug-22",
      "predicted_date": "2029"
    },
    {
      "title": "India Energy",
      "description": "After analyzing India's chart and prashna chakra, I have found that India will find oil reserves in India itself after 7 years, making India energy sufficient.",
      "date": "29-Aug-22",
      "predicted_date": "2029"
    },
    {
      "title": "Civilization on another Planet",
      "description": "From Satyuga to now, we are about to reach a place in the galaxy where we will find a living civilization from another planet. This will be wonderful! However, we will lose Rahu and Ketu who will deviate from their path.",
      "date": "28-Aug-22",
    //   "predicted_date": "NA9"
    },
    {
      "title": "UN Dissolution",
      "description": "India, by the end of 2026, with its allies, will be included in the decision-making and will form a union after the third world war (2038-39) after which organizations like UNO will be dissolved. And India will have a grip over countries as it will be a permanent member of the new organization.",
      "date": "28-Aug-22",
      "predicted_date": "2026"
    }
  ];

// const predictions = [
//     {
//         "id": "1",
//         "title": "Delhi CM Kapil Mishra",
//         "description": "As per Kapil Mishra's chart, it is clear that he will become CM of Delhi, he will work on the ground level and keep his word",
//         "date": "28-Aug-22"
//     },
//     {
//         "id": "2",
//         "title": "Attack on State Leader",
//         "description": "As per planets, a leader who is ruling a state and who I could not identify by prashna chakra, the enemy of his is planning a brutal attack on him with foreign powers. Till Diwali, this period is not right.",
//         "date": "27-Aug-22"
//     },
//     {
//         "id": "3",
//         "title": "2024 India General Election",
//         "description": "Opposition and many people think Narendra Modi will be electorally defeated in 2024. I am telling this from his birth chart that there is Raj Yog till his last breath and he will step down only as per his will. Any alliance, however large, will not be able to defeat him.",
//         "date": "24-Aug-22"
//     },
//     {
//         "id": "4",
//         "title": "Pakistan to be Taken over by India",
//         "description": "Pakistan will make its first nuclear use towards Delhi which will be neutralized mid-air. After it, India will not give any chance to Pak and will destroy Pakistan by nuclear use. Pakistan will surrender and accept the dominance of India.",
//         "date": "26-Aug-22"
//     },
//     {
//         "id": "5",
//         "title": "POK will be taken by India",
//         "description": "In 2030 PoK will be taken over by India",
//         "date": "Dec-18"
//     },
//     {
//         "id": "6",
//         "title": "India will be Hindu nation",
//         "description": "Those dreaming of Gazwa -e- hind must know that stars favor India and in 2029 it will become a Hindu Rastra! Under no condition, India will change!",
//         "date": "18-Aug-22"
//     },
//     {
//         "id": "7",
//         "title": "India Energy",
//         "description": "After analyzing India's chart and prashna chakra, I have found that India will find oil reserves in India itself after 7 years, making India energy sufficient.",
//         "date": "29-Aug-22"
//     },
//     {
//         "id": "8",
//         "title": "Civilization on another Planet",
//         "description": "From Satyuga to now, we are about to reach a place in the galaxy where we will find a living civilization from another planet, this will be wonderful! However, we will lose Rahu and Ketu who will deviate from their path.",
//         "date": "28-Aug-22"
//     },
//     {
//         "id": "9",
//         "title": "UN Dissolution",
//         "description": "India by the end of 2026 with its allies will be included in the decision-making and will form a union after the third world war (2038-39) after which organizations like UNO will be dissolved. And India will have a grip over countries as it will be a permanent member of the new organization.",
//         "date": "28-Aug-22"
//     },
//     {
//         "id": "10",
//         "title": "Pakistan & Taliban War",
//         "description": "In 2 years and 11 months, a war will start between Pakistan and Taliban in which China will provide help to Pakistan while Taliban will receive help from India and Russia. Pakistan will eventually be divided into two parts.",
//         "date": "29-Aug-22"
//     },
    
// ]





export default function AstroTimeLine() {

    const [status,setStatus] = useState("warning");

    let effect = true;
    const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    predictions.sort((a,b) => {
        let date1 = a.date;
        let date2 = b.date;
        if(+date1.slice(-2)>+date2.slice(-2)){
            return 1;
        }
        else if(+date1.slice(-2)===+date2.slice(-2)){
            return (month.indexOf(date1.slice(-6,-3)) - month.indexOf(date2.slice(-6,-3)))
        }
        return -1;
    })

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
                                    {prediction.date}
                                </TimelineOppositeContent>
                                <TimelineSeparator >
                                    <TimelineDot color={status}/>
                                    <TimelineConnector color="primary" className='connect'  />
                                </TimelineSeparator>
                                <TimelineContent
                                    sx={{ m: '10 10' }}
                                    component={motion.div}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={effect ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <PredictionContent prediction={prediction} />
                                </TimelineContent>
                            </TimelineItem>

                        )
                    })
                }


            </Timeline>
        </div>
    );
}




