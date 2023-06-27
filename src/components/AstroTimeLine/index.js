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
import { getData } from './data';

const predictions = getData();



export default function AstroTimeLine() {

    const [status,setStatus] = useState("warning");

    let effect = true;
    const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    predictions.sort((a,b) => {
        let date1 = a?.predicted_date;
        let date2 = b?.predicted_date;
        if(!date1)return 1;
        if(!date2)return -1;
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


    return (
        <div className='container'>
            <Timeline position="alternate" >
                {
                    predictions.map((prediction, i) => {
                        effect = !effect;
                        return (

                            <TimelineItem style={timelineItemStyle} key={i}>
                              {
                                prediction.predicted_date && 
                                <TimelineOppositeContent color="text.secondary">
                                {prediction.predicted_date}
                                </TimelineOppositeContent>
                              }
                                
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




