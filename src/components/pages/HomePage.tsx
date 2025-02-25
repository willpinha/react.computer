import {
	ActionIcon,
	Badge,
	Button,
	Container,
	Group,
	Image,
	SimpleGrid,
	Stack,
	Text,
	TextInput,
	ThemeIcon,
	Title,
	Tooltip,
} from "@mantine/core";
import {
	IconBook2,
	IconBrandGithub,
	IconBrandOpenSource,
	IconHash,
	IconHeartFilled,
	IconSearch,
} from "@tabler/icons-react";
import { Link } from "react-router";
import { numCategories, numComponents, wiki } from "../../lib/wiki";
import { ThemeButton } from "../button/ThemeButton";

export function HomePage() {
	return (
		<Stack gap="xl" p="md" align="center">
			<Stack gap="xs" align="center">
				<Image src="/images/logo.svg" w={180} />

				<Title size={40}>
					react.
					<Text
						span
						inherit
						c="blue"
						variant="gradient"
						gradient={{ from: "#04D0F4", to: "blue" }}
					>
						computer
					</Text>
				</Title>

				<Group gap="xs">
					<Tooltip label="Sponsor" withArrow>
						<ActionIcon
							color="red"
							component={Link}
							to="https://github.com/sponsors/willpinha"
						>
							<IconHeartFilled />
						</ActionIcon>
					</Tooltip>
					<Tooltip label="Contribute" withArrow>
						<ActionIcon
							component={Link}
							to="https://github.com/willpinha/react-computer/blob/master/CONTRIBUTING.md"
						>
							<IconBrandOpenSource />
						</ActionIcon>
					</Tooltip>
					<Tooltip label="README" withArrow>
						<ActionIcon
							variant="default"
							component={Link}
							to="https://github.com/willpinha/react-computer/blob/master/README.md"
						>
							<IconBook2 />
						</ActionIcon>
					</Tooltip>
					<Tooltip label="Repository" withArrow>
						<ActionIcon
							variant="default"
							component={Link}
							to="https://github.com/willpinha/react-computer"
						>
							<IconBrandGithub />
						</ActionIcon>
					</Tooltip>
					<ThemeButton />
				</Group>
			</Stack>

			<Stack gap="xs" w="100%" align="center">
				<TextInput
					w="100%"
					maw={400}
					placeholder="Search categories"
					leftSection={<IconSearch size={20} />}
				/>

				<Text ta="center">
					<Badge variant="outline" size="xs" component="span">
						{numComponents()}
					</Badge>{" "}
					components in{" "}
					<Badge variant="outline" size="xs" component="span">
						{numCategories()}
					</Badge>{" "}
					categories
				</Text>
			</Stack>

			<Container w="100%" size="lg">
				<SimpleGrid cols={{ xs: 1, sm: 2, md: 5 }} w="100%">
					{Object.entries(wiki).map(([category, components]) => (
						<Button
							key={category}
							justify="space-between"
							leftSection={
								<ThemeIcon
									variant="transparent"
									color="blue"
									size="xs"
								>
									<IconHash />
								</ThemeIcon>
							}
							rightSection={
								<Text inherit c="dimmed" size="xs">
									{Object.keys(components).length}
								</Text>
							}
							variant="default"
							component={Link}
							to={`/categories/${category}`}
						>
							{category}
						</Button>
					))}
				</SimpleGrid>
			</Container>
		</Stack>
	);
}
