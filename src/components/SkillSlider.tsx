import {useState} from "react"
import {Box, Slider, SliderMark, SliderTrack, SliderFilledTrack, Text, SliderThumb} from "@chakra-ui/react"

interface SkillSliderProps {
    handleChange: (name: string, value: string) => void;
}
export default function SkillSlider({handleChange}: SkillSliderProps){
        const [sliderValue, setSliderValue] = useState(0)

        function handleSlide(newSliderValue: number){
            setSliderValue(() => newSliderValue)

            let value = ""
            if(newSliderValue === 1)
                value = "beginner"
            else if(newSliderValue === 2)
                value = "novice"
            else if(newSliderValue === 3)
                value = "intermediate"
            else if(newSliderValue === 4)
                value = "advanced"
            else if(newSliderValue === 5)
                value = "expert"
            else if(newSliderValue === 6)
                value = "professional"
                
            handleChange("skillLevel", value)
        }
        return(
            <Box>
                <Slider defaultValue={3} min={1} max={6} step={1} onChange={(val) => handleSlide(val)}>
                    <SliderMark
                        value={sliderValue}
                        textAlign='center'
                        bg='blue.500'
                        color='white'
                        mt='-10'
                        ml='-5'
                        w='12'
                    >
                    </SliderMark>
                    <SliderTrack bg='brand.lightGrey'>
                        <Box position='relative' right={10} />
                        <SliderFilledTrack bg='brand.white' />
                    </SliderTrack>
                    <SliderThumb boxSize={5}  bg='brand.blue' />
                </Slider>
                {sliderValue === 0 &&
                    <Text> Please Choose a Skill Level </Text>
                }
                            {sliderValue === 1 &&
                    <Text> Beginner </Text>
                }
                            {sliderValue === 2 &&
                    <Text> Novice </Text>
                }
                            {sliderValue === 3 &&
                    <Text> Intermediate </Text>
                }
                            {sliderValue === 4 &&
                    <Text> Advanced </Text>
                }
                            {sliderValue === 5 &&
                    <Text> Expert </Text>
                }
                            {sliderValue === 6 &&
                    <Text> Professional </Text>
                }
            </Box>
        )
}
