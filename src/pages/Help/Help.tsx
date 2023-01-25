import {
	Container,
	Heading,
	Input,
	Text,
	VStack,
	HStack,
	InputGroup,
	InputRightElement,
	Icon,
	Divider,
	Link,
	UnorderedList,
	ListItem,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {
	FaSearch,
	FaHandsHelping,
	FaTools,
	FaBicycle,
	FaChevronCircleLeft,
	FaChevronCircleRight,
} from 'react-icons/fa';

export default function Help(): JSX.Element {
	const smallScreen = 768;
	const [showPanel, setShowPanel] = useState(true);

	const useViewport = () => {
		const [width, setWidth] = useState(window.innerWidth);
		useEffect(() => {
			const handleWindowResize = () => setWidth(window.innerWidth);
			window.addEventListener('resize', handleWindowResize);
			if (width < smallScreen) setShowPanel(() => false);
			else setShowPanel(() => true);
			return () => window.removeEventListener('resize', handleWindowResize);
		}, [width]);
		return { width };
	};
	const { width } = useViewport();

	function closePanelForSmallScreen(): void {
		if (width < smallScreen) setShowPanel((prevShowPanel) => !prevShowPanel);
	}

	return (
		<Container w='100%' maxW='64rem'>
			<HStack h='calc(100vh - 50px)' py='1rem' spacing='0px' align='start'>
				{showPanel && (
					<VStack
						alignItems='flex-start'
						overflow='scroll'
						position='sticky'
						w={width < smallScreen ? '100vw' : '50%'}
						h='100%'
						mr='1rem'
						css={{
							'&::-webkit-scrollbar': {
								display: 'none',
							},
							overflowStyle: 'none',
							scrollbarWidth: 'none',
						}}>
						<HStack
							justifyContent={'space-between'}
							position='sticky'
							top='0rem'
							overflow='clipped'
							bg='brand.flatBlack'
							opacity={1}
							w='100%'>
							<InputGroup maxW='70%'>
								<Input
									placeholder='Search'
									_placeholder={{
										opacity: 1,
										color: 'brand.white',
									}}
									borderColor='brand.white'
									bg='brand.flatBlack'
									mb='0.5rem'
								/>
								<InputRightElement>
									<Icon as={FaSearch} w={5} h={5} cursor='pointer' />
								</InputRightElement>
							</InputGroup>
							<Icon
								onClick={() => setShowPanel((prevShowPanel) => !prevShowPanel)}
								as={FaChevronCircleLeft}
								w={5}
								h={5}
								cursor='pointer'
							/>
						</HStack>

						<Link
							onClick={closePanelForSmallScreen}
							href='#usingTheTuningGuide'>
							<Heading as='h3' fontSize={'md'}>
								<Icon as={FaHandsHelping} w={4} h={4} mr='0.75rem' />
								Using The Tuning Guide
							</Heading>
						</Link>
						<Link
							onClick={closePanelForSmallScreen}
							href='#understandingInputs'>
							<Heading as='h3' fontSize={'md'}>
								<Icon as={FaTools} w={4} h={4} mr='0.75rem' />
								Understanding Inputs
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#riderSize'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Rider Size
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#handling'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Handling
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#skillLevel'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Skill Level
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#reach'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Reach
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#stack'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Stack
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#bikeType'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Bike Type
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#yourSettings'>
							<Heading as='h3' fontSize={'md'}>
								<Icon as={FaBicycle} w={4} h={4} mr='0.75rem' />
								Your Setting
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#handlebarWidth'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Handlebar Width
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#handlebarRise'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Handlebar Rise
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#stemLength'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Stem Length
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#stemSpacers'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Stem Spacers
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#tirePressures'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Tire Pressures
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#tireInserts'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Tire Inserts
							</Heading>
						</Link>
					</VStack>
				)}
				{!showPanel && (
					<Icon
						position='sticky'
						top='0.5rem'
						onClick={() => setShowPanel((prevShowPanel) => !prevShowPanel)}
						as={FaChevronCircleRight}
						w={5}
						h={5}
						mr='2rem'
						cursor='pointer'
					/>
				)}
				<VStack
					alignItems={'flex-start'}
					overflow='scroll'
					w={width < smallScreen ? (showPanel ? '0vw' : '100vw') : '100%'}
					h='100%'
					css={{
						'&::-webkit-scrollbar': {
							display: 'none',
						},
						overfloStyle: 'none',
						scrollbarWidth: 'none',
					}}>
					<Heading as='h1' fontSize={'4xl'} id='usingTheTuningGuide'>
						Using The Tuning Guide
					</Heading>
					<Divider />
					<Text>
						The MTB Tuning Guide cannot give you a perfect bike fit. Stating it
						does, would be an ignorant claim. Your perfect mountain bike fit
						will constantly evolve as your skills, personal preferences,
						physical strengths, weaknesses and imbalances change. Different
						bikes will require different setups to customize the bike and rider
						as a single harmonized system. Different terrain fundamentally
						changes the demands on your equipment, and the distribution of your
						weight relative to your bike. My goal is to get 90% of people 90% of
						the way to an excellent bike fit. While my tuning guide can help
						direct you, this page exists to teach you the principles behind its
						decisions.
					</Text>
					<Heading as='h1' fontSize={'4xl'} id='understandingInputs'>
						Understanding Inputs
					</Heading>
					<Divider />
					<Heading as='h2' fontSize={'2xl'} id='riderSize'>
						Rider Size
					</Heading>
					<Text>
						A riders height and weight are the most critical components of a
						bike fit. The MTB Tuning Guide uses your height to approximate if
						your bike is too big, too small or just right, then recommends
						adjustments that will alter your reach, stack and handlebar
						width/rise. It is worth noting that individual proportions (inseam,
						ape index.. etc), as well as the frames overall balance (chainstay,
						wheelbase.. etc) are of utmost importance. However, due to the
						limitations on what the consumer can adjust, they are not considered
						in the MtbTG.
						<br />
						The MtbTG requires rider weight when determining tire pressure and
						tire inserts. In practice, weight must be considered for virtually
						every aspect of the bike, some of the most important being
						suspension, brakes and tires.
					</Text>
					<Heading as='h3' fontSize={'xl'}>
						Accommodating a bike that is too small
					</Heading>
					<Text>
						For riders who are too large for their bike, the MtbTG recommends a
						setup that involves fewer stem spacers and a riser bar. This
						maximizes the reach of the bike while ensuring the handlebars are at
						an appropriate height. Similarly, the width of the handlebar must be
						considered when deciding how long the bike feels, and how easily it
						can be cornered.
					</Text>
					<Heading as='h3' fontSize={'xl'}>
						Accommodating a bike that is too large
					</Heading>
					<Text>
						For riders who are too small for their bike, the MtbTG recommends a
						setup that involves additional stem spacers and a low-rise
						handlebar. This reduces the reach of the bike while ensuring the
						handlebars are at an appropriate height. Similarly, the width of the
						handlebar must be considered when deciding how long the bike feels,
						and how easily it can be cornered.
					</Text>
					<Heading as='h2' fontSize={'2xl'} id='handling'>
						Handling
					</Heading>
					<Text>
						Different riding styles require different setups. Look at
						professional athletes competing at Red Bull Rampage versus a Cross
						Country Olympic track race versus a Downhill World Cup. Even amongst
						the same discipline rider preferences vary greatly. More agile
						riders often prefer a narrower handlebar to help initiate turns by
						getting the bike onto the side knobs of the tires with ease, while a
						wider bar can offer better stability in a straight line. Many other
						factors like head angle, chainstay length, wheelbase, suspension
						settings, tire pressures and many more play a role. For the purposes
						of the MtbTG, the handling preference is only used to aid in
						recommending a handlebar width and rise.
					</Text>
					<Heading as='h2' fontSize={'2xl'} id='skillLevel'>
						Skill Level
					</Heading>
					<Text>
						The skill level of a rider will dictate most of the setting on your
						bike. New mountain bikers ride at much lower speeds, with much less
						aggression and control. As skill and confidence increases, the
						forces exerted on a bike grow rapidly, and the equipment must be
						adjusted to accommodate. Tires will require higher pressures and
						different casings, inserts become beneficial, suspension requires
						significant tuning, and body position changes. As riders become more
						skilled, they often place more weight over the front of the bike as
						they pump and attack the terrain to carry momentum. This means the
						center of mass of the rider over the bike changes, and must be
						adjusted to keep the rider and bike aligned as a single harmonized
						system.
					</Text>
					<Heading as='h2' fontSize={'2xl'} id='reach'>
						Reach
					</Heading>
					<Text>
						Reach is a measurement used to give the rider a rough idea of how
						far the handlebars feel in front of them while in a standing
						position. Reach is the horizontal distance between an imaginary
						vertical line through the bottom bracket, to the top of the head
						tube. While many advanced riders will debate this number with a
						fierce passion, most mountain bikers won&apos;t know how to find
						this! To do so, simply find your bike on the manufactures website
						(your exact model may be listed under the &apos;archives&apos;
						section), and read the geometry chart to find your specific reach
						number. It will likely be between 400mm and 520mm. If all else
						fails, you can take out a tape measure and measure it to the best of
						your abilities.
					</Text>
					<Heading as='h2' fontSize={'2xl'} id='stack'>
						Stack
					</Heading>
					<Text>
						Stack is the vertical height between a horizontal line through the
						center of the bottom bracket and the top of the head tube. It is
						commonly used the get a sense of how high your handlebars feel. You
						can find the stack the same way you find reach, by finding the
						geometry chart for your specific bike on the manufactures website.
						If that fails, you can always use a measuring tape to the best of
						your abilities.
					</Text>
					<Heading as='h2' fontSize={'2xl'} id='bikeType'>
						Bike Type
					</Heading>
					<Text>
						There are many types of mountain bikes with narrower
						classifications, but the MtbTG currently only handles trail and
						enduro bikes. For the purposes of the MtbTG, and enduro bike is
						considered to have roughly 150-180mm of travel, slack geometry, and
						thick casing tires (Maxxis Double Down or thicker for most users).
						Trail bikes fall between the definition of an enduro bike, and a
						proper cross country race bike. Typically trail bikes will have
						120-150mm of travel, moderate geometry, light to medium casing tires
						(Maxxis Exo+ or Exo) and be ridden less aggressively. If you treat
						your trail bike like an enduro bike, you will likely want to choose
						the Enduro bike option.
					</Text>
					<Heading as='h1' fontSize={'4xl'} id='yourSettings'>
						Your Settings
					</Heading>
					<Divider />
					<Text>
						Like all recommendations, it is best to slowly transition towards a
						result and constantly ask yourself this: <b>Better, Worse, Same?</b>{' '}
						Radical changes in bike fit can be jarring, and require an
						adjustment period. That does not mean you should dismiss an
						adjustment just because it feels foreign on the first ride, but you
						need to be honest with yourself and accept the fact that adjusting
						to a new bike fit is a process that takes time. Before making any
						adjustments, always <b>record your current settings</b> so you can
						revert back if need be.
					</Text>
					<Heading as='h2' fontSize={'2xl'} id='handlebarWidth'>
						HandleBar Width
					</Heading>
					<Text>
						Handlebar width is measured with the grips removed, from end to end.
						Many handlebars will come with markings to inform you where to cut,
						but even these are sometimes erroneously labelled. Always mark and
						measure the handlebars before trimming. Don&apos;t forget! Removing
						5mm of width requires a 2.5mm cut from both the left and right side
						of the handlebar.
						<br />
						<br />
						Before trimming your handlebars, I highly recommend you do the
						following.
						<UnorderedList pl='10px' my='1rem'>
							<ListItem>
								Make sure your hands are currently resting in a comfortable
								position on the outer edge of the grips. If they are not,
								precise handlebar width is meaningless, since your effective
								width is different from the actual width (often by a significant
								amount). Adjust your cockpit (brake levers, shifter, etc) so the
								outside edge of your hands are right up against the edge of the
								grip in a comfortable position. If I haven&apos;t convinced you
								yet, having your hand sit inwards of the grip is needlessly
								dangerous, since the bar is more likely to catch on trees and
								other hazards.
							</ListItem>
							<ListItem>
								Check the manufactures recommendations. Some handlebars have a
								minimum width they can be cut to. The MtbTG does it&apos;s best
								to recommend widths that all handlebars can accommodate, but it
								is not guaranteed. All handlebars will have a torque
								recommendation when mounting your cockpit. Carbon handlebars are
								particularly sensitive to torque specifications and are prone to
								cracking when over tightened. Nightmare fuel.
							</ListItem>
							<ListItem>
								Experiment with effective handlebar width before cutting the
								bar. Moving your cockpit controls inbound has a very similar
								effect without the permanence of cutting your handlebars. Start
								by moving your controls 5mm inbound (2.5mm left & right) and
								riding it for at least an hour. Better, Same, Worse? If you like
								it, cut the handlebars, and repeat the process.{' '}
								<b>Always trim the handlebars in small increments</b>, 5mm at a
								time (2.5mm each side), is a good starting point .
							</ListItem>
						</UnorderedList>
					</Text>
					<Heading as='h2' fontSize={'2xl'} id='handlebarRise'>
						Handlebar Rise
					</Heading>
					<Text>
						To adjust handlebar rise, the handlebars need to be replaced. The
						reason handlebar rise is so important, is that it allows you to
						alter the height of your cockpit without impacting the reach of the
						bike. Trigonometry tells us that for a 63&deg; head angle
						(aggressive enduro bike), a 10mm rise in stem spacers will shorten
						the reach by roughly 4.5mm. Similarly, a 66&deg; head angle (trail
						bike) would see approximately a 4mm reduction in reach from the same
						10mm of additional spacers. While this may seem insignificant,
						riders who use a 30mm of stem spacers on an enduro bike are
						shortening their reach by nearly 14mm. Companies like Atherton Bikes
						are selling frames in 10mm reach increments to better match the size
						of the bike to the rider.
					</Text>
					<Heading as='h2' fontSize={'2xl'} id='stemLength'>
						Stem Length
					</Heading>
					<Text>
						Stem length is important for two reasons. The first is to fine tune
						the length of your bike, and the second is to adjust the amount of
						weight on the front wheel. In my opinion, the latter is by far the
						most important factor. Shorter stems (35-40mm) are often preferred
						by riders who like to <i>steer from the back</i>, or remain more
						vertical within the bike. A longer stem (like a 50mm) helps get more
						weight on the front tire to initiate turns and reduce the risk of
						front wheel wash outs. This is increasingly important as the head
						angle gets slacker and the head tube becomes taller, because the
						front axle is further in front of the riders hands. The MtbTG
						admittedly states this is one of the hardest areas of a proper bike
						fit, because it seems too strongly related to personal preference to
						give consistent recommendations. With this in mind, I strongly
						recommend riders consider the handling implications before changing
						stem length to adjust the reach of the bike.
					</Text>
					<Heading as='h2' fontSize={'2xl'} id='stemSpacers'>
						Stem Spacers
					</Heading>
					<Text>
						For the purposes on the MtbTG, stem spacers refer to the total
						diagonal distance (in 2D space) between the top of the head tube,
						and the bottom of the stem. This means a spacer that sits 10mm tall
						on a flat surface should still be called 10mm, despite it raising
						the handle bar by less than 10mm vertically. A 10mm headset top cap
						should also be considered a <i>stem spacer</i> to easily account for
						all material between the head tube and the stem.
						<br />
						<br />
						Stem spacers are one of the most overlooked adjustments riders make.
						As discussed under the{' '}
						<Link href='#handlebarRise' textDecoration='underline'>
							handlebar rise
						</Link>{' '}
						section, altering the number of stem spaces can adjust your reach
						and stack a significant amount, especially in extreme scenarios.
						This shouldn&apos;t be viewed as a problem, but rather an
						opportunity. Adding stem spacers will shorten the reach of your
						bike, making it feel like the handlebars are closer to the rider
						horizontally. It will also raise the stack, which lifts your hands
						further from the ground, leading to a more vertical position on the
						bike. The third implication is bringing the weight of your hands
						further behind the front axle of the bike, therefore reducing the
						weight on the front tire. Reducing the amount of stem spacers has
						the opposite effect, where the reach is increased, the hands feel
						closer to the ground, and more weight is placed on the front tire.
						<br />
					</Text>
					<Heading as='h2' fontSize={'2xl'} id='tirePressures'>
						Tire Pressures
					</Heading>
					<Text>
						All tire pressures are recommended under the assumption that riders
						are using appropriate tire casings for their weight, skill and
						terrain. For most enduro riders, a Maxxis Double Down or Downhill
						casing tire (or equivalent) should be used. Particularly light and
						or timid riders may be better suited to a thinner casing tire. Trail
						bikes are assumed to be running Maxxis Exo+ or equivalent casing
						tires. Particularly light or timid riders may prefer a lighter
						casing tire (like a Maxxis Exo) while the heavier and or more
						aggressive riders should consider categorizing their bike type as
						<i>Enduro</i> for the purposes of this tuning guide.
					</Text>
					<Heading as='h2' fontSize={'2xl'} id='tireInserts'>
						Tire Inserts
					</Heading>
					<Text>
						Not all tire inserts are designed to provide the same ride
						characteristics. This tuning guide is referencing inserts that offer
						both rim protection, and support for the tire. Cush Core and Rimpact
						are the recommended options. Tire inserts can offer many benefits to
						the rider. The most significant of which, are
						<UnorderedList pl='10px' my='1rem'>
							<ListItem>
								Allowing the rider to run lower tire pressures, which increase
								traction
							</ListItem>
							<ListItem>Decreased tire roll while cornering</ListItem>
							<ListItem>Dampens trail vibrations and chatter</ListItem>
							<ListItem>Reduces the risk of flat tires and rim damage</ListItem>
							<ListItem>
								Compressors are rarely required for tire installations
							</ListItem>
						</UnorderedList>
						While that all sounds fantastic, it&apos;s not for everyone. Most
						new riders can&apos;t notice the benefits, which is mostly due to
						the benefits growing increasingly important as the riders skill,
						weight and speed increase. Effectively, tire inserts are only
						beneficial when the tire experiences sufficiently high forces. Tire
						inserts also have drawbacks that every rider must consider.
						<UnorderedList pl='10px' my='1rem'>
							<ListItem>
								Increased weight (rotational weight is particularly noticeable)
							</ListItem>
							<ListItem>
								When you do get a flat tire, trail side repairs become more
								difficult and messy
							</ListItem>
							<ListItem>Installation is challenging</ListItem>
							<ListItem>Additional tire sealant required</ListItem>
						</UnorderedList>
					</Text>
				</VStack>
			</HStack>
		</Container>
	);
}
