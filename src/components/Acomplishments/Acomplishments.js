import React from "react";

import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
    { number: TECHNICAL LEAD, text: "NSCC ABESEC" },
    { number: 10+, text: "Projects" },
    { number: 10+, text: "Github Followers" },
    { number: 1, text: "Hactoberfest2022" },
];

const Acomplishments = () => (
    <Section>
        <SectionTitle>Personal Achievements</SectionTitle>
        <Boxes>
            {data.map((card, index) => (
                <Box key={index}>
                    <BoxText>{card.text}</BoxText>
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
    </Section>
);

export default Acomplishments;
