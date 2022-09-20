import { useState } from 'react';
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Text,
  SliderThumb,
} from '@chakra-ui/react';
import { SkillSliderProps } from '../../data/interfaces/interfaces';

export default function SkillSlider({
  skillLevel,
  handleChange,
}: SkillSliderProps): JSX.Element {
  const [sliderValue, setSliderValue] = useState(
    skillLevel === '' ? 0 : mapSkillLevelToValue(),
  );

  function mapSkillLevelToValue(): number {
    let defaultValue = 3;
    if (skillLevel === 'beginner') defaultValue = 1;
    else if (skillLevel === 'novice') defaultValue = 2;
    else if (skillLevel === 'intermediate') defaultValue = 3;
    else if (skillLevel === 'advanced') defaultValue = 4;
    else if (skillLevel === 'expert') defaultValue = 5;
    else if (skillLevel === 'professional') defaultValue = 6;
    return defaultValue;
  }

  function handleSlide(newSliderValue: number): void {
    setSliderValue(() => newSliderValue);
    let value = '';
    if (newSliderValue === 1) value = 'beginner';
    else if (newSliderValue === 2) value = 'novice';
    else if (newSliderValue === 3) value = 'intermediate';
    else if (newSliderValue === 4) value = 'advanced';
    else if (newSliderValue === 5) value = 'expert';
    else if (newSliderValue === 6) value = 'professional';

    handleChange('skillLevel', value);
  }

  return (
    <Box>
      <Slider
        defaultValue={mapSkillLevelToValue()}
        min={1}
        max={6}
        step={1}
        onChange={(val) => handleSlide(val)}
        data-testid='sliderValue'
      >
        <SliderTrack bg='brand.lightGrey'>
          <Box position='relative' right={10} />
          <SliderFilledTrack
            bg={sliderValue !== 0 ? 'brand.blue' : 'brand.white'}
            data-testid='knob'
          />
        </SliderTrack>
        <SliderThumb
          boxSize={5}
          bg={sliderValue !== 0 ? 'brand.blue' : 'brand.white'}
        />
      </Slider>
      {sliderValue === 1 && (
        <Text fontSize='xs'>
          {' '}
          <b>BEGINNER:</b> You&apos;re new to mountain biking, and your first
          priority is trying to feel comfortable on the bike. Trails are fairly
          smooth, and speeds are kept low.
        </Text>
      )}
      {sliderValue === 2 && (
        <Text fontSize='xs'>
          {' '}
          <b>NOVICE: </b>
          You&apos;re starting to get comfortable on the bike and challenging
          yourself by tackling terrain you previously found too difficult.
          Trails are getting rougher, and your speed is increasing.{' '}
        </Text>
      )}
      {sliderValue === 3 && (
        <Text fontSize='xs'>
          {' '}
          <b>INTERMEDIATE: </b>
          You&apos;re riding steeper terrain with roots and rocks in all weather
          conditions. You feel more confident on the bike, and may be learning
          how to jump and drop small features.
        </Text>
      )}
      {sliderValue === 4 && (
        <Text fontSize='xs'>
          {' '}
          <b>ADVANCED: </b>
          You&apos;re a serious mountain biker that is confident riding most
          trails. You&apos;ll glady ride medium sized jumps and drops, as well
          as steep rolls where proper braking is critical.
        </Text>
      )}
      {sliderValue === 5 && (
        <Text fontSize='xs'>
          {' '}
          <b>EXPERT: </b>
          <i>Regional fast person.</i> There&apos;s very little terrain you shy
          away from, and you ride it aggressively. You&apos;re actively pumping
          and scrubbing the terrain to carry speed, or riding the most
          challenging features with precision.
        </Text>
      )}
      {sliderValue === 6 && (
        <Text fontSize='xs'>
          {' '}
          <b>PROFESSIONAL: </b>
          An exceptionally skilled rider who makes the local heros scratch their
          heads. You can achieve great results nationally and hold your own at
          an international event.{' '}
        </Text>
      )}
    </Box>
  );
}
