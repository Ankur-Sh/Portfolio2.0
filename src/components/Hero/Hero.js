import React from "react";

import {
    Section,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hi There, <br />
                I'm Ankur Sharma
            </SectionTitle>
            <SectionText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo velit ex quaerat. Obcaecati quod vero eligendi alias
                eaque accusantium delectus voluptatibus aperiam officiis magni.
                Debitis, vitae. Quae quibusdam adipisci, soluta odit optio dicta
                illo voluptas laudantium vero, necessitatibus qui ad molestias,
                natus laborum nesciunt debitis sed.
            </SectionText>
            <Button onclick={() => (window.location = "https://google.com")}>
                Learn More
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
